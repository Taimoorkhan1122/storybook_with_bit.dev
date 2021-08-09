import { Meta, Story } from "@storybook/react";
import React from "react";
import Task, { TaskProps } from "../components/Task";
import { TaskState } from "../components/taskSlice";

export default {
  title: "TaskBox/task",
  component: Task,
} as Meta;

const Template: Story<TaskProps>  = (args) => <Task {...args}/>;
const task = {
  id: "_01",
  title: "test task",
  state: TaskState.TASK_INBOX,
  updatedAt: (new Date(2021, 0, 1, 9, 0)).toJSON(),
};

export const Default = Template.bind({});
Default.args = {
   task: {...task},
}

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...task,
    state: TaskState.TASK_PINNED,
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...task,
    state: TaskState.TASK_ARCHIVED,
  },
};