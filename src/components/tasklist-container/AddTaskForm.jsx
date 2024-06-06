import React, { useState } from "react";
import { randomIdGenerator } from "../../utilities/randomIdGenerator";

const AddTaskForm = ({ taskContainer, setTaskContainer }) => {
  const [form, setForm] = useState({});

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
    setTaskContainer([...taskContainer, formData]);
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
            />
          </div>
          <div className="col-md-3">
            <input
              className="form-control table-secondary"
              type="number"
              placeholder="Hours/week"
              name="taskTime"
              onChange={handleOnChange}
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
