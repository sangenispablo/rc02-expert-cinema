import { PropTypes } from "prop-types";

import { useGetMovies } from "../hooks";

import { MovieItem } from "./MovieItem";

export const MovieGrid = ({ queryMovies }) => {

  const { movies, isLoading } = useGetMovies(queryMovies);
  
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   getMoviesFetch(queryMovies).then((movies) => setMovies(movies));
  // }, [queryMovies]);

  return (
    <>
      <h3>Result for: {queryMovies}</h3>
      {
        isLoading && (<h2>Loading...</h2>)
      }
      <div className="card-grid">
        {movies.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};

MovieGrid.propTypes = {
  queryMovies: PropTypes.string.isRequired,
};
