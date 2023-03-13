import "dotenv/config";
import express, { Express } from "express";
import { createServer } from "http";
import bodyParser from "body-parser";
import morgan from "morgan";
import { UserRepository } from "./src/SQL/repositories";
import { transaction } from "./src/SQL/database/connection";
import { UserService } from "./src/services/user";
import { UserRouter } from "./src/router/user";
console.log(process.env.PORT);
const app = express();

app.use(morgan(process.env.STAGE==="test"? "tiny": "dev"));
app.use(bodyParser.json());

const userRepository = new UserRepository(transaction);
const userService = new UserService(userRepository);
const userRouter = new UserRouter(userService).initRouter();
app.use("/users", userRouter);
const server = createServer(app);

server.listen(process.env.PORT || 5000, () => {
  `Server listening on ${process.env.PORT || 5000}`;
});
export { server };
