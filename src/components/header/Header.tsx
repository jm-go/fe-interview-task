import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPlus, FiArrowLeft, FiTrash2 } from "react-icons/fi";
import mubiLogo from "/logo.svg";
import "./Header.css";

export type HeaderProps = {
  isDetailsView?: boolean;
  isAddView?: boolean;
  onDelete?: () => void;
  title?: string;
};

export const Header: React.FC<HeaderProps> = ({
  isDetailsView = false,
  isAddView = false,
  onDelete,
  title = "Film Log",
}) => {
  const navigate = useNavigate();

  const displayTitle = isAddView ? "Add Review" : title;

  return (
    <header className="header">
      {isDetailsView || isAddView ? (
        <button
          className="header__icon-btn"
          aria-label="Go back"
          onClick={() => navigate("/review-list")}
          title="Go back"
        >
          <FiArrowLeft size={20} />
        </button>
      ) : (
        <Link to="/" className="header__logo">
          <img src={mubiLogo} alt="MUBI logo" />
        </Link>
      )}

  <h1 className="header__title">{displayTitle}</h1>

      {!isAddView ? (
        isDetailsView ? (
          <button
            className="header__icon-btn"
            aria-label="Delete review"
            title="Delete review"
            onClick={onDelete}
          >
            <FiTrash2 size={18} />
          </button>
        ) : (
          <Link to="/reviews/new" className="header__add-btn" title="Add review">
            <FiPlus size={20} />
          </Link>
        )
      ) : null}
    </header>
  );
};
