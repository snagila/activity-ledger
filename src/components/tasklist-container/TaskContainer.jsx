import React from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import PitList from "./PitList";

const TaskContainer = () => {
  return (
    <>
      <AddTaskForm />

      <div className="row mt-5 pt-2">
        <TaskList />
        <PitList />
        <div className="alert alert-info">
          Total hrs per week allocated = <span id="totalHr">1234</span>hr
        </div>
      </div>
    </>
  );
};

export default TaskContainer;
