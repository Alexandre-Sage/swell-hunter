import { Router } from "express";
import { composeHigherOrderAsync } from "sage-functional-library";
import { CustomError, errorHanlder } from "../modules";
import { httpStatus } from "../modules/httpStatus";
import { UserService } from "../services/user";
export class UserRouter {
  private readonly router = Router();
  constructor(private readonly service: UserService) {}
  initRouter = () => {
    const { router, service } = this;

    router.post("/sign-up", async (req, res) => {
      try {
        const { payload, passwordConfirmation } = req.body;
        if (payload.password !== passwordConfirmation)
          throw new CustomError(httpStatus.INPUT_ERROR, "Password mismatch");
        await service.create(payload);
        res.status(httpStatus.CREATE).json({
          payload: "User created",
          error: false,
        });
      } catch (error) {
        const { httpStatus, message } = errorHanlder(error);
        res.status(httpStatus).json({
          payload: message,
          error: true,
        });
      }
    });

    return router;
  };
}
