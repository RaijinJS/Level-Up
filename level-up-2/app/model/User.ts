import mongoose, { Schema } from "mongoose";
import { UserType } from "../types/User";

const userSchema = new Schema<UserType>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User =
  mongoose.models.User || mongoose.model<UserType>("User", userSchema);
export default User;
