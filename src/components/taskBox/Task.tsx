import React from "react";
import { TaskState } from "./taskSlice";

export interface TaskProps {
  task:  {
    id: string;
    title: string;
    state: TaskState;
    updatedAt: string
  };
  onArchiveTask: (id: string) => void;
  
  onPinTask: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        {console.log(state === TaskState.TASK_ARCHIVED)}
        <input
          type="checkbox"
          checked={state === TaskState.TASK_ARCHIVED}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {state !== TaskState.TASK_ARCHIVED && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Task;
