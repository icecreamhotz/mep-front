import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { createUserBOF } from "./actions";
import { BackofficeUserActionTypes } from "./types";
import { createBOFUser } from "./services";

function* handleRegisterBOFUser(action: ReturnType<typeof createUserBOF>) {
  try {
    const response = yield call(createBOFUser, action.payload);
    console.log(response);
  } catch (err) {
    console.log(err);
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
