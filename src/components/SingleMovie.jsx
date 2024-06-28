import React from "react";
import { Card } from "react-bootstrap";

const SingleMovie = ({ movie }) => (
  <div className="movie-container">
    <Card>
      <Card.Img src={movie.Poster} alt={movie.Title} />
    </Card>
    <div className="movie-info">
      <Card.Title>{movie.Title}</Card.Title>
    </div>
  </div>
);

export default SingleMovie;
