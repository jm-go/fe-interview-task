import React from "react";
import "./GenreDropdown.css";

type GenreDropdownProps = {
  genres: string[];
  value: string;
  onChange: (genre: string) => void;
  placeholder?: string;
};

export const GenreDropdown: React.FC<GenreDropdownProps> = ({
  genres,
  value,
  onChange,
  placeholder = "Filter by genre",
}) => {
  const isPlaceholder = value === "";

  return (
    <select
      className={`dropdown ${isPlaceholder ? "placeholder" : ""}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>
      <option value="all">All</option>
      {genres.map((genre) => (
        <option key={genre} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
};