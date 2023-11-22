import React from "react";
import ProgressionBar from "../../components/ProgressionBar/ProgressionBar";
import { FetchTaskButton } from "../../components/Buttons";
import TaskListHome from "../../components/TaskList/TaskListHome";

export default function Home() {
  // TODO: Once auth is built in, keep track of user's current tasks in DB

  return (
    <div>
      <div className="pt-3">
        <a href="/Profile">
          <ProgressionBar />
        </a>
      </div>
      {/* TODO: DONE Make a TaskList component and move task logic into it. */}
      <div className="container mx-auto px-4 pt-2">
        <TaskListHome />
      </div>
      <div className="fixed bottom-4 left-4">
        <FetchTaskButton />
      </div>
    </div>
  );
}
