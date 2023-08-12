import { PropTypes } from "prop-types";

export const MovieItem = ({ title, poster_path }) => {
  return (
    <div className="card">
      <img src={poster_path} alt={title}/>
      <p>{title}</p>
    </div>
  );
};

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
};
