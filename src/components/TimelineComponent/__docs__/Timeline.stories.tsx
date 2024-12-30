import React, { Component } from "react";
import {Meta} from "@storybook/react";
//import  Button  from "../../Button/Button";
//import Stack from "@mui/material/Stack";

import CustomTimeline from "../Timeline";
import { TimelineProp } from "../TimelineType";


export default {
  title: "Custom Timeline", // Storybook section and component name
  component: CustomTimeline, // The component we're documenting
  argTypes: {
    Props: {
      control: "object",
      description: "Props to configure the CustomTimeline component",
    },
  },
} as Meta;


const Template = (args: TimelineProp) => <CustomTimeline {...args} />;

export const Default = Template.bind({});
Default.args = {
  
    Title: "Case Timeline",
    variant: "vertical",
    Timeline: [
      {
        Title: "Intake",
        Code: "P1",
        Color: "primary",
        Sublist: [
          {
            Title: "Application Received",
            Code: "",
            Component: "Completed: 10/01/2024",
            status: "completed"
          },
          {
            Title: "Case Established",
            Code: "",
            Component: "Completed: 10/18/2024",
            status: "completed"
          }
        ],
        status: "completed"
      },
      {
        Title: "Locate",
        Code: "P1",
        Color: "primary",
        Sublist: [
          {
            Title: "Subtask 1",
            Code: "S3",
            Component: "Completed: 11/01/2024",
            status: "completed"
          },
          {
            Title: "Subtask 2",
            Code: "S4",
            Component: "Completed: 11/15/2024",
            status: "completed"
          }
        ],
        status: "completed"
      },
      {
        Title: "Parentage",
        Code: "P1",
        Color: "primary",
        Sublist: [
          {
            Title: "Subtask 1",
            Code: "S1",
            Component: "Completed: 12/01/2024",
            status: "completed"
          },
          {
            Title: "Subtask 2",
            Code: "S2",
            Component: "Completed: 12/02/2024",
            status: "completed"
          }
        ],
        status: "completed"
      },
      {
        Title: "Court Order Establishment",
        Code: "P4",
        Color: "primary",
        Sublist: [
          {
            Title: "Subtask 1",
            Code: "S1",
            Component: "Completed: 01/01/2025",
            status: "completed"
          },
          {
            Title: "Subtask 2",
            Code: "S2",
            Component: "Due: 01/15/2025",
            status: "in-progress"
          },
          {
            Title: "Subtask 3",
            Code: "S2",
            Component: "Due: 01/19/2025",
            status: "in-progress"
          }
        ],
        status: "completed"
      },
      {
        Title: "Enforcement",
        Code: "P1",
        Color: "Violoet",
        Sublist: [
          {
            Title: "Subtask 10",
            Code: "S1",
            Component: "Component 1",
            status: "completed"
          },
          {
            Title: "Subtask 11",
            Code: "S2",
            Component: "Component 2",
            status: "completed"
          }
        ],
        status: "in-progress"
      },
      {
        Title: "Case Closure",
        Code: "P1",
        Color: "Violoet",
        Sublist: [
          {
            Title: "Subtask 10",
            Code: "S1",
            Component: "Due: 01/15/2025",
            status: "completed"
          },
          {
            Title: "Subtask 11",
            Code: "S2",
            Component: "Component 2",
            status: "pending"
          }
        ],
        status: "in-progress"
      }
    ]
  
};

export const Playground = Template.bind({});
Playground.args = {
  Title: "Case Timeline",
  Timeline: [
    {
      Title: "Intake",
      Code: "P1",
      status: "completed",
      Color: "primary",
      Sublist: [
        {
          Title: "Application Received",
          Code: "S1",
          Component: "Completed: 10/01/2024",
          status: "in-progress",
        },
        {
          Title: "Case Established",
          Code: "S2",
          Component: "Completed: 10/18/2024",
          status: "completed"
        }
      ]
    },
    {
      Title: "Locate",
      Code: "P2",
      status: "completed",
      Color: "primary",
      Sublist: [
        {
          Title: "Sub task 1",
          Code: "S1",
          Component: "Completed: 11/01/2024",
          status: "in-progress",
        },
        {
          Title: "Sub task 2",
          Code: "S1",
          Component: "Completed: 11`/15/2024",
          status: "in-progress",
        }
      ]
    },
    {
      Title: "Parentage",
      Code: "P2",
      status: "completed",
      Color: "primary",
      Sublist: [
        {
          Title: "Sub task 1",
          Code: "S1",
          Component: "Completed: 12/01/2024",
          status: "in-progress",
        },
        {
          Title: "Sub task 2",
          Code: "S1",
          Component: "Completed: 12/02/2024",
          status: "in-progress",
          
        }
      ]
    },
    {
      Title: "Court Order Establishment",
      Code: "P2",
      status: "completed",
      Color: "primary",
      Sublist: [
        {
          Title: "Sub task 1",
          Code: "S1",
          Component: "Completed: 01/01/2025",
          status: "completed",
        },
        {
          Title: "Sub task 2",
          Code: "S1",
          Component: "Due: 01/15/2024",
          status: "in-progress",
        },
        {
          Title: "Sub task 3",
          Code: "S1",
          Component: "Due: 01/19/2024",
          status: "in-progress",
        }
      ]
    },
    {
      Title: "Enforcement",
      Code: "P2",
      status: "completed",
      Color: "primary",
      Sublist: [
        {
          Title: "Sub task 1",
          Code: "S1",
          Component: "Completed: 12/01/2024",
          status: "in-progress",
        },
        {
          Title: "Sub task 2",
          Code: "S1",
          Component: "Completed: 12/02/2024",
          status: "in-progress",
        }
      ]
    },
    {
      Title: "Closure",
      Code: "P2",
      status: "completed",
      Color: "primary",
      Sublist: [
        {
          Title: "Application Received",
          Code: "S1",
          Component: "Completed: 12/01/2024",
          status: "in-progress",
        },
        {
          Title: "Application Received",
          Code: "S1",
          Component: "Completed: 12/02/2024",
          status: "in-progress",
          
        }
      ]
    }
  ]
  

};
