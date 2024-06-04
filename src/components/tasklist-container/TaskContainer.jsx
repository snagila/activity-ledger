import React from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import PitList from "./PitList";

const TaskContainer = () => {
  return (
    <>
      <AddTaskForm />
      <TaskList />
      <PitList />
    </>
  );
};

export default TaskContainer;
