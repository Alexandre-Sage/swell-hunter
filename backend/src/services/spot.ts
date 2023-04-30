import { SpotRepository } from "../SQL/repositories";
import { joiValidationPartialApplication } from "../modules";
import { SpotId } from "../types";
import { spotJoiValidationSchema } from "../validation";

export class SpotService {
  constructor(
    private readonly repository: SpotRepository,
    private readonly validation = joiValidationPartialApplication(
      spotJoiValidationSchema
    )
  ) {}
  create = () => {};
  fetchById = (id:SpotId) => {};
  fetchAll = () => {};
  update = (id:SpotId) => {};
  delete = (id:SpotId) => {};
}
