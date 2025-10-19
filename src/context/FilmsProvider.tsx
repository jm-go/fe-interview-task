import React, { useEffect, useState } from "react";
import { API_URL } from "../constants";
import type { Film } from "../types/types";
import { FilmsContext } from "./FilmsContext";

export const FilmsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: Film[] = await res.json();
        setFilms(data);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : String(e));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <FilmsContext.Provider value={{ films, loading, error }}>
      {children}
    </FilmsContext.Provider>
  );
};