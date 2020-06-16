import React, { ReactElement } from "react";
import "../styles/section-title-styles.css";
import CSS from "csstype";

interface Props {
  text: String;
  upcase?: boolean;
  style?: CSS.Properties;
}

export default function SectionTitle({
  text,
  upcase,
  style,
}: Props): ReactElement {
  const title = upcase ? text.toUpperCase() : text;
  return (
    <div style={{ ...style, marginLeft: "15px", paddingTop: "10px" }}>
      <p className="section-title">{title}</p>
      <hr className="line" />
    </div>
  );
}
