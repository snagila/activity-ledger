import React from "react";

const PitList = ({ handleOnDelete, taskContainer, switchTask }) => {
  const proPit = taskContainer.filter((item) => item.type === "pitList");
  const proPitHrs = proPit.reduce((acc, curr) => acc + curr.taskTime, 0);

  return (
    <>
      <div className="col-md">
        <h3 className="text-center text-danger">Procrastination Pit</h3>
        <hr />
        <table className="table table-striped table-hover border opacity table-transparent">
          <tbody>
            {proPit.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.taskName}</td>
                <td>{item.taskTime}</td>
                <td className="text-end ">
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => switchTask(item.id, "allTask")}
                  >
                    <i className="fa-sharp fa-solid fa-arrow-left-long"></i>
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
        <div className="alert alert-danger">
          You could have save = <span>{proPitHrs}</span> hr/s
          {/* {proPitHrs > 1 ? <p>hours</p> : <p>hour</p>} */}
        </div>
      </div>
    </>
  );
};

export default PitList;
