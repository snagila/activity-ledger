import React from "react";

const PitList = () => {
  return (
    <>
      <div className="col-md">
        <h3 className="text-center text-danger">Procrastination Pit</h3>
        <hr />
        <table className="table table-striped table-hover border opacity table-transparent">
          <tbody>
            <tr>
              <td>1</td>
              <td>Eating</td>
              <td>2hrs</td>
              <td className="text-end ">
                <button className="btn btn-success btn-sm">
                  <i className="fa-sharp fa-solid fa-arrow-left-long"></i>
                </button>
                <button className="btn btn-danger btn-sm">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="alert alert-danger">
          You could have save =<span>10</span>
          hr
        </div>
      </div>
    </>
  );
};

export default PitList;
