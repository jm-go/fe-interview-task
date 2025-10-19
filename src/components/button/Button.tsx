import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

type ButtonProps = {
  label: string;
  to: string;
};

export const Button: React.FC<ButtonProps> = ({ label, to }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(to);

  return (
    <button className="button" onClick={handleClick}>
      {label}
    </button>
  );
};