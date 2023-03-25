import { Id } from "./Global.type";
import { Lens, lensProps } from "sage-functional-library";
type UserId = Id<string>;
class UserC {
  constructor(
    public data: User //public email: string, //public phone: string, //public userName: string, //public password: string, //public createdAt: Date, //public updatedAt: Date, //public salt: string, //public homeSpot: string | null
  ) {}
  lens = lensProps<UserC, keyof UserC>("data");
  //userLens: Lens<UserC, keyof UserC> = {
  //  get: (property: keyof UserC) => this[property],
  //  set: () => new UserC({} as User),
  //};
}

interface User {
  id: UserId;
  email: string;
  phone: string;
  userName: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  salt: string;
  homeSpot: string | null;
}
interface UserRow {
  id: UserId;
  email: string;
  phone: string;
  user_name: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  salt: string;
  home_spot: string | null;
}

export { User, UserId, UserRow };
