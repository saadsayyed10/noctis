import { Router } from "express";
import * as controllers from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/sync", controllers.syncClerkUserController);

export default userRouter;
