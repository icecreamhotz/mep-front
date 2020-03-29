export interface ITodoLists {
  list: string;
}

export enum TodoListsActionTypes {
  ADD = "@todo/ADD",
  REMOVE = "@todo/REMOVE"
}

export interface TodoListsState {
  readonly list: ITodoLists[];
}
