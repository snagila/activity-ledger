import React from "react";

const TaskList = ({ taskContainer, handleOnDelete, switchTask }) => {
  const taskOverView = taskContainer.filter((item) => item.type === "allTask");

  return (
    <>
      <div className="col-md">
        <h3 className="text-center text-success">Task Overview</h3>
        <hr />
        <table className="table table-striped table-hover border table-transparent ">
          <tbody className="">
            {taskOverView.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.taskName}</td>
                <td>{item.taskTime}</td>
                <td className="text-end ">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => switchTask(item.id, "pitList")}
                  >
                    <i className="fa-sharp fa-solid fa-arrow-right-long"></i>
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleOnDelete(item.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TaskList;
