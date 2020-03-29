import {all,fork,put,takeEvery} from 'redux-saga/effects'
import { TodoListsActionTypes } from './types'
import { ADD } from './actions'

function* handleTodoList(action: ReturnType<typeof ADD>) {
  try {
    yield put(ADD(action.payload))
  } catch(err) {
    console.log(err);
  }
}

function* watchAddTodoList() {
  // yield takeEvery(TodoListsActionTypes.ADD, handleTodoList)
}

function* todolistSaga() {
  yield all([
    fork(watchAddTodoList)
  ])
}

export default todolistSaga