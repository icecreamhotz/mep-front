import axios from "../../services/api";
import { IBackofficeUser } from "./types";

export async function createBOFUser(bofUser: IBackofficeUser) {
  const {
    username,
    password,
    confirm_password,
    email,
    name,
    lastname,
    role
  } = bofUser;
  const data = {
    username,
    password,
    confirm_password,
    email,
    name,
    lastname,
    role
  };
  const res = await axios.post("/backoffice-user", data);
  return res;
}
