import React from "react";

const AddTaskForm = () => {
  return (
    <>
      <form className="addTaskForm  mt-5 border p-5 rounded-4" action="">
        <div className="row g-3">
          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              placeholder="Enter your Task"
            />
          </div>
          <div className="col-md-3">
            <input
              className="form-control"
              type="number"
              placeholder="Hours/week"
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
