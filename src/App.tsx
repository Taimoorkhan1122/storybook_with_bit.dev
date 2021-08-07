import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Tasklist from "./components/Tasklist";

function App() {
  const args = {
    tasks: [
      {
        id: "_01",
        title: "test task",
        state: "TASK_INBOX",
        updatedAt: new Date(2021, 0, 1, 9, 0),
      },
      {
        id: "_02",
        title: "test task no 02",
        state: "TASK_PINNED",
        updatedAt: new Date(2021, 0, 1, 9, 0),
      },
      {
        id: "_03",
        title: "test task no 03",
        state: "TASK_ARCHIVED",
        updatedAt: new Date(2021, 0, 12, 9, 0),
      },
    ],
    loading: false,
    onArchiveTask: (id: string) => console.log("task archived"),
    onPinTask: (id: string) => console.log("task archived"),
  };
  return (
    <div className="App">
      <Tasklist {...args} />
    </div>
  );
}

export default App;
