import noImage from "../assets/no_image.jpg";

export const getMoviesFetch = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=es-AR&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzRkYWFiZDQ1YmYwZTI1Nzc1MjZjOTkxN2Q4ZjEwZSIsInN1YiI6IjYwMzk1MWQ2YmVmZDkxMDAyYTI1MmNlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VP_SZWaroYyV0qESzVHuNQ9BiFCfbn4T834fQKkbumw",
    },
  };
  const resp = await fetch(url, options);
  const { results } = await resp.json();
  const movies = results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    original_title: movie.original_title,
    overview: movie.overview,
    poster_path: movie.poster_path ? "https://image.tmdb.org/t/p/w500" + movie.poster_path : noImage,
  }));
  return movies;
};
