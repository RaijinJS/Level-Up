import React from "react";
import ProgressionBar from "../../components/ProgressionBar/ProgressionBar";
import { FetchTaskButton } from "../../components/Buttons";
import TaskListHome from "../../components/TaskList/TaskListHome";

export default function Home() {

  return (
    <div>
      <div className="pt-3">
        <a href="/Profile">
          <ProgressionBar />
        </a>
      </div>
      <div className="container mx-auto px-4 pt-2">
        <TaskListHome />
      </div>
      <div className="fixed bottom-4 left-4">
        <FetchTaskButton />
      </div>
    </div>
  );
}
