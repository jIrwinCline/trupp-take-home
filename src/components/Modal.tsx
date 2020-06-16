import React, { ReactElement, useState } from "react";
import "../styles/modal-styles.css";

import { EMPLOYEEDETAILS_MOCK as data } from "../data/mock";

//MUI
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MuiDivider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

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
  const addressType = "Street Address";
  return (
    <div className="center-btn">
      <Button variant="outlined" onClick={handleOpen}>
        Edit Details
      </Button>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className="modal-container"
      >
        <DialogTitle id="form-dialog-title">Carrie Conway</DialogTitle>
        <MuiDivider />
        <DialogContent>
          <SectionTitle text="Basic Info" upcase />
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <div className="input-container">
                <TextField
                  autoFocus
                  label="Full Name"
                  margin="dense"
                  id="fullName"
                  type="email"
                  fullWidth
                />
                <TextField
                  autoFocus
                  label="Preferred First Name"
                  margin="dense"
                  id="firstName"
                  type="email"
                  fullWidth
                />
                <TextField
                  autoFocus
                  label="Social Security Number"
                  margin="dense"
                  id="name"
                  type="email"
                  fullWidth
                />
                <TextField
                  autoFocus
                  label="Birthday"
                  margin="dense"
                  id="name"
                  type="email"
                  fullWidth
                />
              </div>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <SectionTitle text="Addresses" upcase />
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <div className="input-container">
                <TextField
                  autoFocus
                  label="Street Address 1"
                  margin="dense"
                  id="name"
                  type="email"
                  fullWidth
                />
                <TextField
                  autoFocus
                  label="Street Address 2"
                  margin="dense"
                  id="name"
                  type="email"
                  fullWidth
                />
                <TextField
                  autoFocus
                  label="City"
                  margin="dense"
                  id="name"
                  type="email"
                  fullWidth
                />

                <TextField
                  autoFocus
                  label="State"
                  margin="dense"
                  id="name"
                  type="email"
                  className="half-field-left"
                />
                <TextField
                  autoFocus
                  label="Zip Code"
                  margin="dense"
                  id="name"
                  type="email"
                  className="half-field-right"
                />

                <FormControl className="margin">
                  <InputLabel id="select-label">Address Type</InputLabel>
                  <Select
                    id="address-select"
                    value={addressType}
                    // onChange={handleChange}
                    // input={<BootstrapInput />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Street Address"}>Street Address</MenuItem>
                    <MenuItem value={"Apartment Address"}>
                      Apartment Address
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <SectionTitle text="Contact Info" upcase />
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <div className="input-container">
                <div className="half-field-container">
                  <Grid container>
                    <Grid className="half-field-container" item xs={6}>
                      <TextField
                        // autoFocus
                        label="Email Address"
                        margin="dense"
                        id="email"
                        type="email"
                        className="half-field-left"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl className="half-field-right">
                        <InputLabel id="select-label"></InputLabel>
                        <Select
                          id="address-select"
                          value={"Personal"}
                          // onChange={handleChange}
                          // input={<BootstrapInput />}
                        >
                          <MenuItem value={"Personal"}>Personal</MenuItem>
                          <MenuItem value={"Business"}>Business</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </div>
                <div className="half-field-container">
                  <Grid container>
                    <Grid className="half-field-container" item xs={6}>
                      <TextField
                        // autoFocus
                        label="Phone"
                        margin="dense"
                        id="email"
                        type="email"
                        className="half-field-left"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl className="half-field-right">
                        <InputLabel id="select-label"></InputLabel>
                        <Select
                          id="address-select"
                          value={addressType}
                          // onChange={handleChange}
                          // input={<BootstrapInput />}
                        >
                          <MenuItem value={"Street Address"}>
                            Street Address
                          </MenuItem>
                          <MenuItem value={"Apartment Address"}>
                            Apartment Address
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  {/* </div> */}
                </div>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <SectionTitle text="Legal Info" upcase />
          <br />
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <div className="input-container">
                <FormControl component="fieldset">
                  <FormLabel component="legend">Legal Gender</FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={null}
                    // onChange={handleChange}
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    {/* <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    /> */}
                  </RadioGroup>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </DialogContent>
        <hr className="action-hr" />
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
