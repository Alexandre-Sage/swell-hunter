import { randomUUID } from "crypto";
import { composeHigherOrderAsync } from "sage-functional-library";
import {
  checkPassword,
  hashPassword,
  joiValidationPartialApplication,
  setToken,
} from "../modules";
import { UserRepository } from "../SQL/repositories";
import { User, UserId } from "../types";
import { userJoiValidationSchema } from "../validation";

export class UserService {
  constructor(
    private readonly repository: UserRepository,
    private readonly validation = joiValidationPartialApplication(
      userJoiValidationSchema
    )
  ) {}
  create = ({ email, homeSpot, password, phone, userName }: User) => {
    const { password: hashedPassword, salt } = hashPassword(password);
    const user: User = {
      email,
      password: hashedPassword,
      phone,
      userName,
      homeSpot,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: randomUUID() as UserId,
      salt,
    };
    return composeHigherOrderAsync({
      firstToExecute: this.validation,
      secondToExecute: this.repository.create,
    })(user);
  };
  logIn = async ({ password, email }: Pick<User, "email" | "password">) => {
    const {
      salt,
      password: dbPassword,
      id,
      userName,
    } = await this.repository.fetchOne({
      searchValue: email,
      columnName: "email",
      operator: "=",
      selectedField: ["password", "salt", "user_name", "id"],
    });
    await checkPassword({ dbPassword, password, salt });
    return setToken({ userName, id });
  };
  fetchById = async (id: UserId) => {
    return this.repository.fetchOne({
      searchValue: id,
    });
  };
  update = async (user: User) => {
    const updatedUser = await this.validation({ ...user, createdAt: new Date() });
    this.repository.update({
      data: updatedUser,
      searchValue: updatedUser.id
    })
  };
  delete = () => {};
}
