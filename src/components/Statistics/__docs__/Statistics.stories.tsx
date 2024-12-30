// Storybook configuration file
import React from "react";
import { Meta, Story } from "@storybook/react";
import StatisticsComponent from "../Statistics"; 
import { StatisticsCardProps } from "../../../types/statistics"; 

// Define Storybook metadata
export default {
  title: "Components/Statistics", 
  component: StatisticsComponent, 
  argTypes: {
    title: {
      control: "text",
      description: "The title of the statistics card",
    },
    hint: {
      control: "text",
      description: "A hint or description about the statistic",
    },
    statisticNumber: {
      control: "number",
      description: "The main statistic number",
    },
    statisticsPercentage: {
      control: "text",
      description: "The percentage change (e.g., +10%, -5%)",
    },
    color: {
      control: "color",
      description: "Background color for the component",
    },
    cssProps: {
      control: "object",
      description: "Additional CSS styling",
    },
  },
} as Meta;

// Template function to create the component with different args
const Template: Story<StatisticsCardProps> = (args) => <StatisticsComponent {...args} />;

// Define the default story with sample props
export const Default = Template.bind({});
Default.args = {
  title: "Total Cases Established",
  hint: "",
  statisticNumber: 26,
  statisticsPercentage: "98",
  color: "#DFF6DD",
};
