export type Film = {
  id: string;
  title: string;
  release_year: number;
  genres: string[];
  image_url: string;
  cast: FilmCastMember[];
};

export type Review = {
  id: string;
  filmId: string;
  filmTitle: string;
  filmYear: number;
  filmGenres?: string[];
  reviewText: string;
  image_url: string;
  filmDirector?: string;
};

export type FilmCastMember = {
  id: string;
  name: string;
  credits: string[];
};