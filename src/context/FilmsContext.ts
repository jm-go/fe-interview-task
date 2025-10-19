import { createContext } from "react";
import type { Film } from "../types/types";

export type FilmsContextValue = {
  films: Film[];
  loading: boolean;
  error: string | null;
};

export const FilmsContext = createContext<FilmsContextValue | undefined>(undefined);