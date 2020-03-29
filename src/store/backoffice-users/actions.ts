import { action } from "typesafe-actions";
import { BackofficeUserActionTypes, IBackofficeUser } from "./types";

export const createUserBOF = (backofficeUser: IBackofficeUser) =>
  action(BackofficeUserActionTypes.CREATE_BOF_USER, backofficeUser);
