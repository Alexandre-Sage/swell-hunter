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
