import React, { ReactElement } from "react";
import "../styles/profile-page-styles.css";

interface Props {}

export default function profilePage({}: Props): ReactElement {
  return (
    <div>
      <h1 className="center">My User Profile</h1>
      <button className="center">Edit Details</button>
    </div>
  );
}
