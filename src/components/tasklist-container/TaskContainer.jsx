import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import PitList from "./PitList";

const TaskContainer = () => {
  const [taskContainer, setTaskContainer] = useState([]);
  const taskOverView = taskContainer.filter((item) => item.type === "allTask");
  const proPit = taskContainer.filter((item) => item.type === "pitList");
  const allTask = proPit.concat(taskOverView);

  const dataCenter = (formData) => {
    const hrsPerWeek = 24 * 7;
    const totalHours = taskContainer.reduce(
      (acc, curr) => acc + curr.taskTime,
      0
    );

    const findItem = allTask.find(
      (item) => item.taskName.toLowerCase() === formData.taskName.toLowerCase()
    );

    if (findItem) {
      alert("Sorry! The task already exists");
    } else {
      totalHours + formData.taskTime > hrsPerWeek
        ? alert("Sorry! You have allocated all the hours for the week")
        : setTaskContainer([...taskContainer, formData]);
    }
  };

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
  const leftHours = 24 * 7 - allTaskHrs;

  return (
    <>
      <AddTaskForm
        taskContainer={taskContainer}
        setTaskContainer={setTaskContainer}
        allTask={allTask}
        dataCenter={dataCenter}
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
        </div>
        <div className="alert alert-warning mt-2">
          Total hrs left per week = <span id="totalHr">{leftHours}</span> hr/s
        </div>
      </div>
    </>
  );
};

export default TaskContainer;
