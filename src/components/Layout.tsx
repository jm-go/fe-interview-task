import React from "react";
import { Header } from "./header/Header";
import "../styles/global.css";

type LayoutProps = {
  children: React.ReactNode;
  showHeader?: boolean;
};

export const Layout: React.FC<LayoutProps> = ({ children, showHeader = true }) => (
  <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
    {showHeader && <Header />}
    <main className="app-container">{children}</main>
  </div>
);
