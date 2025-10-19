import type { Review } from "../types/types";

const STORAGE_KEY = "film-reviews";

/**
 * Reads all reviews from localStorage and parses them.
 */
function read(): Review[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Review[]) : [];
  } catch {
    return [];
  }
}

/**
 * Writes the full list of reviews back to localStorage as JSON.
 */
function write(list: Review[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export type ReviewInput = Omit<Review, "id">;

/**
 * Retrieves the full list of saved reviews.
 */
export function getAllReviews(): Review[] {
  return read();
}

/**
 * Finds a single review by its unique ID.
 */
export function getReview(id: string): Review | undefined {
  return read().find(r => r.id === id);
}

/**
 * Adds a new review to storage.
 * Automatically generates a unique ID from filmId + timestamp.
 * Returns the newly created review object.
 */
export function addReview(r: Omit<Review, "id">): Review {
  const list = read();
  const id = `${r.filmId}-${Date.now()}`;
  const created: Review = { ...r, id };
  write([created, ...list]);
  return created;
}

/**
 * Deletes a review from storage by its ID.
 */
export function deleteReview(id: string): void {
  const list = read().filter(r => r.id !== id);
  write(list);
}