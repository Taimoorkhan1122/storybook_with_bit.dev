import react from "react";

import Tasklist, { TaskListProps } from "../components/Tasklist";
import * as TaskStories from "./Task.stories";

import { Meta, Story, storiesOf } from "@storybook/react";
import { TaskState } from "../components/taskSlice";
import ProviderWrapper from "../redux/ProviderWrapper";
import { store } from "../redux/store";
import { useSelector } from "react-redux";

export default {
  title: "TaskBox/tasklist",
  component: Tasklist,
  decorators: [
    (story) => (
      <ProviderWrapper store={store}>
        <div style={{ padding: "2.5rem" }}>{story()}</div>
      </ProviderWrapper>
    ),
  ],
} as Meta;

// const withProvider = (Story: Story) => <ProviderWrapper store={store}>
//   <Story />
// </ProviderWrapper>;

// storiesOf("TaskBox/tasklist", module).add("Default", () => <Tasklist >{}</Tasklist>);

const Template: Story = (args) => <Tasklist {...args} />;

// const task = {
//   id: "_01",
//   title: "test task",
//   state: TaskState.TASK_INBOX,
//   updatedAt: new Date(2021, 0, 1, 9, 0),
// };
export const Default = Template.bind({});
// Default.args = {
//   tasks: [
//     { ...task },
//     { ...task, id: "_02", title: "This is something good" },
//     {
//       ...task,
//       id: "_03",
//       title: "Complete bootcamp project 11",
//       state: TaskState.TASK_PINNED,
//     },
//     {
//       ...task,
//       id: "_04",
//       title: "Practice Rust programming",
//       state: TaskState.TASK_ARCHIVED,
//     },
//     { ...task, id: "_05", title: "Drink Water", state: TaskState.TASK_PINNED },
//   ],
// };

export const Loading: Story = args => <Tasklist></Tasklist> ;
// Loading.args = {
//   store: store.dispatch(clearAll),
//   loading: true,
// };

export const NoTask = Template.bind({});
// NoTask.args = {
//   tasks: [],
//   loading: false,
// };
