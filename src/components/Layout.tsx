import React from "react";
import { Header, type HeaderProps } from "./header/Header";
import "../styles/global.css";

type LayoutProps = {
  children: React.ReactNode;
  showHeader?: boolean;
  headerProps?: HeaderProps;
};

export const Layout: React.FC<LayoutProps> = ({
  children,
  showHeader = true,
  headerProps,
}) => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    {showHeader && <Header {...headerProps} />}
    <main className="app-container">{children}</main>
  </div>
);
