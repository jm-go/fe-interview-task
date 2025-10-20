import React from "react";
import "./GenreDropdown.css";

type GenreDropdownProps = {
  genres: string[];
  value: string;
  onChange: (genre: string) => void;
};

export const GenreDropdown: React.FC<GenreDropdownProps> = ({
  genres,
  value,
  onChange,
}) => {
  return (
    <select
      className="dropdown"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="all">All</option>
      {genres.map((genre) => (
        <option key={genre} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
};