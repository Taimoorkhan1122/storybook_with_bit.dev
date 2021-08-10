import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import Task from "./Task";
import { Payload, TaskState, taskStateReducer } from "./taskSlice";
import { RootState, AppDispatch } from "../redux/store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

type dispatchActionType = (
  id: string
) => {
  payload: Payload;
  type: string;
};

export interface TaskListProps extends RootState {
  onPinTask: dispatchActionType;
  onArchiveTask: dispatchActionType;
  loading: Boolean,
}

export const Tasklist: React.FC<TaskListProps> = ({
  loading,
  tasksList,
  onPinTask,
  onArchiveTask,
}) => {

  // const { tasks } = useSelector((state: RootState) => state.tasksList);
  // const dispatch: AppDispatch = useDispatch();

  // const events = {
  //   onPinTask: (id: string) =>
  //     dispatch(taskStateReducer({ id, state: TaskState.TASK_PINNED })),
  //   onArchiveTask: (id: string) =>
  //     dispatch(taskStateReducer({ id, state: TaskState.TASK_ARCHIVED })),
  // };
  
  const { tasks } = tasksList;
  const events = {
    onPinTask,
    onArchiveTask,
  };

  const tasksInOrder = [
    ...tasks.filter((t) => t.state === TaskState.TASK_PINNED),
    ...tasks.filter((t) => t.state !== TaskState.TASK_PINNED),
  ];

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  return (
    <div className="list-items">
      {tasksInOrder.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
};

Tasklist.defaultProps = {
  loading: false
}

const mapStateToProps = (state: RootState) => {
  console.log(state);
  return {
    tasksList: {
      tasks: state.tasksList.tasks.filter(
        (t) => t.state === TaskState.TASK_INBOX || t.state === TaskState.TASK_PINNED
      ),
    },
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    onPinTask: (id: string) =>
      dispatch(taskStateReducer({ id, state: TaskState.TASK_PINNED })),
    onArchiveTask: (id: string) =>
      dispatch(taskStateReducer({ id, state: TaskState.TASK_ARCHIVED })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasklist);
// export default Tasklist;
