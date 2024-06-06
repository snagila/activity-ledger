import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import PitList from "./PitList";

const TaskContainer = () => {
  const [taskContainer, setTaskContainer] = useState([]);
  console.log(taskContainer);

  const handleOnDelete = (id) => {
    if (window.confirm("Are you sure,you want to delete this Task?")) {
      setTaskContainer(taskContainer.filter((item) => item.id !== id));
    }
  };
  const switchTask = (id, type) => {
    const tempArg = taskContainer.map((item) => {
      if (item.id === id) item.type = type;

      return item;
    });
    setTaskContainer(tempArg);
  };

  return (
    <>
      <AddTaskForm
        taskContainer={taskContainer}
        setTaskContainer={setTaskContainer}
      />

      <div className="row mt-5 pt-2">
        <TaskList
          taskContainer={taskContainer}
          handleOnDelete={handleOnDelete}
          switchTask={switchTask}
        />
        <PitList
          taskContainer={taskContainer}
          handleOnDelete={handleOnDelete}
          switchTask={switchTask}
        />
        <div className="alert alert-info">
          Total hrs per week allocated = <span id="totalHr">1234</span>hr
        </div>
      </div>
    </>
  );
};

export default TaskContainer;
