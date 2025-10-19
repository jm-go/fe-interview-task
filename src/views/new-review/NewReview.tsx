import React from "react";
import { useNavigate } from "react-router-dom";
import { useFilmsContext } from "../../context/useFilmsContext";
import { addReview } from "../../storage/reviews";
import { Header } from "../../components/header/Header";
import { ReviewForm } from "../../components/review-form/ReviewForm";
import type { Review } from "../../types/types";
import { getDirectorName } from "../../utils/utils";

const NewReview: React.FC = () => {
  const { films } = useFilmsContext();
  const navigate = useNavigate();

  /**
   * Handles saving a new review:
   * - Finds the selected film from context (for details)
   * - Enriches the review with director, genres, year, and image
   * - Persists the result in localStorage
   * - Navigates back to the review list view
   */
  const handleSave = (r: Omit<Review, "id">) => {
    const film = films.find((f) => f.id === r.filmId);

    const enrichedReview: Omit<Review, "id"> = {
      ...r,
      filmDirector: film ? getDirectorName(film) : undefined,
      filmGenres: film?.genres ?? [],
      filmYear: film?.release_year ?? r.filmYear,
      image_url: film?.image_url ?? "",
    };

    addReview(enrichedReview);
    navigate('/review-list');
  };

  return (
    <>
      <Header isAddView />
      <ReviewForm films={films} onSave={handleSave} />
    </>
  );
};

export default NewReview;