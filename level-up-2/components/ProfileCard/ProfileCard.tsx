"use client";

import React from "react";
import TaskListProfile from "../TaskList/TaskListProfile";
import { useAppSelector } from "../../redux/store";

// TODO: DONE Create a taskList component for the profile page

export default function ProfileCard() {
  const completedTasks = useAppSelector((state) => state.tasksReducer.completedTasks);

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
        <TaskListProfile />
      </div>
    </div>
  );
}
