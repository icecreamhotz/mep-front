import { action } from "typesafe-actions";
import { TodoListsActionTypes, ITodoLists } from "./types";

export const ADD = (list: string) => action(TodoListsActionTypes.ADD, list);
export const REMOVE = (lists: ITodoLists[]) =>
  action(TodoListsActionTypes.REMOVE, lists);
