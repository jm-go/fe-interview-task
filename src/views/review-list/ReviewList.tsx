import React, { useEffect, useMemo, useState } from "react";
import { Layout } from "../../components/Layout";
import { FilmCard } from "../../components/film-card/FilmCard";
import { GenreDropdown } from "../../components/genre-dropdown/GenreDropdown";
import type { Review } from "../../types/types";
import { getAllReviews } from "../../storage/reviews";

const ReviewList: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [genre, setGenre] = useState<string>("all");

  // Load reviews once when this screen mounts
  useEffect(() => {
    setReviews(getAllReviews());
  }, []);

  // Get all unique genres present in stored reviews
  const genres = useMemo(() => {
    const s = new Set<string>();
    reviews.forEach((r) => (r.filmGenres ?? []).forEach((g) => s.add(g)));
    return Array.from(s).sort();
  }, [reviews]);

  // Filter by selected genre
  const filtered = useMemo(() => {
    if (genre === "all") return reviews;
    return reviews.filter((r) => r.filmGenres?.includes(genre));
  }, [reviews, genre]);

  return (
    <>
      <Layout>
        <div style={{ margin: "1rem auto", width: "30rem", maxWidth: "100%" }}>
          <GenreDropdown
            genres={genres}
            value={genre}
            onChange={setGenre}
            placeholder="Filter by genre"
          />
        </div>

        {filtered.length === 0 ? (
          <p style={{ textAlign: "center", opacity: 0.7, marginTop: "2rem" }}>
            Your reviews will appear here…
          </p>
        ) : (
          filtered.map((r) => (
            <FilmCard
              key={r.id}
              id={r.id}
              title={r.filmTitle}
              year={r.filmYear}
              description={r.reviewText}
              director={r.filmDirector}
              imageUrl={r.image_url || "/image-placeholder.png"}
              to={`/reviews/${r.id}`}
            />
          ))
        )}
      </Layout>
    </>
  );
};

export default ReviewList;