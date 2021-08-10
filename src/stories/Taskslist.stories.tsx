import react from "react";

import {Tasklist, TaskListProps} from "../components/Tasklist";
import * as TaskStories from "./Task.stories";

import { Meta, Story, storiesOf } from "@storybook/react";
import { TaskState } from "../components/taskSlice";
import ProviderWrapper from "../redux/ProviderWrapper";
import { store } from "../redux/store";
import { useSelector } from "react-redux";

export default {
  title: "TaskBox/tasklist",
  component: Tasklist,
  // decorators: [
  //   (story) => (
  //     <ProviderWrapper store={store}>
  //       <div style={{ padding: "2.5rem" }}>{story()}</div>
  //     </ProviderWrapper>
  //   ),
  // ],
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
} as Meta;

// const withProvider = (Story: Story) => <ProviderWrapper store={store}>
//   <Story />
// </ProviderWrapper>;

// storiesOf("TaskBox/tasklist", module).add("Default", () => <Tasklist >{}</Tasklist>);

const Template: Story<TaskListProps> = (args) => <Tasklist {...args} />;

const tasks = [
  {
    id: "_02",
    title: "Storybook task 1",
    state: TaskState.TASK_INBOX,
    updatedAt: new Date(2021, 0, 1, 9, 0).toJSON(),
  },
  {
    id: "_03",
    title: "Storybook task 2",
    updatedAt: new Date(2021, 0, 1, 9, 0).toJSON(),
    state: TaskState.TASK_INBOX,
  },
  {
    id: "_04",
    title: "Storybook task 3",
    updatedAt: new Date(2021, 0, 1, 9, 0).toJSON(),
    state: TaskState.TASK_INBOX,
  },
  {
    id: "_05",
    title: "Storybook task 4",
    updatedAt: new Date(2021, 0, 1, 9, 0).toJSON(),
    state: TaskState.TASK_INBOX,
  }
];
export const Default = Template.bind({});
Default.args = {
  tasksList: {
    tasks: [...tasks],
  },
};

export const Loading =  Template.bind({});
 Loading.args = {
   tasksList: {
     tasks: [],
   },
   loading: true
 };

 export const WithPinnedTask = Template.bind({});
 WithPinnedTask.args = {
   tasksList: {
     tasks: [
       ...tasks.slice(0, 3),
       {
         id: "6",
         title: "Task 6 (pinned)",
         state: TaskState.TASK_PINNED,
         updatedAt: new Date(2021, 0, 1, 9, 0).toJSON(),
       },
     ],
   },
 };

export const NoTask = Template.bind({});
NoTask.args = {
  tasksList: {
    tasks: [],
  },
};
