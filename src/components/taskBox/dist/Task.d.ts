import React from "react";

import { TaskState } from "./taskSlice";

export interface TaskProps {

    task: {

        id: string;

        title: string;

        state: TaskState;

        updatedAt: string;

    };

    onArchiveTask: (id: string) => void;

    onPinTask: (id: string) => void;

}

declare const Task: React.FC<TaskProps>;

export default Task;

