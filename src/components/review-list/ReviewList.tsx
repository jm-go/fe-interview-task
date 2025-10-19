import React from "react";
import { Layout } from "../Layout";
import { FilmCard } from "../film-card/FilmCard";

// Placeholder items, to be deleted when integrating with API
const items = [
  {
    id: "1",
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    description:
      "Some review text lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis bibendum purus, ut...",
  },
  {
    id: "2",
    title: "Taxi Driver",
    director: "Martin Scorsese",
    year: 1976,
    description:
      "Some review text lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis bibendum purus, ut... Some review text lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis bibendum purus, ut...Some review text lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis bibendum purus, ut... Some review text lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis bibendum purus, ut... Some review text lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis bibendum purus, ut...vSome review text lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis bibendum purus, ut...",
  },
];

const ReviewList: React.FC = () => {
  const hasReviews = items.length > 0;

  return (
    <Layout>
      {hasReviews ? (
        items.map((item) => <FilmCard key={item.id} {...item} />)
      ) : (
        <div
          style={{
            textAlign: "center",
            marginTop: "4rem",
            color: "#6b7280",
            fontSize: "1rem",
          }}
        >
          <p>Your reviews will appear here...</p>
          <span role="img" aria-label="film">
            🎬
          </span>
        </div>
      )}
    </Layout>
  );
};

export default ReviewList;
