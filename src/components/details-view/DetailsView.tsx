import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Layout } from "../Layout";
import "./DetailsView.css";

type Item = {
  id: string;
  title: string;
  director?: string;
  year?: number;
  description?: string;
  imageUrl?: string;
};

export const DetailsView: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const item: Item | undefined = state?.item;

  const title = item?.title ?? "";
  const director = item?.director;
  const year = item?.year;
  const imageUrl = item?.imageUrl || "/image-placeholder.png";
  const description =
    item?.description ??
    "No review text yet. You can add or edit this review from the list.";

  const handleDelete = () => {
    const ok = window.confirm("Do you want to delete this review?");
    // TODO: Add delete logic later
    if (ok) navigate("/review-list");;
  };

  return (
    <Layout
      headerProps={{
        isDetailsView: true,
        onDelete: handleDelete,
        title: title,
      }}
    >
      <article className="details">
        <div className="details__top">
          <div className="details__heading">
            <h2 className="details__title">{title}</h2>
            {(director || year) && (
              <div className="details__meta">
                {director && <div>{director}</div>}
                {year && <div>{year}</div>}
              </div>
            )}
          </div>

          <div className="details__thumb">
            <img src={imageUrl} alt={`${title} poster`} />
          </div>
        </div>

        <p className="details__body">{description}</p>
      </article>
    </Layout>
  );
};

export default DetailsView;
