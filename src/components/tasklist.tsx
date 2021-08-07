import React from 'react';

import Task from './Task';
import { TaskProps } from './Task';

interface TaskListProps extends TaskProps {
  loading: Boolean;
  tasks: TaskProps["task"][];
}

const tasklist: React.FC<TaskListProps> = ({loading, tasks, onPinTask, onArchiveTask}) => {
    const events = {
        onPinTask,
        onArchiveTask
    }

    const tasksInOrder = [
      ...tasks.filter((t) => t.state === "TASK_PINNED"),
      ...tasks.filter((t) => t.state !== "TASK_PINNED"),
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
    
    if (tasks.length === 0) return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
    
    return (
      <div className="list-items">
        {tasksInOrder.map((task) => (
          <Task key={task.id} task={task} {...events} />
        ))}
      </div>
    );
}

export default tasklist
