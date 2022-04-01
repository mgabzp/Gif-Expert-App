import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  // const handleAdd = () => {
  //   // setCategories(categories.push("Hunter X")); //esto no funciona ya que se esta modificando el estado inicial del arreglo.
  //   // setCategories([...categories, "Hunter X"]);
  //   //otra opcion seria con un callback
  // setCategories((cats) => [...cats, "Hunter X"]);
  //   //aqui llamamos al arreglo, luego modificamos el mismo agregando otro objeto.
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {
          //esto es una expresion de js
          categories.map((category) => (
            //map recibe 2 arg, 1ero: elemento del arreglo, 2do: indice.
            <GifGrid key={category} category={category} /> //el map transforma c/valor del array
          ))
        }
      </ol>
    </>
  );
};

//Importante, no usar como key de c/elemento, su índice, ya que es muy volatil.
