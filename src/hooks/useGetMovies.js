import { useState, useEffect } from "react";

import { getMoviesAxios } from "../helpers";

export const useGetMovies = (queryMovies) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getNewMovies = async () => {
    const newMovies = await getMoviesAxios(queryMovies);
    setMovies(newMovies);
    setIsLoading(false);
  };

  useEffect(() => {
    getNewMovies();
  }, []);

  return {
    movies,
    isLoading,
  };
};
