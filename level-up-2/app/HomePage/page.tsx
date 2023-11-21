"use client";

// TODO: delete comment
//implement a button to skip line to the first completed task

import React, { useEffect } from "react";
import TaskCard from "../../components/TaskCard/TaskCard";
import ProgressionBar from "../../components/ProgressionBar/ProgressionBar";
import { TaskType } from "../types/Task";
import { setTask, addInitialTasks } from "../../redux/features/tasks-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../../redux/store";

export default function Home() {
  // TODO: Once auth is built in, keep track of user's current tasks in DB
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useAppSelector((state) => state.tasksReducer);

  console.log(tasks);

  useEffect(() => {
    getAddedTasks();
  }, []);

  const getAddedTasks = async () => {
    try {
      const response: Response = await fetch("http://localhost:3000/api/tasks/added");
      const data: TaskType[] = await response.json();
      dispatch(addInitialTasks(data));
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

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
    // TODO: HTML Structure has repeated main semantic HTML. Pick one
    <main>
      <div className="pt-3">
        <a href="/Profile">
          {/* Put state below into redux and a provider function */}
          <ProgressionBar totalTasks={tasks.length} completedTasks={tasks.filter((task) => task.completed).length} />
        </a>
      </div>
      {/* TODO: Make a TaskList component and move task logic into it. */}
      <div className="container mx-auto px-4 pt-2">
        {tasks.length === 0 ? (
          <div className="text-center my-10">
            <h2 className="text-2xl font-bold text-gray-800 pb-4">Start with your first useless skill</h2>
            <h3>
              Press the <span className="font-bold text-xl">+</span> button
            </h3>
          </div>
        ) : (
          <TaskCard />
        )}
      </div>

      <div className="fixed bottom-4 left-4">
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
      </div>
    </main>
  );
}
