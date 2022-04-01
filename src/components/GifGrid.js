import React, { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []); //El segundo parametro que se manda en useEffect es un array vacio, para que la funcion dentro se ejecute una sola vez, sea independiente

  const getGifs = async () => {
    //traemos url de Postman, le agregamos https:// y quitamos espacios en blanco con +
    const url =
      "https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=eEMoaYIEesYO0kKep4JOFfOHol4SZaa2";
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    // console.log(gifs);
    setImages(gifs);
  };

  return (
    <div>
      <h3>{category}</h3>

      {images.map((img) => (
        <GifGridItem key={img.id} {...img} />
      ))}
    </div>
  );
};
