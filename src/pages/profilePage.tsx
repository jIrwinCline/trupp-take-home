import React, { ReactElement } from "react";
import "../styles/profile-page-styles.css";

import { EMPLOYEEDETAILS_MOCK as userData } from "../data/mock";

//Components
import Modal from "../components/Modal";

export default function profilePage(): ReactElement {
  return (
    <div>
      <h1 className="center">My User Profile</h1>
      {/* <button className="center">Edit Details</button> */}
      <Modal data={userData} />
    </div>
  );
}
