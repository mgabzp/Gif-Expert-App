import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn container-card">
      <img src={url} alt={title} className="container-card__img" />
      <p className="container-card__text">{title}</p>
    </div>
  );
};
