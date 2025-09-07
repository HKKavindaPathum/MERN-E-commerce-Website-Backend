import express from "express";
import {
  createUser,
  createAdmin,
  getUser,
  getAllUsers,
  loginUser,
  loginWithGoogle,
  resetPassword,
  sendOTP,
  blockUser,
  deleteUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

// Auth
userRouter.post("/", createUser);
userRouter.post("/admin", createAdmin);
userRouter.post("/login", loginUser);
userRouter.post("/login/google", loginWithGoogle);
userRouter.post("/send-otp", sendOTP);
userRouter.post("/reset-password", resetPassword);

// Admin routes (specific first!)
userRouter.get("/all", getAllUsers);
userRouter.put("/block/:id", blockUser);
userRouter.delete("/:id", deleteUser);

// Generic user route must come last
userRouter.get("/", getUser);

export default userRouter;
