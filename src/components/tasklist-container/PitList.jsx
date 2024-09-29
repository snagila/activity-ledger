import React from "react";

const PitList = ({ handleOnDelete, proPit, switchTask }) => {
  const proPitHrs = proPit.reduce((acc, curr) => acc + curr.taskTime, 0);

  return (
    <>
      <div className="col-md">
        <h3 className="text-center text-danger">Procrastination Pit</h3>
        <hr />
        <div className="scrollTable">
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
        </div>
        {proPit.length > 0 && (
          <div className="alert alert-danger mt-3">
            You could have save = <span>{proPitHrs}</span> hr/s
          </div>
        )}
      </div>
    </>
  );
};

export default PitList;
