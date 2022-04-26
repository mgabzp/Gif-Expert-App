export const getGifs = async (category) => {
  //traemos url de Postman, le agregamos https:// y quitamos espacios en blanco con +
  //Con encodeURI reemplazamos el query para que esta función se encargue de formatear el string para que quede como una url válida

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=eEMoaYIEesYO0kKep4JOFfOHol4SZaa2`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
