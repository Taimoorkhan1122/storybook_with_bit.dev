import { Story } from "@storybook/react";
import React from "react";
import { action } from "@storybook/addon-actions";

import * as TaskListStories from "./Taskslist.stories";
import { IProps, PureInboxScreen } from "../components/InboxScreen";
import { Provider } from "react-redux";
import { store } from "../redux/store";

// A super-simple mock of a redux store
// const store = {
//   getState: () => {
//     return {
//       tasks: TaskListStories.Default.args?.tasksList?.tasks,
//     };
//   },
//   subscribe: () => 0,
//   dispatch: action("dispatch"),
// };

export default {
  component: PureInboxScreen,
  decorators: [(story: any) => <Provider store={store}>{story()}</Provider>],
  title: "TaskBox/InboxScreen",
};

const Template: Story<IProps> = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "Something",
};
