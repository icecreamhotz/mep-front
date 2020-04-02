import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { createUserBOF, createUserBOFSuccess, createUserBOFFailValidate, createUserBOFFailError } from "./actions";
import { BackofficeUserActionTypes } from "./types";
import { createBOFUser } from "./services";

function* handleRegisterBOFUser(action: ReturnType<typeof createUserBOF>) {
  try {
    const response = yield call(createBOFUser, action.payload);
    console.log("res", response);
    yield put(createUserBOFSuccess())
  } catch (err) {
    const { response } = err
    if(response.status === 422) {
      console.log({
        sdsa: "dsad",
        dasda: "dasda"
      })
      yield put(createUserBOFFailValidate(response.data.errors))
      return
    }
    createUserBOFFailError()
    console.log("err", err.response);
  }
}

function* watchRegisterBOFUser() {
  yield takeEvery(
    BackofficeUserActionTypes.CREATE_BOF_USER,
    handleRegisterBOFUser
  );
}

function* backofficeUserSaga() {
  yield all([fork(watchRegisterBOFUser)]);
}

export default backofficeUserSaga;
