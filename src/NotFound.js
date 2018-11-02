import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => (
  <div class="container">
    <h3>We couldn't find what you were looking for :(</h3>
    <Link to="/">Here you can browse the movies</Link>
  </div>
);

export default NotFound;
