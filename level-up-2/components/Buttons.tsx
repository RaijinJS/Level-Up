"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { setTask } from "../redux/features/tasks-slice";
import { TaskType } from "../app/types/Task";

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
      const task: TaskType = await response.json();
      dispatch(setTask(task));
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  return (
    <button
      onClick={fetchTask}
      className="bg-red-300 text-white p-4 rounded-full shadow-lg animate-pulse transition-all duration-200 ease-in-out transform hover:scale-110 cursor-pointer">
      {/* TODO: Make svg below a component */}
      <svg className="h-6 w-6" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};
