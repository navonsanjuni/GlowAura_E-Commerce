import express from 'express';
import { createUser, loginUser, getUsers } from '../controllers/userController.js';

const userRouter = express.Router();


userRouter.post("/", createUser);
userRouter.post("/login", loginUser);
userRouter.get("/", getUsers); // GET /api/users/ (admin only)

export default userRouter;
