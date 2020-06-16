import React, { ReactElement } from "react";
import "../styles/profile-page-styles.css";

interface Props {}

export default function profilePage({}: Props): ReactElement {
  return (
    <div>
      <h1 className="header">My User Profile</h1>
    </div>
  );
}
