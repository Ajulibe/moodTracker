import React from "react";
import "./style.scss";

interface Props {
  children: React.ReactNode;
}

const index: React.FC<Props> = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default index;
