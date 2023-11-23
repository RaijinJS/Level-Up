import mongoose, { Schema } from "mongoose";
import { TaskType } from "../types/Task";

const taskSchema = new Schema<TaskType>({
  title: String,
  description: String,
  image: String,
  completed: { type: Boolean, default: false },
  more: String,
  added: { type: Boolean, default: false },
});

const Task =
  mongoose.models.Task || mongoose.model<TaskType>("Task", taskSchema);
export default Task;

// TODO: DONE - Move to new model folder
