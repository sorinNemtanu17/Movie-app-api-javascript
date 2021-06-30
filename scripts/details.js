function getUrlParam(name) {
  //"?altceva=ceva&movieId=601vv8075fa1c19b0022112a01&test=8"
  const search = location.search.substr(1); // substr scoate semnul intrebarii din query string

  //"altceva=ceva&movieId=6018075fa1c19b0022112a01&test=8""
  const keyValuePairs = search.split('&');

  // array de stringuri cheie=valoare
  for (const pair of keyValuePairs) {
    // Array destructuring

    const [key, value] = pair.split('=');

    if (key === name) {
      return value;
    }
  }

  console.warn(
    'The query parameter you tried to get: "%s" is not available in the URL.',
    name
  );
  return undefined;
}
const getId = getUrlParam('movieId');

const url = `https://movies-app-siit.herokuapp.com/movies/${getId}`;

function movieDetail() {
  const prom = fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      createHtml(data);
    });

  function createHtml(data) {
    const image = document.querySelector('[data-movie-poster]');
    image.setAttribute('src', data.Poster);

    const title = document.querySelector('[data-movie-title]');
    title.textContent = data.Title;

    const actors = document.querySelector('[data-movie-actors]');
    actors.textContent = `Actors: ${data.Actors.replace(/,/g, ' | ')}`;

    const plot = document.querySelector('[data-movie-plot]');
    plot.textContent = data.Plot;

    const rating = document.querySelector('[data-movie-rating]');
    const star = '\u2605';
    rating.textContent = `Imdb rating ${data.imdbRating} ${star.repeat(
      Math.round(data.imdbRating)
    )}`;
  }
}
movieDetail();
