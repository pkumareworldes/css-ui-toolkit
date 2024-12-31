import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import SectionWizardView from "../SectionWizardView";
import { ISectionWizardViewProps } from "../types";

export default {
  title: "SectionWizardView",
  component: SectionWizardView,
} as Meta<typeof SectionWizardView>;


const TempData: ISectionWizardViewProps = {
  header: { title: "Custodial Parents" },
  subsections: [{
    statusSection: {
      title: 'Maria anna johson',
      options: [{
        title: "ona",
        maxWidth: "",
        outline: false,
        filled: false,
        borderColor: "",
        spacing: "",
        direction: "row",
        variant: "outlined",
        cssProps: {
          width: undefined,
          height: undefined,
          color: 'red'
        }
      }, {
        title: "twna",
        maxWidth: "100px",
        outline: true,
        filled: true,
        borderColor: "red",
        spacing: "",
        direction: "row",
        variant: "filled",
        cssProps: {
          width: undefined,
          height: undefined,
          color: 'red'
        }
      }]
    },
    section: [
      {
        options: {
          fieldName: "Field Label",
          fieldValue: "Click Me",
          fieldColor: "#1976d2", // Blue color for the text
          isLink: true,
          link: "https://example.com",
          underline: "hover", // Underline on hover for the link
          alignRow: true, // Display in grid layout
          iconComp: null, // Icon to be displayed in the beginning
          cssProps: {},
          valueColor: ""
        }
      },
      {
        options: {
          fieldName: "Field Label 2",
          fieldValue: "Click Me",
          fieldColor: "#1976d2", // Blue color for the text
          isLink: true,
          link: "https://example.com",
          underline: "hover", // Underline on hover for the link
          alignRow: true, // Display in grid layout
          iconComp: null, // Icon to be displayed in the beginning
          cssProps: {},
          valueColor: ""
        }
      },
      {
        options: {
          fieldName: "Field Label 3",
          fieldValue: "Click Me",
          fieldColor: "#1976d2", // Blue color for the text
          isLink: true,
          link: "https://example.com",
          underline: "hover", // Underline on hover for the link
          alignRow: true, // Display in grid layout
          iconComp: null, // Icon to be displayed in the beginning
          cssProps: {},
          valueColor: ""
        }
      },
      {
        options: {
          fieldName: "Field Label 4",
          fieldValue: "Click Me",
          fieldColor: "#1976d2", // Blue color for the text
          isLink: true,
          link: "https://example.com",
          underline: "hover", // Underline on hover for the link
          alignRow: true, // Display in grid layout
          iconComp: null, // Icon to be displayed in the beginning
          cssProps: {},
          valueColor: ""
        }
      },
      {
        options: {
          fieldName: "Field Label 5",
          fieldValue: "Click Me",
          fieldColor: "#1976d2", // Blue color for the text
          isLink: true,
          link: "https://example.com",
          underline: "hover", // Underline on hover for the link
          alignRow: true, // Display in grid layout
          iconComp: null, // Icon to be displayed in the beginning
          cssProps: {},
          valueColor: ""
        }
      }

    ],
    footer: () => <h2>I am footer</h2>,
    isFullScreen: true
  },
  {
    statusSection: {
      title: 'Maria anna johson',
      options: [{
        title: "MVP",
        maxWidth: "",
        outline: false,
        filled: false,
        borderColor: "",
        spacing: "",
        direction: "row",
        variant: "outlined",
        cssProps: {
          width: undefined,
          height: undefined,
          color: 'red'
        }
      }]
    },
    section: [
      {
        options: {
          fieldName: "Field Label",
          fieldValue: "Click Me",
          fieldColor: "#1976d2", // Blue color for the text
          isLink: true,
          link: "https://example.com",
          underline: "hover", // Underline on hover for the link
          alignRow: true, // Display in grid layout
          iconComp: null, // Icon to be displayed in the beginning
          cssProps: {},
          valueColor: ""
        }
      },
      {
        options: {
          fieldName: "Field Label 2",
          fieldValue: "Click Me",
          fieldColor: "#1976d2", // Blue color for the text
          isLink: true,
          link: "https://example.com",
          underline: "hover", // Underline on hover for the link
          alignRow: true, // Display in grid layout
          iconComp: null, // Icon to be displayed in the beginning
          cssProps: {},
          valueColor: ""
        }
      },
      {
        options: {
          fieldName: "Field Label 5",
          fieldValue: "Click Me",
          fieldColor: "#1976d2", // Blue color for the text
          isLink: true,
          link: "https://example.com",
          underline: "hover", // Underline on hover for the link
          alignRow: true, // Display in grid layout
          iconComp: null, // Icon to be displayed in the beginning
          cssProps: {},
          valueColor: ""
        }
      }

    ],
    footer: () => <h2>I am footer</h2>,
    isFullScreen: true
  }]

}

export const Simple: ComponentStory<typeof SectionWizardView> = () => (<SectionWizardView subsections={TempData.subsections} header={TempData.header} />);

