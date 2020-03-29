import { Reducer } from "redux";
import { BackofficeUserState, BackofficeUserActionTypes } from "./types";

export const initialState: BackofficeUserState = {
  info: {
    username: "",
    password: "",
    confirm_password: "",
    email: "",
    name: "",
    lastname: "",
    role: ""
  }
};

const reducer: Reducer<BackofficeUserState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case BackofficeUserActionTypes.CREATE_BOF_USER:
      return { ...state, ...action.payload };
    default: {
      return state;
    }
  }
};

export { reducer as BackofficeReducer };
