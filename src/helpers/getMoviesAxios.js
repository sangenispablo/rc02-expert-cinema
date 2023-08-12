import noImage from "../assets/no_image.jpg";

import { tmdbAxios } from "../config/configAxios";

export const getMoviesAxios = async (query) => {

  const url = `/search/movie?query=${query}&include_adult=false&language=es-AR&page=1`;
  
  const response = await tmdbAxios.get(url);
  const data = response.data.results;
  const movies = data.map((movie) => ({
    id: movie.id,
    title: movie.title,
    original_title: movie.original_title,
    overview: movie.overview,
    poster_path: movie.poster_path ? "https://image.tmdb.org/t/p/w500" + movie.poster_path : noImage,
  }));
  return movies;
};
