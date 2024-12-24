export interface ModalDialogInterface {
  showModal: boolean;
  title: string;
  bodyComponent: React.ComponentType<{
    className: string;
    setValue: (newValue: string) => void;
  }> | null;
  primaryAction: string;
  closeOnPrimaryAction: boolean;
  secondaryAction: string;
  closeOnSecondaryAction: boolean;
  cssProps: {
    width?: string | number; // Can be a string (e.g., '400px') or a number (e.g., 400)
    maxWidth?: string | number; // Can be a string (e.g., '500px') or a number (e.g., 500)
    height?: string | number; // Can be a string (e.g., '300px') or a number (e.g., 300)
    maxHeight?: string | number; // Can be a string (e.g., '500px') or a number (e.g., 500)
    disablePrimaryAction: boolean; // Boolean to disable the primary action button
    buttonColor?: string; // Optional color for the buttons, e.g., 'blue' or '#FF0000'
  };
}
export interface ModalDialogPropInterface {
  eleProps: ModalDialogInterface;
}

export interface ConfirmationDialogRawProps {
  id: string;
  keepMounted: boolean;
  open: boolean;
  modalProps: ModalDialogInterface;
  onClose: (value?: string) => void;
}
