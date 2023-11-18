import React, { useEffect, useRef } from "react";
import { TaskType } from "../app/types/Task";
// TODO: delete unused import
import { type } from "os";

interface TaskDetailProps {
  task: TaskType;
  onClose: () => void;
  showImage: boolean;
}

const TaskDetail: React.FC<TaskDetailProps> = ({
  task,
  onClose,
  showImage,
}) => {
  //TODO: Set useRef to null first then add typescript to it: DONE
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Close modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside: (event: MouseEvent) => void = (event) => {
      console.log(event);
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!task) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 transition-opacity duration-300 ease-in-out">
      <div
        className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full"
        ref={modalRef}
        style={{
          transition: "transform 1s ease-in-out",
          transform: "scale(1)",
        }}
      >
        <div className="flex flex-col justify-between items-center">
          {showImage && (
            <img
              src={task.image}
              alt={task.title}
              className="w-1/2 h-auto mb-4"
            />
          )}{" "}
          {/* Adjusted the size */}
          <h1 className="text-2xl font-bold text-orange-400">{task.title}</h1>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            {/* TODO: Either make svg a component or simplify with an "X" */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h3 className="text-gray-600 pt-4">{task.more}</h3>
      </div>
    </div>
  );
};

export default TaskDetail;
