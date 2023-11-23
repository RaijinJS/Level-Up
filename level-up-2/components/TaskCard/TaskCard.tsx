"use client";
// TODO: DONE Split logic between TaskList and TaskCard
import TaskDetail from "../TaskDetail/TaskDetail";
import { TaskType } from "../../app/types/Task";
import { DeleteButton, TaskDetailsButton, ToggleCompleteButton } from "../Buttons";

// TODO: DONE redux state reminder

interface TaskCardProps {
  task: TaskType;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  
  return (
    <>
      <div
        data-testid="task-card"
        key={task._id}
        className={`flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden my-4 mx-2 transition-all duration-200 ease-in-out transform hover:scale-110 cursor-pointer ${
          task.completed ? "opacity-50" : "opacity-100"
        }`}>
        <TaskDetailsButton task={task} className="block">
          {/* TODO: turn this image into a Next image. Currently when doing that has a width issue */}
          <img className="w-full h-48 object-cover" src={task.image} alt={task.title} />
        </TaskDetailsButton>
        <div className="p-4 flex-grow">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">{task.title}</h3>
          <p className="text-gray-600 text-sm">{task.description}</p>
        </div>
        <div className="flex justify-between items-center p-4 border-t ">
          <ToggleCompleteButton task={task} />
          <TaskDetailsButton
            task={task}
            testId="tips-button"
            title="tips"
            className="text-blue-500 hover:text-blue-600 transition-colors duration-300 pr-12 ">
            {/* TODO: DONE - Not possible to turn this SVG into a next image component due to change in texture */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="black">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
              />
            </svg>
          </TaskDetailsButton>
          <DeleteButton task={task} />
        </div>
      </div>

      {/* Only appears if there is a selectedTask */}
      <TaskDetail />
    </>
  );
};

export default TaskCard;
