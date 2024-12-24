import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ModalComp from "../Modal";
import { ModalDialogPropInterface } from "../modalInterface";

export default {
  title: "Components/ModalComp",
  component: ModalComp,
  argTypes: {
    eleProps: {
      control: "object",
      description: "Props to configure the modal dialog",
    },
  },
} as Meta;

const Template: StoryObj<ModalDialogPropInterface> = (args) => (
  <ModalComp {...args} />
);

export const DefaultModal = Template.bind({});
DefaultModal.args = {
  eleProps: {
    showModal: true,
    title: "View/Edit Organization",
    primaryAction: "Save",
    closeOnPrimaryAction: true,
    secondaryAction: "Cancel",
    closeOnSecondaryAction: true,
    cssProps: {
      width: "400px",
      maxWidth: "90%",
      height: "auto",
      maxHeight: "500px",
      disablePrimaryAction: false,
      buttonColor: "blue",
    },
  },
};
