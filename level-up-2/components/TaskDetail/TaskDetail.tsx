"use client";

import React, { useEffect, useRef } from "react";
import closeButton from "../../public/closeButton.svg";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setSelectedTask } from "../../redux/features/tasks-slice";

const TaskDetail: React.FC = () => {
  //TODO: DONE -  Set useRef to null first then add typescript to it
  const modalRef = useRef<HTMLDivElement | null>(null);
  const selectedTask = useAppSelector((state) => state.tasks.selectedTask);
  const dispatch = useAppDispatch();

  // Close modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside: (event: MouseEvent) => void = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeTaskDetails();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeTaskDetails = () => {
    dispatch(setSelectedTask(null));
  };

  if (selectedTask)
    return (
      <div className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center p-4 transition-opacity duration-300 ease-in-out">
        <div
          className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full"
          ref={modalRef}
          style={{
            transition: "transform 1s ease-in-out",
            transform: "scale(1)",
          }}>
          {/* TODO: DONE - Delete or fix unrendered div below */}
          {/* TODO: DONE - Align title and close button at top of popup and remove unneeded comment */}
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold text-orange-400">{selectedTask.title}</h1>
            <button onClick={closeTaskDetails} className="text-gray-600 hover:text-gray-800">
              {/* TODO: DONE - Either make svg a component or simplify with an "X" */}
              <Image src={closeButton} alt="Close Button" className="h-6 w-6" />
            </button>
          </div>
          <h3 className="text-gray-600 pt-4">{selectedTask.more}</h3>
        </div>
      </div>
    );
};

export default TaskDetail;
