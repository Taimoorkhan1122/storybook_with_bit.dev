import react from "react";

import Tasklist, { TaskListProps } from "../components/Tasklist";
import * as TaskStories from "./Task.stories";

import { Meta, Story } from "@storybook/react";

export default {
  title: "TaskBox/tasklist",
  component: Tasklist,
} as Meta;

const Template: Story<TaskListProps> = (args) => <Tasklist {...args} />;

const task = {
  id: "_01",
  title: "test task",
  state: "TASK_INBOX",
  updatedAt: new Date(2021, 0, 1, 9, 0),
};
export const Default = Template.bind({});
Default.args = {
  tasks: [
    { ...task },
    { ...task, id: "_02", title: "This is something good" },
    {
      ...task,
      id: "_03",
      title: "Complete bootcamp project 11",
      state: "TASK_PINNED",
    },
    {
      ...task,
      id: "_04",
      title: "Practice Rust programming",
      state: "TASK_ARCHIVED",
    },
    { ...task, id: "_05", title: "Drink Water", state: "TASK_PINNED" },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const NoTask = Template.bind({});
NoTask.args = {
  tasks: [],
  loading: false,
};
