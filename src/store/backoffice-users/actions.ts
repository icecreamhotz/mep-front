import { action } from "typesafe-actions";
import { BackofficeUserActionTypes, IBackofficeUser, IErrorField } from "./types";

export const createUserBOF = (backofficeUser: IBackofficeUser) =>
  action(BackofficeUserActionTypes.CREATE_BOF_USER, backofficeUser);

export const createUserBOFSuccess = () => action(BackofficeUserActionTypes.CREATE_BOF_SUCCESS)

export const createUserBOFFailValidate = (errorFields: IErrorField[]) => action(BackofficeUserActionTypes.CREATE_BOF_FAIL_VALIDATE, errorFields)

export const createUserBOFFailError = () => action(BackofficeUserActionTypes.CREATE_BOF_FAIL_ERROR)