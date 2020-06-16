import React, { ReactElement } from "react";

interface Props {
  text: String;
  upcase?: boolean;
}

export default function SectionTitle({ text, upcase }: Props): ReactElement {
  const title = upcase ? text.toUpperCase() : text;
  return <div className="section-title">{title}</div>;
}
