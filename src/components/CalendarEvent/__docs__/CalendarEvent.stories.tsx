// CalendarEvent.stories.tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import CalendarEvent from "../CalendarEvent"; // Import your CalendarEvent component
import { CalendarEventProps } from "../../../types/calendarevent"; // Import the interface for typing

// Define Storybook metadata (this is the default export that Storybook is looking for)
const meta: Meta = {
  title: "Components/CalendarEvent", // Storybook section and component name
  component: CalendarEvent, // The component we're documenting
  argTypes: {
    time: {
      control: "text",
      description: "Time of the event",
    },
    mins: {
      control: "number",
      description: "Duration of the event in minutes",
    },
    title: {
      control: "text",
      description: "Title of the event",
    },
    location: {
      control: "text",
      description: "Location or subtitle of the event",
    },
    color: {
      control: "color",
      description: "Background color of the event",
    },
    priority: {
      control: "radio",
      options: ["high", "medium", "low"],
      description: "Priority of the event",
    },
    acceptedIcon: {
      control: "text",
      description: "Accepted icon (optional)",
    },
    isLink: {
      control: "boolean",
      description: "If true, makes the whole card clickable",
    },
  },
};

export default meta;

// Template function to create the component with different args
const Template: Story<CalendarEventProps> = (args) => (
  <CalendarEvent {...args} />
);

// Define the default story with sample props
export const Default = Template.bind({});
Default.args = {
  time: "9:30 AM",
  mins: 30,
  title: "Harold Black",
  location: "Call: (808) 489-12039",
  color: "#DEE9F1", // Light blue color
  priority: "medium",
  acceptedIcon: "./accepted0.svg", // Example icon
  acceptedIconColor: "#0078D4",
  isLink: false,
};
