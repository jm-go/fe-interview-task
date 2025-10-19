import type { Film } from "../types/types";

export function getDirectorName(film: Film): string | undefined {
  const m = film.cast?.find((p) => p.credits?.includes("Director"));
  return m?.name;
}