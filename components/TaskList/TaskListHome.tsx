"use client";

import React, { useEffect } from "react";
import TaskCard from "../TaskCard/TaskCard";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addInitialTasks } from "../../redux/features/tasks-slice";
import { TaskType } from "../../app/types/Task";

export default function TaskListHome() {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const dispatch = useAppDispatch();

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
    <>
      {tasks.length === 0 ? (
        <div className="text-center my-10">
          <h2 className="text-2xl font-bold text-gray-800 pb-4">Start with your first useless skill</h2>
          <h3>
            Press the <span className="font-bold text-xl">+</span> button
          </h3>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {tasks.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
      )}
    </>
  );
}
