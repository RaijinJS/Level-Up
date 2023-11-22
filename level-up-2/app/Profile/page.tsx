"use client";

import React, { useState, useEffect } from "react";
import TaskDetail from "../../components/TaskDetail/TaskDetail";
import { TaskType } from "../types/Task";

export default function Profile() {
  // TODO: Redux states reminder

  // The completedTasks state is either an empty array, or an array of Tasks
  const [completedTasks, setCompletedTasks] = useState<TaskType[]>([]);
  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);

  // TODO Create a taskList component that shows the different tasks. We can re-use this TaskList component on the homepage as well.
  // By creating that component we will move all of the state logic out of this page.

  // Every route should be SSR. State management is done in the components.

  const showTaskDetails = (task: TaskType) => {
    setSelectedTask(task);
  };

  const closeTaskDetails = () => {
    setSelectedTask(null);
  };

  useEffect(() => {
    const fetchCompletedTasks = async () => {
      try {
        const response = await fetch("/api/tasks/completed");
        if (response.ok) {
          const data = await response.json();
          setCompletedTasks(data.completedTasks);
        } else {
          throw new Error("Failed to fetch completed tasks");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCompletedTasks();
  }, []);
  // TODO: DONE - make below a switch statement
  const achievementMessage = () => {
    const count = completedTasks.length;
    switch (true) {
      case count > 20:
        return "🌟 Master 🌟";
      case count > 15:
        return "Advanced ⭐";
      case count > 10:
        return "Pro 🏆";
      case count >= 5:
        return "Amateur 🚀";
      case count > 0:
        return "Rookie 🌱";
      default:
        return "🎯 Set your first task! 🎯";
    }
  };

  return (
    <main className="flex flex-col items-center justify-center w-full h-max">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Your Progress</h2>
        <p className="text-xl text-gray-600 mb-8">
          You have completed
          <span data-testid="count" className="text-2xl font-bold text-green-600 mx-2">
            {completedTasks.length}
          </span>
          {completedTasks.length === 1 ? "task" : "tasks"}.
        </p>
        <p
          data-testid="level"
          className="text-lg font-semibold text-orange-700 py-3 px-6 rounded-lg bg-gradient-to-r from-pink-300 via-orange-300  inline-block  ">
          {achievementMessage()}
        </p>

        <div className="mt-6">
          {completedTasks.length > 0 && (
            <>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Completed Tasks:</h3>
              <ul className="list-disc list-inside text-left pt-5">
                {completedTasks.map((task: TaskType) => (
                  <li key={task._id} className="mb-2 text-gray-600">
                    {/* format buttons to look like links */}
                    <button onClick={() => showTaskDetails(task)} className="hover:text-orange-500 text-left">
                      {task.title}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
      {selectedTask && <TaskDetail task={selectedTask} onClose={closeTaskDetails} showImage={true} />}
    </main>
  );
}
