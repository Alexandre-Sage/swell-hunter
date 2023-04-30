import { randomBytes, randomUUID } from "crypto";
import { hashPassword } from "../../src/modules";
import { transaction } from "../../src/SQL/database/connection";
import { UserRepository } from "../../src/SQL/repositories";
import { User, UserId } from "../../src/types";
import { now } from "./Globals.fixtures";

const userRepository = new UserRepository(transaction);
const userIds = [randomUUID(), randomUUID()] as UserId[];

const userFactory = ({
  createdAt,
  email,
  homeSpot,
  id,
  password,
  phone,
  updatedAt,
  userName,
}: Partial<User>): User => {
  const { password: hashedPassword, salt } = hashPassword(password ?? "test");
  return {
    createdAt: createdAt ?? now,
    email: email ?? "test@test.com",
    homeSpot: homeSpot ?? null,
    id: id ?? (randomUUID() as UserId),
    password: hashedPassword,
    phone: phone ?? "0682569696",
    salt: salt,
    updatedAt: updatedAt ?? now,
    userName: userName ?? "test",
  };
};
const userSetUp = async () => {
  const user = userFactory({ id: userIds[0] });
  return userRepository.create(user);
};
const userTearDown = async () => {
  return transaction(async (tsx) => tsx.table("users").delete("*"));
};
const fetchUser = () =>
  transaction((tsx) =>
    tsx.table("users").select("*").where({ id: userIds[0] })
  );
//userRepository.fetchOne({
//  columnName: "id",
//  operator: "=",
//  searchValue: userIds[0],
//});

const fetchUsers = () =>
  transaction(async (tsx) => tsx.table("users").select("*"));

export {
  userFactory,
  userSetUp,
  userIds,
  userTearDown,
  fetchUser,
  fetchUsers,
  userRepository,
};
