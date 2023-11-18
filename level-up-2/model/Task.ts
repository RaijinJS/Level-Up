import mongoose, { Schema } from "mongoose";
import { TaskType } from "../app/types/Task";

const taskSchema = new Schema<TaskType>({
  title: String,
  description: String,
  image: String,
  completed: { type: Boolean, default: false },
  more: String,
});

const Task = mongoose.models.Task || mongoose.model<TaskType>("Task", taskSchema);
export default Task;
