'use client';
// TODO: Split logic between TaskList and TaskCard
import { useState } from "react";
import TaskDetail from "./TaskDetail";
import { TaskType } from "../app/types/Task";
// TODO: redux state reminder
export default function TaskCard({
  tasks,
  setTasks,
}: {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}) {
  const [selectedTask, setSelectedTask] = useState<null | TaskType>(null);

  const showTaskDetails: (task: null | TaskType) => void = (
    task: null | TaskType
  ) => {
    setSelectedTask(task);
  };

  const closeTaskDetails: () => void = () => {
    setSelectedTask(null);
  };
  // TODO: deletec oomments below
  const onDelete: (taskId: string) => void = async (taskId: string) => {
    // Logic for handling delete
    setTasks((currentTasks: TaskType[]) =>
    currentTasks.filter((task: TaskType) => task._id !== taskId)
    );
  };
  // TODO: Once auth is implemented and we have users, update this and setTasks to be user specific
  const onToggleComplete: (taskId: string, completed: boolean) => void = async (taskId: string, completed: boolean) => {
    // Logic for handling toggle complete
    await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newCompleted: !completed }),
    });

    setTasks((currentTasks: TaskType[]) => {
      // Update the completed status of the task
      const updatedTasks: TaskType[] = currentTasks.map((task) =>
      task._id === taskId ? { ...task, completed: !completed } : task
      );

      const completedTasks: TaskType[] = updatedTasks.filter((task) => task.completed);
      localStorage.setItem("completedTasks", JSON.stringify(completedTasks));

      // Sort tasks to move completed ones to the bottom
      return updatedTasks.sort((a: TaskType, b: TaskType) => {
        if (a.completed === b.completed) return 0; // Keep original order if both have the same completed status
        return a.completed ? 1 : -1;
      });
    });
  };

  return (
    <>
      {/* Main */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {Array.isArray(tasks) &&
          tasks.map((task: TaskType) => (
            <div
              key={task._id}
              className={`flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden my-4 mx-2 transition-all duration-200 ease-in-out transform hover:scale-110 cursor-pointer ${
                task.completed ? "opacity-50" : "opacity-100"
              }`}
            >
              <button onClick={() => showTaskDetails(task)} className="block">
                <img
                  className="w-full h-48 object-cover"
                  src={task.image}
                  alt={task.title}
                />
              </button>
              <div className="p-4 flex-grow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {task.title}
                </h3>
                <p className="text-gray-600 text-sm">{task.description}</p>
              </div>
              {/* Completition          */}
              <div className="flex justify-between items-center p-4 border-t ">
                <button
                  onClick={() => onToggleComplete(task._id, task.completed)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    task.completed
                      ? "bg-green-500 text-white"
                      : "bg-rose-200 text-gray-800"
                  } transition-all duration-200 ease-in-out transform hover:scale-105 cursor-pointer `}
                  title={
                    task.completed ? "Task Completed" : "Mark it as complete"
                  }
                >
                  {task.completed ? "Completed" : "In Progress"}
                </button>
                {/* Info */}
                <button
                  onClick={() => showTaskDetails(task)}
                  title="tips"
                  className="text-blue-500 hover:text-blue-600 transition-colors duration-300 pr-12 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                    />
                  </svg>
                </button>
                {/* Delete */}
                <button
                  onClick={() => onDelete(task._id)}
                  className="text-red-500 hover:text-red-600 transition-colors duration-300"
                  title="Delete?"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
      </div>

      {selectedTask && (
        <TaskDetail
          task={selectedTask}
          onClose={closeTaskDetails}
          showImage={false}
        />
      )}
    </>
  );
}
