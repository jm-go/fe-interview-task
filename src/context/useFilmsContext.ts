import { useContext } from "react";
import { FilmsContext } from "../context/FilmsContext";

export function useFilmsContext() {
  const ctx = useContext(FilmsContext);
  if (!ctx) throw new Error("Error when using FilmsContext");
  return ctx;
}