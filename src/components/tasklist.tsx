import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Task from './Task';
import {  TaskState, taskStateReducer } from './taskSlice';
import { RootState, AppDispatch } from '../redux/store';

export interface TaskListProps {
  loading: Boolean;
}

const Tasklist: React.FC = () => {
   
  const {tasks} = useSelector((state: RootState) => state.tasksList);
  const dispatch: AppDispatch = useDispatch();
  const loading = false;

  const events = {
    onPinTask: (id: string) =>
      dispatch(taskStateReducer({ id, state: TaskState.TASK_PINNED })),
    onArchiveTask: (id: string) =>
      dispatch(taskStateReducer({ id, state: TaskState.TASK_ARCHIVED })),
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
}

export default Tasklist;
