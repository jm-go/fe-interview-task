import React, { useMemo, useState } from "react";
import { SearchBar } from "../search-bar/SearchBar";
import type { Film, Review } from "../../types/types";
import "./ReviewForm.css";

type Props = {
  films: Film[];
  onSave: (review: Omit<Review, "id">) => void;
};

export const ReviewForm: React.FC<Props> = ({ films, onSave }) => {
  const [query, setQuery] = useState("");
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  const [text, setText] = useState("");

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return films
      .filter(f => f.title.toLowerCase().includes(q))
      .slice(0, 8);
  }, [query, films]);

  const handleSelect = (film: Film) => {
    setSelectedFilm(film);
    setQuery(film.title);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFilm || !text.trim()) return;
    onSave({
      filmId: selectedFilm.id,
      filmTitle: selectedFilm.title,
      filmYear: selectedFilm.release_year,
      filmGenres: selectedFilm.genres,
      reviewText: text.trim(),
      image_url: selectedFilm.image_url,
    });
  };

  const canSave = !!selectedFilm && text.trim().length > 0;

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <div className="review-form__group">
        <label htmlFor="film" className="review-form__label">Film</label>
        <SearchBar
          placeholder="Search by film title"
          value={query}
          onChange={setQuery}
         disabled={!!selectedFilm}
        />
        {suggestions.length > 0 && !selectedFilm && (
          <ul className="review-form__suggestions">
            {suggestions.map(f => (
              <li
                key={f.id}
                onClick={() => handleSelect(f)}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && handleSelect(f)}
              >
                {f.title} <span className="review-form__year">({f.release_year})</span>
              </li>
            ))}
          </ul>
        )}
        {selectedFilm && (
          <div className="review-form__selected">
            {selectedFilm.title} ({selectedFilm.release_year})
            <button
              type="button"
              className="review-form__clear"
              onClick={() => { setSelectedFilm(null); setQuery(""); }}
            >
              ×
            </button>
          </div>
        )}
      </div>

      <div className="review-form__group">
        <label htmlFor="review-text" className="review-form__label">Review text</label>
        <textarea
          id="review-text"
          className="review-form__textarea"
          placeholder="Your review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={8}
        />
      </div>

      <div className="review-form__actions">
        <button
          className="review-form__save"
          disabled={!canSave}
        >
          SAVE
        </button>
      </div>
    </form>
  );
};