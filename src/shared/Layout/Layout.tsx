import React from "react";
import layout from "./layout.css";

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return <div className={layout.layout}>{children}</div>;
}
