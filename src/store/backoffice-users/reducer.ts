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
  },
  loading: true,
  errorFields: [{

  }]
};

const reducer: Reducer<BackofficeUserState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case BackofficeUserActionTypes.CREATE_BOF_USER:
      return { ...state, ...action.payload, loading: true};
    case BackofficeUserActionTypes.CREATE_BOF_SUCCESS:
      return { ...state, loading: false }
    case BackofficeUserActionTypes.CREATE_BOF_FAIL_VALIDATE:
      return { ...state, loading: false, errorFields: action.payload }
    case BackofficeUserActionTypes.CREATE_BOF_FAIL_ERROR:
      return { ...state, loading: false }
    default: {
      return state;
    }
  }
};

export { reducer as BackofficeReducer };
