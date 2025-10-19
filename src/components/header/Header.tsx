import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import mubiLogo from "/logo.svg";
import "./Header.css";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={mubiLogo} alt="MUBI logo" />
      </Link>

      <h1 className="header__title">Film Log</h1>

      <Link to="/reviews/new" className="header__add-btn" title="Add review">
        <FiPlus size={20} />
      </Link>
    </header>
  );
};
