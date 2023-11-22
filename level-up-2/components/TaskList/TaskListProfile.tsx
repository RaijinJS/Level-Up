"use client";

import React, { useEffect } from "react";
import { AppDispatch, useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { setCompletedTasks, setSelectedTask } from "../../redux/features/tasks-slice";
import { TaskType } from "../../app/types/Task";
import { TaskDetailsButton } from "../Buttons";

export default function TaskListProfile() {
  const completedTasks = useAppSelector((state) => state.tasksReducer.completedTasks);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchCompletedTasks = async () => {
      try {
        const response = await fetch("/api/tasks/completed");
        if (response.ok) {
          const data = await response.json();
          dispatch(setCompletedTasks(data.completedTasks));
        } else {
          throw new Error("Failed to fetch completed tasks");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCompletedTasks();
  }, []);

  if (completedTasks.length > 0)
    return (
      <>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Completed Tasks:</h3>
        <ul className="list-disc list-inside text-left pt-5">
          {completedTasks.map((task: TaskType) => (
            <li key={task._id} className="mb-2 text-gray-600">
              {/* format buttons to look like links */}
              <TaskDetailsButton className="hover:text-orange-500 text-left" task={task}>
                {task.title}
              </TaskDetailsButton>
            </li>
          ))}
        </ul>
      </>
    );
}
