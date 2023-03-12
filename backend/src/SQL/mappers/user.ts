import { DbRow, Mapper, User, UserRow } from "../../types";

export class UserMapper implements Mapper<User, UserRow> {
  dbRowToObject = ({
    created_at,
    email,
    home_spot,
    id,
    password,
    phone,
    salt,
    updated_at,
    user_name,
  }: UserRow): User => ({
    createdAt: created_at,
    email: email,
    homeSpot: home_spot,
    id,
    password,
    phone,
    salt,
    updatedAt: updated_at,
    userName: user_name,
  });
  objectToDbRow = ({
    createdAt,
    email,
    homeSpot,
    id,
    password,
    phone,
    salt,
    updatedAt,
    userName,
  }: User): UserRow => ({
    created_at: createdAt,
    email,
    home_spot: homeSpot,
    id,
    password,
    phone,
    salt,
    updated_at: updatedAt,
    user_name: userName,
  });
}
