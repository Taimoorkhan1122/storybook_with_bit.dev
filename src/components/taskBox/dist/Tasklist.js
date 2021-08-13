import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

import { connect } from "react-redux";

import Task from "./Task";

import { TaskState, taskStateReducer } from "./taskSlice";

export const Tasklist = ({ loading, tasksList, onPinTask, onArchiveTask, }) => {

    const { tasks } = tasksList;

    const events = {

        onPinTask,

        onArchiveTask,

    };

    const tasksInOrder = [

        ...tasks.filter((t) => t.state === TaskState.TASK_PINNED),

        ...tasks.filter((t) => t.state !== TaskState.TASK_PINNED),

    ];

    const LoadingRow = (_jsxs("div", Object.assign({ className: "loading-item" }, { children: [_jsx("span", { className: "glow-checkbox" }, void 0),

            _jsxs("span", Object.assign({ className: "glow-text" }, { children: [_jsx("span", { children: "Loading" }, void 0), " ", _jsx("span", { children: "cool" }, void 0), " ", _jsx("span", { children: "state" }, void 0)] }), void 0)] }), void 0));

    if (loading) {

        return (_jsxs("div", Object.assign({ className: "list-items" }, { children: [LoadingRow, LoadingRow, LoadingRow, LoadingRow, LoadingRow, LoadingRow] }), void 0));

    }

    if (tasks.length === 0) {

        return (_jsx("div", Object.assign({ className: "list-items" }, { children: _jsxs("div", Object.assign({ className: "wrapper-message" }, { children: [_jsx("span", { className: "icon-check" }, void 0),

                    _jsx("div", Object.assign({ className: "title-message" }, { children: "You have no tasks" }), void 0),

                    _jsx("div", Object.assign({ className: "subtitle-message" }, { children: "Sit back and relax" }), void 0)] }), void 0) }), void 0));

    }

    return (_jsx("div", Object.assign({ className: "list-items" }, { children: tasksInOrder.map((task) => (_jsx(Task, Object.assign({ task: task }, events), task.id))) }), void 0));

};

Tasklist.defaultProps = {

    loading: false

};

const mapStateToProps = (state) => {

    console.log(state);

    return {

        tasksList: {

            tasks: state.tasksList.tasks.filter((t) => t.state === TaskState.TASK_INBOX || t.state === TaskState.TASK_PINNED),

        },

    };

};

const mapDispatchToProps = (dispatch) => {

    return {

        onPinTask: (id) => dispatch(taskStateReducer({ id, state: TaskState.TASK_PINNED })),

        onArchiveTask: (id) => dispatch(taskStateReducer({ id, state: TaskState.TASK_ARCHIVED })),

    };

};

export default connect(mapStateToProps, mapDispatchToProps)(Tasklist);

