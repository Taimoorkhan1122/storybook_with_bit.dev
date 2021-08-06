import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Page } from './Page';



export default {
  title: 'Example/Page',
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {
        name: "taimoor khan"
    },
  onLogin: () => "Hello",
  onLogout: () => "void",
  onCreateAccount: () => "void",
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {
//   ...HeaderStories.LoggedOut.args,
// };
