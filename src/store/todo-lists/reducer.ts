import { Reducer } from 'redux'
import { TodoListsState, TodoListsActionTypes } from './types'

export const initialState: TodoListsState = {
  list: [],
}

const reducer:Reducer<TodoListsState> = (state = initialState, action) => {
  switch (action.type) {
    case TodoListsActionTypes.ADD:
      return {...state, list: [...state.list, action.payload] }
    case TodoListsActionTypes.REMOVE:
      return {...state, list: action.payload}
    default: {
      return state
    }
  }
}

export { reducer as TodoListsReducer }