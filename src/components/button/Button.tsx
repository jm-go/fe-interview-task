import React from "react";
import "./Button.css";

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};