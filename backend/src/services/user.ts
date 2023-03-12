import { randomUUID } from "crypto";
import { composeHigherOrderAsync } from "sage-functional-library";
import { hashPassword, joiValidationPartialApplication } from "../modules";
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
  fetchById = () => {};
  update = () => {};
  delete = () => {};
}
