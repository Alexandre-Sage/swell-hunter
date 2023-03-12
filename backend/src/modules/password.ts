import { randomBytes, pbkdf2Sync } from "crypto";
import { User } from "../types";
import { CustomError } from "./error";

const hashPassword = (password: string) => {
  if (password !== "") {
    const salt = randomBytes(25).toString("hex");
    return {
      salt,
      password: pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex"),
    };
  } else
    return {
      salt: "",
      password: "",
    };
};
const checkPassword = async ({
  password,
  salt,
  dbPassword,
}: Pick<User, "password" | "salt"> & { dbPassword: string }) => {
  const hashedPassword = pbkdf2Sync(
    password ?? "",
    salt,
    1000,
    64,
    "sha512"
  ).toString("hex");
  if (dbPassword !== hashedPassword)
    throw new CustomError(400, "Invalid password");
  return true;
};
export { hashPassword, checkPassword };
