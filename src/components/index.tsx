import React from 'react'
import Task from './Task';

const TaskContainer = () => {
    const tasks = {
      task: {
        id: "_01",
        title: "test task",
        updatedAt: new Date(2021, 0, 1, 9, 0),
        state: "TASK_ARCHIVED",
      },
      onArchiveTask: () => console.log("task archived"),
      onPinTask: () => console.log("task archived"),
      
    };
    return (
      <Task task={tasks.task} onArchiveTask={tasks.onPinTask} onPinTask={tasks.onPinTask} />
    );
}

export default TaskContainer;
