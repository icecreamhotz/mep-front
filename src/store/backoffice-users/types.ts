export interface IBackofficeUser {
  username: string;
  password: string;
  confirm_password: string;
  email: string;
  name: string;
  lastname: string;
  role: string;
}

export enum BackofficeUserActionTypes {
  CREATE_BOF_USER = "@backofficeuser/CREATE_BOF_USER"
}

export interface BackofficeUserState {
  readonly info: IBackofficeUser;
}
