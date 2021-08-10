import React from "react";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import Tasklist from "./components/Tasklist";
import "./App.css";
import { TaskState } from "./components/taskSlice";
import { PureInboxScreen } from "./components/InboxScreen";

function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Tasklist loading={false} /> */}
        <PureInboxScreen error={null}/>
      </div>
    </Provider>
  );
}

export default App;
