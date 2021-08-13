export declare enum TaskState {

    TASK_INBOX = "TASK_INBOX ",

    TASK_ARCHIVED = "TASK_ARCHIVED",

    TASK_PINNED = "TASK_PINNED"

}

export interface Task {

    task: {

        id: string;

        title: string;

        state: TaskState;

        updatedAt: string;

    };

}

export interface Payload {

    id: string;

    state: TaskState;

}

export declare const taskStateReducer: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<Payload, string>;

declare const _default: import("redux").Reducer<{

    tasks: {

        id: string;

        title: string;

        state: TaskState;

        updatedAt: string;

    }[];

}, import("redux").AnyAction>;

export default _default;

