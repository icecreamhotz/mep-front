export interface IBackofficeUser {
  username: string;
  password: string;
  confirm_password: string;
  email: string;
  name: string;
  lastname: string;
  role: string;
}

export interface IErrorField {
  [key: string]: string
}

export enum BackofficeUserActionTypes {
  CREATE_BOF_USER = "@backofficeuser/CREATE_BOF_USER",
  CREATE_BOF_SUCCESS = "@backofficeuser/CREATE_BOF_SUCCESS",
  CREATE_BOF_FAIL_VALIDATE = "@backofficeuser/CREATE_BOF_FAIL_VALIDATE",
  CREATE_BOF_FAIL_ERROR = "@backofficeuser/CREATE_BOF_FAIL_ERROR",
}

export interface BackofficeUserState {
  readonly info: IBackofficeUser;
  readonly loading: boolean;
  readonly errorFields: IErrorField[]
}
