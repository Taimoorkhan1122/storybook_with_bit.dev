import React from "react";

import { Payload } from "./taskSlice";

import { RootState } from "./redux/store";

declare type dispatchActionType = (id: string) => {

    payload: Payload;

    type: string;

};

export interface TaskListProps extends RootState {

    onPinTask: dispatchActionType;

    onArchiveTask: dispatchActionType;

    loading: Boolean;

}

export declare const Tasklist: React.FC<TaskListProps>;

declare const _default: import("react-redux").ConnectedComponent<React.FC<TaskListProps>, Pick<TaskListProps, "loading">>;

export default _default;

