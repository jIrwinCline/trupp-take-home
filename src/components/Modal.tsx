import React, { ReactElement, useState } from "react";
import "../styles/modal-styles.css";

import { EMPLOYEEDETAILS_MOCK as data } from "../data/mock";

//MUI
import Button from "@material-ui/core/Button";

interface Props {}

export default function Modal({}: Props): ReactElement {
  return (
    <div className="center-btn">
      <Button>Edit Details</Button>
    </div>
  );
}
