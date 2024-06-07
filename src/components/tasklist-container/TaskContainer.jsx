import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import PitList from "./PitList";

const TaskContainer = () => {
  const [taskContainer, setTaskContainer] = useState([]);
  // const [display, setDisplay] = useState(false);
  const taskOverView = taskContainer.filter((item) => item.type === "allTask");
  const proPit = taskContainer.filter((item) => item.type === "pitList");

  const allTask = proPit.concat(taskOverView);

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
  const allTaskHrs = taskContainer.reduce(
    (acc, curr) => acc + curr.taskTime,
    0
  );
  // const hrsToDiplay = () => setDisplay();

  return (
    <>
      <AddTaskForm
        taskContainer={taskContainer}
        setTaskContainer={setTaskContainer}
        allTask={allTask}
      />

      <div className="row mt-5 pt-2">
        <TaskList
          handleOnDelete={handleOnDelete}
          switchTask={switchTask}
          taskOverView={taskOverView}
        />
        <PitList
          taskContainer={taskContainer}
          handleOnDelete={handleOnDelete}
          switchTask={switchTask}
          proPit={proPit}
        />
        <div className="alert alert-info mt-2">
          Total hrs per week allocated = <span id="totalHr">{allTaskHrs}</span>{" "}
          hr/s
          {/* {allTaskHrs > 1 ? <p>hours</p> : <p>hour</p>} */}
        </div>
      </div>
    </>
  );
};

export default TaskContainer;
