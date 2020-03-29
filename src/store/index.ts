import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import TodoListSaga from "./todo-lists/sagas";
import { TodoListsState } from "./todo-lists/types";
import { TodoListsReducer } from "./todo-lists/reducer";
import BackofficeSaga from "./backoffice-users/sagas";
import { BackofficeUserState } from "./backoffice-users/types";
import { BackofficeReducer } from "./backoffice-users/reducer";

export interface ApplicationState {
  todolists: TodoListsState;
  backofficeUsers: BackofficeUserState;
}

export const createRootReducer = () =>
  combineReducers({
    todolists: TodoListsReducer,
    backofficeUsers: BackofficeReducer
  });

export function* rootSaga() {
  yield all([fork(TodoListSaga), fork(BackofficeSaga)]);
}
