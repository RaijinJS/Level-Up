"use client";

import React, { useEffect } from "react";
import TaskCard from "../../components/TaskCard/TaskCard";
import ProgressionBar from "../../components/ProgressionBar/ProgressionBar";
import { TaskType } from "../types/Task";
import { setTask, addInitialTasks } from "../../redux/features/tasks-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../../redux/store";
import { FetchTaskButton } from "../../components/Buttons";

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

  return (
    // TODO: HTML Structure has repeated main semantic HTML. Pick one
    <main>
      <div className="pt-3">
        <a href="/Profile">
          {/* Put state below into redux and a provider function */}
          <ProgressionBar />
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
        <FetchTaskButton />
      </div>
    </main>
  );
}
