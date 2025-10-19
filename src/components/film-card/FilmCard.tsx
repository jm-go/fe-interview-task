import React from "react";
import { Link } from "react-router-dom";
import "./FilmCard.css";

type Props = {
  id: string;
  title: string;
  director?: string;
  year?: number;
  description?: string;
  imageUrl?: string;
  to?: string;
};

export const FilmCard: React.FC<Props> = ({
  id,
  title,
  director,
  year,
  description,
  imageUrl,
  to = `/reviews/${id}`,
}) => {
  const displayImage = imageUrl || "/image-placeholder.png";

  return (
    <article className="film-card">
      <div className="film-card__top">
        <div className="film-card__heading">
          <h3 className="film-card__title">{title}</h3>
          {(director || year) && (
            <div className="film-card__meta">
              {director && <div>{director}</div>}
              {year && <div>{year}</div>}
            </div>
          )}
        </div>

        <div className="film-card__thumb">
          <img src={displayImage} alt={`${title} poster`} />
        </div>
      </div>

      {description && (
        <p className="film-card__description">
          {description.length > 200
            ? description.slice(0, 200) + "..."
            : description}
        </p>
      )}

      <Link className="film-card__more" to={to}>
        Read more
      </Link>

      <hr className="film-card__divider" />
    </article>
  );
};