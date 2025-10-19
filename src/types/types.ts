export type Film = {
  id: string;
  title: string;
  release_year: number;
  genres: string[];
  image_url: string;
};

export type Review = {
  id: string;
  filmId: string;
  filmTitle: string;
  filmYear: number;
  filmGenres?: string[];
  reviewText: string;
  image_url: string;
};