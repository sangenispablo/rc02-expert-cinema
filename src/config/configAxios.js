import axios from "axios";

export const tmdbAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzRkYWFiZDQ1YmYwZTI1Nzc1MjZjOTkxN2Q4ZjEwZSIsInN1YiI6IjYwMzk1MWQ2YmVmZDkxMDAyYTI1MmNlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VP_SZWaroYyV0qESzVHuNQ9BiFCfbn4T834fQKkbumw",
  },
});
