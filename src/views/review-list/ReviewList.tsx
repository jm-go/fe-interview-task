import React, { useEffect, useMemo, useState } from "react";
import { Layout } from "../../components/Layout";
import { FilmCard } from "../../components/film-card/FilmCard";
import { GenreDropdown } from "../../components/genre-dropdown/GenreDropdown";
import type { Review } from "../../types/types";
import { getAllReviews } from "../../storage/reviews";
import "./ReviewList.css";

const ReviewList: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [genre, setGenre] = useState<string>("all");

  useEffect(() => {
    setReviews(getAllReviews());
  }, []);

  const genres = useMemo(() => {
    const s = new Set<string>();
    reviews.forEach((r) => (r.filmGenres ?? []).forEach((g) => s.add(g)));
    return Array.from(s).sort();
  }, [reviews]);

  const filtered = useMemo(() => {
    if (genre === "all") return reviews;
    return reviews.filter((r) => r.filmGenres?.includes(genre));
  }, [reviews, genre]);

  return (
    <Layout>
      <div className="review-list">
        <div className="genre-filter-bar">
          <GenreDropdown
            genres={genres}
            value={genre}
            onChange={setGenre}
            placeholder="Filter by genre"
          />
        </div>

        <div className="reviews-scroll">
          {filtered.length === 0 ? (
            <p className="reviews-empty">Your reviews will appear here…</p>
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
        </div>
      </div>
    </Layout>
  );
};

export default ReviewList;
