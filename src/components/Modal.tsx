import React, { ReactElement, useState } from "react";
import "../styles/modal-styles.css";

import { EMPLOYEEDETAILS_MOCK as data } from "../data/mock";

//MUI
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MuiDivider from "@material-ui/core/Divider";

//Components
import SectionTitle from "./SectionTitle";

interface Props {}

export default function Modal({}: Props): ReactElement {
  const [open, setOpen] = React.useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <div className="center-btn">
      <Button variant="outlined" onClick={handleOpen}>
        Edit Details
      </Button>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Carrie Conway</DialogTitle>
        <MuiDivider />
        <DialogContent>
          <SectionTitle text="Basic Info" upcase />
          <DialogContentText>blah blah blah</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
