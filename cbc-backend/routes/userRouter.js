import express from 'express';
import { createUser, loginUser, getUsers } from '../controllers/userController.js';
import auth from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.post("/login", loginUser);
// Protect fetching all users with JWT auth (admin only)
userRouter.get("/", auth, getUsers); // GET /api/users/ (admin only)

export default userRouter;
