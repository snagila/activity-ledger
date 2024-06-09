import React, { useState } from "react";
import { randomIdGenerator } from "../../utilities/randomIdGenerator";

const AddTaskForm = ({ dataCenter }) => {
  const initialState = {
    taskName: "",
    taskTime: "",
  };

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
    dataCenter(formData);
    setForm(initialState);
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
              value={form.taskName}
            />
          </div>
          <div className="col-md-3">
            <input
              className="form-control table-secondary"
              type="number"
              placeholder="Hours/week"
              name="taskTime"
              onChange={handleOnChange}
              value={form.taskTime}
              required
              min="1"
              max="168"
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
