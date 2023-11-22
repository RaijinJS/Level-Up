"use client";

import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { setTask, toggleComplete, removeTask, setSelectedTask } from "../redux/features/tasks-slice";
import { TaskType } from "../app/types/Task";
import Image from "next/image";
import addButton from "../public/addButton.svg";

export const NavigateToHomeButton = () => {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/signinPage");
  };

  return (
    <button
      onClick={navigateToHome}
      className="px-6 py-3 text-lg font-bold text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors duration-300 shadow-md">
      Ready, Set, Go!
    </button>
  );
};

export const FetchTaskButton = () => {
  const dispatch = useDispatch<AppDispatch>();

  const fetchTask = async () => {
    try {
      const response: Response = await fetch("http://localhost:3000/api/tasks", {
        method: "PUT",
      });
      const task: TaskType | {message: string, status: number} = await response.json();
      if ('title' in task) {
        dispatch(setTask(task));
      } else {
        console.log(task.message)
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  return (
    <button
      onClick={fetchTask}
      className="bg-red-300 text-white p-4 rounded-full shadow-lg animate-pulse transition-all duration-200 ease-in-out transform hover:scale-110 cursor-pointer">
      {/* TODO: DONE Make svg below a component */}
      <Image src={addButton} alt="Add Button" className="h-6 w-6" />
    </button>
  );
};

interface TaskCardButtonProps {
  task: TaskType;
}

export const ToggleCompleteButton: React.FC<TaskCardButtonProps> = ({ task }) => {
  const dispatch = useDispatch<AppDispatch>();

  const onToggleComplete: (taskId: string, completed: boolean) => void = async (taskId: string, completed: boolean) => {
    await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newCompleted: !completed }),
    });
    dispatch(toggleComplete(taskId));
  };

  return (
    <button
      data-testid="complete-button"
      onClick={() => onToggleComplete(task._id, task.completed)}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
        task.completed ? "bg-green-500 text-white" : "bg-rose-200 text-gray-800"
      } transition-all duration-200 ease-in-out transform hover:scale-105 cursor-pointer `}
      title={task.completed ? "Task Completed" : "Mark it as complete"}>
      {task.completed ? "Completed" : "In Progress"}
    </button>
  );
};

export const DeleteButton: React.FC<TaskCardButtonProps> = ({ task }) => {
  const dispatch = useDispatch<AppDispatch>();

  const onDelete = async (task: TaskType) => {
    try {
      const response: Response = await fetch(`http://localhost:3000/api/tasks/${task._id}/remove`, {
        method: "PUT",
      });
      dispatch(removeTask(task._id));
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  return (
    <button
      data-testid="delete-button"
      onClick={() => onDelete(task)}
      className="text-red-500 hover:text-red-600 transition-colors duration-300"
      title="Delete?">
      {/* TODO: Turn this SVG into an image */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    </button>
  );
};

type TaskDetailsButtonProps = {
  task: TaskType;
  children: ReactNode;
  className?: string;
  testId?: string;
  title?: string;
};

export const TaskDetailsButton: React.FC<TaskDetailsButtonProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();

  const showTaskDetails = (task: null | TaskType) => {
    dispatch(setSelectedTask(task));
  };

  return (
    <button
      data-testid={props.testId}
      title={props.title}
      className={props.className}
      onClick={() => showTaskDetails(props.task)}>
      {props.children}
    </button>
  );
};
