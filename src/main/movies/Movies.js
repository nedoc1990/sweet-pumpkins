import React from "react";
import MovieListItem from "./MovieListItem";
import Button from "../navigation/Button";
import "./Movies.css";

const Movies = ({ movies, page, onPageDecrease, onPageIncrease }) => (
  <section>
    <ul className="movies">
      {movies.map(movie => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </ul>
    <div className="pagination">
      <Button onClick={onPageDecrease}>Previous</Button>
      <span>{`Page ${page}`}</span>
      <Button onClick={onPageIncrease}>Next</Button>
    </div>
  </section>
);

export default Movies;
