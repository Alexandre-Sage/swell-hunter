import { joiValidationPartialApplication } from "../modules";
import { UserRepository } from "../SQL/repositories";
import { userJoiValidationSchema } from "../validation";

export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly validation = joiValidationPartialApplication(
      userJoiValidationSchema
    )
  ) {}
  create = () => {};
  fetchById = () => {};
  update = () => {};
  delete = () => {};
}
