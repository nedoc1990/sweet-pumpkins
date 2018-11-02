import React from "react";

const LoadingMovie = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <img src={require("./loading.gif")} alt="loading" />
  </div>
);

export default LoadingMovie;
