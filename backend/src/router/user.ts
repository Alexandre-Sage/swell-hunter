import { Router } from "express";
import { UserService } from "../services/user";
export class UserRouter {
  private readonly router = Router();
  constructor(private readonly service: UserService) {}
  initRouter = () => {
    const { router, service } = this;

    router.post("/sign-up", (req, res) => {});

    return router;
  };
}
