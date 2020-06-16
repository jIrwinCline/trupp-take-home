import React, { ReactElement } from "react";
import "../styles/section-title-styles.css";

interface Props {
  text: String;
  upcase?: boolean;
}

export default function SectionTitle({ text, upcase }: Props): ReactElement {
  const title = upcase ? text.toUpperCase() : text;
  return (
    <div>
      <p className="section-title">{title}</p>
      <hr className="line" />
    </div>
  );
}
