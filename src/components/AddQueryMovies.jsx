import { useState } from "react";
import { PropTypes } from "prop-types";

export const AddQueryMovies = ({ newQueryMovies }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    newQueryMovies(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search movies..."
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

// Declaro las propTypes
AddQueryMovies.propTypes = {
  newQueryMovies: PropTypes.func.isRequired,
};
