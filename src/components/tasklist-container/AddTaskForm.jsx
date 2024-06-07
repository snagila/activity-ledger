import React, { useState } from "react";
import { randomIdGenerator } from "../../utilities/randomIdGenerator";

const AddTaskForm = ({ taskContainer, setTaskContainer, allTask }) => {
  const hrsPerWeek = 24 * 7;
  const [form, setForm] = useState({});

  const totalHours = taskContainer.reduce(
    (acc, curr) => acc + curr.taskTime,
    0
  );

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "taskTime" ? +value : value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = {
      ...form,
      id: randomIdGenerator(),
      type: "allTask",
    };

    totalHours + formData.taskTime > hrsPerWeek
      ? alert("Sorry! You have allocated all the hours for the week")
      : setTaskContainer([...taskContainer, formData]);

    // allTask.forEach((item) => {
    //   if (item.taskName === item.taskName) {
    //     alert("hello");
    //     return;
    //   }
    // });
  };
  return (
    <>
      <form
        className="addTaskForm  mt-5 border p-5 rounded-4"
        action=""
        onSubmit={handleOnSubmit}
      >
        <div className="row g-3">
          <div className="col-md-6">
            <input
              className="form-control table-secondary"
              type="text"
              placeholder="Enter your Task"
              name="taskName"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              className="form-control table-secondary"
              type="number"
              placeholder="Hours/week"
              name="taskTime"
              onChange={handleOnChange}
              required
              min="1"
              max="24"
            />
          </div>
          <div className="col-md-3 ">
            <div className="d-grid">
              <button className="btn btn-primary">Add Task</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTaskForm;
