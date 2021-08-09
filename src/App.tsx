import React from "react";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import Tasklist from "./components/Tasklist";
import "./App.css";
import { TaskState } from "./components/taskSlice";

function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <Tasklist />
      </div>
    </Provider>
  );
}

export default App;
