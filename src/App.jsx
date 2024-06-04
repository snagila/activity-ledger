import "./App.css";
import Header from "./components/header/Header";
import TaskContainer from "./components/tasklist-container/TaskContainer";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <TaskContainer />
      </div>
    </>
  );
}

export default App;
