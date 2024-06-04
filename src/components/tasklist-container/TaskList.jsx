import React from "react";

const TaskList = () => {
  return (
    <>
      <div className="col-md">
        <h3 className="text-center text-success">Task Overview</h3>
        <hr />
        <table className="table table-striped table-hover border table-transparent ">
          <tbody className="">
            <tr>
              <td>1</td>
              <td>Eating</td>
              <td>2hrs</td>
              <td className="text-end ">
                <button className="btn btn-warning btn-sm">
                  <i className="fa-sharp fa-solid fa-arrow-right-long"></i>
                </button>
                <button className="btn btn-danger btn-sm">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TaskList;
