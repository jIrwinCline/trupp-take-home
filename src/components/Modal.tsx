import React, { ReactElement, useState } from "react";
import "../styles/modal-styles.css";
import ReactDOM from "react-dom";

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
//MUI Icons
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import WcIcon from "@material-ui/icons/Wc";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CakeIcon from "@material-ui/icons/Cake";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonIcon from "@material-ui/icons/Person";
import CreditCardIcon from "@material-ui/icons/CreditCard";
//Components
import SectionTitle from "./SectionTitle";

//Interfaces
import { EmployeeDetails } from "../data/mock";

interface UserStateInterface {
  gender: null | String;
  contactName: null | String;
  fullName: null | String;
  preferredName: null | String;
  social: null | String;
  birthDate: any;
  address: {
    addressLine1: null | String;
    addressLine2: null | String;
    city: null | String;
    state: null | String;
    zip: null | String;
  };
  personalEmail: null | String;
  mobilePhone: null | String;
  addressType: null | String;
  emailType: null | String;
  phoneType: null | String;
}

interface Props {
  data: EmployeeDetails;
}

export default function Modal({ data }: Props): ReactElement {
  const [open, setOpen] = useState<boolean>(false);

  const [gender, setGender] = useState<null | String>(
    data.genderDescription.toLowerCase()
  );
  const [contactName, setContactName] = useState<null | String>(
    data.contactName
  );
  const [fullName, setFullName] = useState<null | String>("Caroline Conway");
  const [preferredName, setPreferredName] = useState<null | String>(
    data.contactName.split(" ")[0]
  );
  const [social, setSocial] = useState<null | String>(
    data.maskedSocialSecurity
  );
  const [birthDate, setBirthDate] = useState<any>(
    data.dateOfBirth.toLocaleString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  );
  const [address, setAddress] = useState<any>(data.streetAddress);
  const [personalEmail, setPersonalEmail] = useState<null | String>(
    data.personalEmail
  );
  const [mobilePhone, setMobilePhone] = useState<null | String>(
    data.mobilePhone
  );
  const [addressType, setAddressType] = useState<null | String>(
    "Street Address"
  );
  const [emailType, setEmailType] = useState<null | String>("Personal");
  const [phoneType, setPhoneType] = useState<null | String>("Mobile");
  const [userState, setUserState] = useState<UserStateInterface>({
    gender,
    contactName,
    fullName,
    preferredName,
    social,
    birthDate,
    address,
    personalEmail,
    mobilePhone,
    addressType,
    emailType,
    phoneType,
  });

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleSave = (): void => {
    setUserState({
      gender,
      contactName,
      fullName,
      preferredName,
      social,
      birthDate,
      address,
      personalEmail,
      mobilePhone,
      addressType,
      emailType,
      phoneType,
    });
    setOpen(false);
  };

  return (
    <div className="center-btn">
      <p className="center-message">
        {" "}
        Hello User! We have your information stored in our app. Go ahead and
        click the 'See Details' button to confirm if it's correct. Otherwise,
        please update the information.
      </p>

      <a style={{ textDecoration: "none" }} href="#top">
        <Button variant="outlined" onClick={handleOpen}>
          See Details
        </Button>
      </a>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className="modal-container"
      >
        <DialogTitle id="form-dialog-title">
          {userState.contactName}
        </DialogTitle>
        <MuiDivider />
        <DialogContent>
          <div id="top" />
          <SectionTitle text="Basic Info" upcase />
          <Grid container>
            <Grid item xs={1}>
              <PersonIcon className="left-icon" />{" "}
              <div className="icon-spacer" />
              <CreditCardIcon className="left-icon" />{" "}
              <CakeIcon className="left-icon" />{" "}
            </Grid>
            <Grid item xs={10}>
              <div className="input-container">
                <TextField
                  autoFocus
                  label="Full Name"
                  defaultValue={userState.fullName}
                  margin="dense"
                  name="fullName"
                  onChange={(e): void => {
                    setFullName(e.target.value);
                  }}
                  type="name"
                  fullWidth
                />
                <TextField
                  autoFocus
                  label="Preferred First Name"
                  margin="dense"
                  name="preferredName"
                  type="name"
                  defaultValue={userState.preferredName}
                  onChange={(e): void => {
                    setPreferredName(e.target.value);
                  }}
                  fullWidth
                />
                <TextField
                  autoFocus
                  label="Social Security Number"
                  margin="dense"
                  id="social"
                  defaultValue={userState.social}
                  onChange={(e): void => {
                    setSocial(e.target.value);
                  }}
                  type="password"
                  fullWidth
                />
                <TextField
                  autoFocus
                  label="Birthday"
                  margin="dense"
                  id="text"
                  defaultValue={userState.birthDate}
                  onChange={(e): void => {
                    setBirthDate(e.target.value);
                  }}
                  type="text"
                  fullWidth
                />
              </div>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <SectionTitle text="Addresses" upcase />
          <Grid container>
            <Grid item xs={1}>
              <LocationOnIcon className="left-icon" />
            </Grid>
            <Grid item xs={10}>
              <div className="input-container">
                <TextField
                  autoFocus
                  label="Street Address 1"
                  margin="dense"
                  defaultValue={userState.address.addressLine1}
                  name="addressLine1"
                  type="text"
                  onChange={(e): any =>
                    setAddress({ ...address, [e.target.name]: e.target.value })
                  }
                  fullWidth
                />
                <TextField
                  autoFocus
                  defaultValue={userState.address.addressLine2}
                  label="Street Address 2"
                  margin="dense"
                  name="addressLine2"
                  type="email"
                  onChange={(e): any =>
                    setAddress({ ...address, [e.target.name]: e.target.value })
                  }
                  fullWidth
                />
                <TextField
                  autoFocus
                  label="City"
                  margin="dense"
                  name="city"
                  defaultValue={userState.address.city}
                  onChange={(e): any =>
                    setAddress({ ...address, [e.target.name]: e.target.value })
                  }
                  type="text"
                  fullWidth
                />
                <TextField
                  autoFocus
                  label="State"
                  margin="dense"
                  defaultValue={userState.address.state}
                  onChange={(e): any =>
                    setAddress({ ...address, [e.target.name]: e.target.value })
                  }
                  name="state"
                  type="text"
                  className="half-field-left"
                />
                <TextField
                  autoFocus
                  label="Zip Code"
                  margin="dense"
                  name="zip"
                  defaultValue={userState.address.zip}
                  onChange={(e): any =>
                    setAddress({ ...address, [e.target.name]: e.target.value })
                  }
                  type="text"
                  className="half-field-right"
                />
                <FormControl className="margin">
                  <InputLabel id="select-label">Address Type</InputLabel>
                  <Select
                    id="address-select"
                    value={userState.addressType}
                    // input={<BootstrapInput />}
                  >
                    <MenuItem
                      onClick={(e): any => setAddressType("Street Address")}
                      value={"Street Address"}
                    >
                      Street Address
                    </MenuItem>
                    <MenuItem
                      onClick={(e): any => setAddressType("Apartment Address")}
                      value={"Apartment Address"}
                    >
                      Apartment Address
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={1}>
              <AddCircleOutlineIcon color="primary" className="right-icon" />
            </Grid>
          </Grid>
          <SectionTitle text="Contact Info" upcase />
          <Grid container>
            <Grid item xs={1}>
              <EmailIcon className="left-icon" />
              <PhoneIcon className="left-icon" />
            </Grid>
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
                        onChange={(e): void => {
                          setPersonalEmail(e.target.value);
                        }}
                        defaultValue={userState.personalEmail}
                        className="half-field-left"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl className="half-field-right">
                        <InputLabel id="select-label"></InputLabel>
                        <Select
                          id="email-select"
                          value={userState.emailType}
                          // onChange={handleChange}
                          // input={<BootstrapInput />}
                        >
                          <MenuItem
                            onClick={(e) => {
                              setEmailType("Personal");
                            }}
                            value={"Personal"}
                          >
                            Personal
                          </MenuItem>
                          <MenuItem
                            onClick={(e) => {
                              setEmailType("Business");
                            }}
                            value={"Business"}
                          >
                            Business
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </div>
                <div className="half-field-container">
                  <Grid container>
                    <Grid className="half-field-container" item xs={6}>
                      <TextField
                        label="Phone"
                        margin="dense"
                        id="phone"
                        type="text"
                        defaultValue={userState.mobilePhone}
                        onChange={(e): void => {
                          setMobilePhone(e.target.value);
                        }}
                        className="half-field-left"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl className="half-field-right">
                        <InputLabel id="select-label"></InputLabel>
                        <Select
                          id="phone-select"
                          value={userState.phoneType}
                          // onChange={handleChange}
                          // input={<BootstrapInput />}
                        >
                          <MenuItem
                            onClick={(e) => {
                              setPhoneType("Mobile");
                            }}
                            value={"Mobile"}
                          >
                            Mobile
                          </MenuItem>
                          <MenuItem
                            onClick={(e) => {
                              setPhoneType("Home");
                            }}
                            value={"Home"}
                          >
                            Home
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  {/* </div> */}
                </div>
              </div>
            </Grid>
            <Grid item xs={1}>
              <Grid item xs={1}>
                <AddCircleOutlineIcon color="primary" className="right-icon" />
                <AddCircleOutlineIcon color="primary" className="right-icon" />
              </Grid>
            </Grid>
          </Grid>
          <SectionTitle
            text="Legal Info"
            style={{ paddingBottom: "8px" }}
            upcase
          />
          <br />
          <Grid container>
            <Grid item xs={1}>
              <WcIcon className="gender-icon" />
            </Grid>
            <Grid item xs={10}>
              <div className="input-container">
                <FormControl component="fieldset">
                  <FormLabel component="legend">Legal Gender</FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={gender}
                    onChange={(e): void => {
                      setGender(e.target.value);
                    }}
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
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
