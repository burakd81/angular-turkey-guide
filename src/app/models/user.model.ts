import {Role} from "./role.enum";

export class User {
  id!:number;
  username: string = "";
  password: string = "";
  mail: string = "";
  token: string = "";
  role: Role = Role.USER;
}
