import React, { useMemo, useState } from "react";
import { Layout } from "../Layout";
import { FilmCard } from "../film-card/FilmCard";
import { GenreDropdown } from "../genre-dropdown/GenreDropdown";

// TODO: Replace with real data fetching
const items = [
  { id: "1", title: "The Godfather", director: "Francis Ford Coppola", year: 1972, genres: ["Crime", "Drama"], description: "…" },
  { id: "2", title: "Taxi Driver", director: "Martin Scorsese", year: 1976, genres: ["Crime", "Drama"], description: "…" },
];

const ReviewList: React.FC = () => {
  const [genre, setGenre] = useState<string>("");

  const genres = useMemo(() => {
    const s = new Set<string>();
    items.forEach((i) => i.genres?.forEach((g) => s.add(g)));
    return Array.from(s).sort();
  }, []);

  const filtered = useMemo(() => {
    if (!genre || genre === "all") return items;
    return items.filter((i) => i.genres?.includes(genre));
  }, [genre]);

  return (
    <Layout>
      <div style={{ margin: "1rem auto", width: "30rem" }}>
        <GenreDropdown
          genres={genres}
          value={genre}
          onChange={setGenre}
          placeholder="Filter by genre"
        />
      </div>

      {filtered.map((it) => (
        <FilmCard key={it.id} {...it} />
      ))}
    </Layout>
  );
};

export default ReviewList;
