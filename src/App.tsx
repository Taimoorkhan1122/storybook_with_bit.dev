import React from "react";
import { Provider } from "react-redux";

import { store } from "./reduxer/store";
import Tasklist from "./components/taskBox/Tasklist";
import "./App.css";
import { TaskState } from "./components/taskBox/taskSlice";
import { PureInboxScreen } from "./components/taskBox/InboxScreen";
import TaskBox from "./components/taskBox";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Tasklist loading={false} /> */}
        {/* <PureInboxScreen error={null} /> */}
        <TaskBox />
      </div>
    </Provider>
  );
}

export default App;
