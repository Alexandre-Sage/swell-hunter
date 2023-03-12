import { Request } from "express";
import { randomUUID } from "crypto";
import jsonWebToken from "jsonwebtoken";
import { User, UserId } from "../types/User.type";
const setToken = async ({ id, userName }: Partial<User>) => {
  return jsonWebToken.sign({ id, userName }, `${process.env.TOKEN_SECRET}`, {
    expiresIn: 1000 * 1000 * 1000,
    jwtid: randomUUID(),
  });
};

const decodeToken = async (req: Request) => {
  const token = req.headers.authorization!.split(" ")[1];
  const data = jsonWebToken.verify(
    token,
    `${process.env.TOKEN_SECRET}`
  ) as JwtPayload;
  return {
    userName: data.userName,
    id: data.id,
  };
};
interface JwtPayload {
  id: UserId;
  userName: User["userName"];
  iat: number;
  exp: number;
  jti: string;
}
export { decodeToken, setToken, JwtPayload };
