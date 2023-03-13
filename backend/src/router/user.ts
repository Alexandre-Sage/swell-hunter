import { Router } from "express";
import { CustomError, decodeToken, errorHanlder } from "../modules";
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
    router.post("/log-in", async (req, res) => {
      const { payload } = req.body;
      try {
        const token = await service.logIn(payload);
        res.status(httpStatus.GET).json({
          payload: {
            token,
          },
          error: false,
        });
      } catch (error) {
        const { httpStatus, message } = errorHanlder(error);
        res.status(httpStatus).json({
          error: true,
          payload: message,
        });
      }
    });
    router.get("/:id", async (req, res) => {
      try {
        const { id } = await decodeToken(req);
        const payload = await service.fetchById(id);        
        res.status(httpStatus.GET).json({
          error: false,
          payload,
        });
      } catch (error) {
        const { httpStatus, message } = errorHanlder(error);
        res.status(httpStatus).json({
          payload: message,
          error: true,
        });
      }
    });
    router.put("/:id",async (req,res)   =>{
      const {payload}= req.body
      try {
        await decodeToken(req)
        await this.service.update(payload)
        res.status(httpStatus.PUT).json({
          payload:"",
          error:false,
        })
      } catch (error) {
        const {httpStatus,message}=errorHanlder(error)
        res.status(httpStatus).json({
          payload:message,
          error:true
        })
      }
    })
    return router;
  };
  
}
