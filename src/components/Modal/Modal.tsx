import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { ModalDialogPropInterface } from "./modalInterface";
import { ConfirmationDialogRawProps } from "./modalInterface";

function ConfirmationDialogRaw(props: ConfirmationDialogRawProps) {
  const { onClose, open, modalProps, ...other } = props;
  const radioGroupRef = React.useRef<HTMLElement>(null);
  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose();
  };

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { ...modalProps.cssProps } }}
      maxWidth="xs"
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <DialogTitle>{modalProps.title}</DialogTitle>
      <DialogContent dividers></DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          {modalProps.secondaryAction}
        </Button>
        <Button onClick={handleOk}>{modalProps.primaryAction}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default function ModalComp({ eleProps }: ModalDialogPropInterface) {
  const [open, setOpen] = React.useState(eleProps.showModal);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ConfirmationDialogRaw
        id="ringtone-menu"
        keepMounted
        open={open}
        onClose={handleClose}
        modalProps={eleProps}
      />
    </Box>
  );
}
