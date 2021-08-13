import { createSlice } from "@reduxjs/toolkit";

export var TaskState;

(function (TaskState) {

    TaskState["TASK_INBOX"] = "TASK_INBOX ";

    TaskState["TASK_ARCHIVED"] = "TASK_ARCHIVED";

    TaskState["TASK_PINNED"] = "TASK_PINNED";

})(TaskState || (TaskState = {}));

const defaultTasks = [

    {

        id: "_01",

        title: "Learn Rust",

        state: TaskState.TASK_INBOX,

        updatedAt: new Date(2021, 0, 1, 9, 0).toJSON(),

    },

    {

        id: "_02",

        title: "test task no 02",

        state: TaskState.TASK_PINNED,

        updatedAt: new Date(2021, 0, 1, 9, 0).toJSON(),

    },

    {

        id: "_03",

        title: "test task no 03",

        state: TaskState.TASK_ARCHIVED,

        updatedAt: new Date(2021, 0, 1, 9, 0).toJSON(),

    },

    {

        id: "_04",

        title: "test task no 04",

        state: TaskState.TASK_INBOX,

        updatedAt: new Date(2021, 0, 1, 9, 0).toJSON(),

    },

];

const taskSlice = createSlice({

    name: "tasks",

    initialState: { tasks: defaultTasks },

    reducers: {

        taskStateReducer: (state, action) => {

            return Object.assign(Object.assign({}, state), { tasks: state.tasks.map((task) => task.id === action.payload.id

                    ? Object.assign(Object.assign({}, task), { state: action.payload.state }) : task) });

        }

    },

});

export const { taskStateReducer } = taskSlice.actions;

export default taskSlice.reducer;

