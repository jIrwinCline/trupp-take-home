import React, { ReactElement } from "react";
import "../styles/profile-page-styles.css";

//Components
import Modal from "../components/Modal";

interface Props {}

export default function profilePage({}: Props): ReactElement {
  return (
    <div>
      <h1 className="center">My User Profile</h1>
      {/* <button className="center">Edit Details</button> */}
      <Modal />
    </div>
  );
}
