import { ModalDialogInterface } from "./modalInterface";

export const modalDialogProps: ModalDialogInterface = {
  showModal: true,
  title: "View/Edit Organization",
  bodyComponent: null,
  primaryAction: "Save",
  closeOnPrimaryAction: true,
  secondaryAction: "Cancel",
  closeOnSecondaryAction: true,
  cssProps: {
    width: undefined,
    maxWidth: undefined,
    height: undefined,
    maxHeight: undefined,
    disablePrimaryAction: false,
    buttonColor: undefined,
  },
};
