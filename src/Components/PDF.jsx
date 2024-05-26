import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, Button, IconButton } from "@mui/material";
import SarvathAnjum_Resume from "../Assets/SarvathAnjum_Resume.pdf";
import CloseIcon from "@mui/icons-material/Close";

function PDF(props) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div style={{ alignSelf: "start" }}>
      <Button onClick={handleOpen} variant="contained" style={{ background: "#717D7E", color: "white" }}>
        {props.text}
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg" height="100%">
        <DialogTitle>{props.dialogTitle}</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "#717d7e",
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <iframe src={props.src} width="100%" height="500px" title="PDF viewer" />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PDF;
