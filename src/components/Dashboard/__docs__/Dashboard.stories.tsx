import React from 'react';
import { Meta, Story } from '@storybook/react';
import Dashboard from '../Dashboard';

export default {
  title: 'Components/Dashboard',
  component: Dashboard,
  argTypes: {},
} as Meta;

// Template function to create the component with different args
const Template: Story = (args) => <Dashboard {...args} />;

// Default Story
export const Default = Template.bind({});
Default.args = {};
