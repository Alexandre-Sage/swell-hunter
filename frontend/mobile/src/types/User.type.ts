import { Id } from "./Global.type";

type UserId = Id<string>;

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


export { User, UserId };
