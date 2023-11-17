"use client";

// TODO: delete comment
//implement a button to skip line to the first completed task

import React, { useState, useEffect } from "react";
import TaskCard from "components/TaskCard";
import ProgressionBar from "components/ProgressionBar";

export default function Home() {
  // TODO: Once auth is built in, keep track of user's current tasks in DB
  const tasksFromLS = JSON.parse(localStorage.getItem('tasks') || '[]');
  const [tasks, setTasks] = useState([...tasksFromLS]);

  // Update local storage whenever tasks change
  useEffect(() => {
    // TODO: change localStorage syntax
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const fetchTask = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/tasks");
      const data = await response.json();
      if (data && data.task) {
        const newTasks = [...data.task, ...tasks.filter((t) => !data.task.some((nt) => nt._id === t._id))];
        setTasks(newTasks);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };



  return (
    // TODO: HTML Structure has repeated main semantic HTML. Pick one
  <main >
    <div className="pt-3" >
        <a href="/Profile">
          {/* Put state below into redux and a provider function */}
      <ProgressionBar totalTasks={tasks.length} completedTasks={tasks.filter(task => task.completed).length} />
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
          <TaskCard tasks={tasks} setTasks={setTasks} />
        )}
      </div>

      <div className="fixed bottom-4 left-4">
        <button onClick={fetchTask} className="bg-red-300 text-gray-800 text-white p-4 rounded-full shadow-lg animate-pulse transition-all duration-200 ease-in-out transform hover:scale-110 cursor-pointer">
          {/* TODO: Make svg below a component */}
         <svg className="h-6 w-6" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
         </svg>
      </button>
     </div>
   </main>
  );
}
