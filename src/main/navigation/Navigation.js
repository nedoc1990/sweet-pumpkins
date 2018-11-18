import React, { Component } from "react";
import Selection from "./Selection";
import Slider from "./Slider";
import Button from "./Button";
import "./Navigation.css";

class Navigation extends Component {
  componentDidMount() {
    const genresURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=4edc842e0778ceb6aa5c4bc975d69652&language=en-US`;

    fetch(genresURL)
      .then(response => response.json())
      .then(data => this.props.setGenres(data.genres))
      .catch(error => console.log(error));
  }

  render() {
    const {
      genre,
      genres,
      onGenreChange,
      onChange,
      year,
      rating,
      runtime
    } = this.props;

    return (
      <section className="navigation">
        <Selection
          genre={genre}
          genres={genres}
          onGenreChange={onGenreChange}
        />

        <Slider data={year} onChange={onChange} />
        <Slider data={rating} onChange={onChange} />
        <Slider data={runtime} onChange={onChange} />

        <Button onClick={this.props.onSearchButtonClick}>Search</Button>
      </section>
    );
  }
}

export default Navigation;
