import React from "react";
import TaskDetail from "../../components/TaskDetail/TaskDetail";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-max">
      <ProfileCard />
      {/* Only appears if there is a selectedTask */}
      <TaskDetail />
    </div>
  );
}
