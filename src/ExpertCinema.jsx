import { useState } from "react";

import { AddQueryMovies, MovieGrid } from "./components";

export const ExpertCinema = () => {
  const [queryMovies, setQueryMovies] = useState([]);

  const addNewQueryMovies = (newQueryMovies) => {
    if (queryMovies.includes(newQueryMovies)) return;
    setQueryMovies([newQueryMovies, ...queryMovies]);
  };

  return (
    <>
      <h1>Expert Cinema</h1>

      <AddQueryMovies newQueryMovies={addNewQueryMovies} />

      {queryMovies.map((queryMovie) => (
        <MovieGrid key={queryMovie} queryMovies={queryMovie} />
      ))}
    </>
  );
};
