import express from "express";
import {
  createUser,
  loginUser,
  getUsers,
} from "../controllers/userController.js";
import auth from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.post("/login", loginUser);
userRouter.get("/", auth, getUsers);

export default userRouter;
