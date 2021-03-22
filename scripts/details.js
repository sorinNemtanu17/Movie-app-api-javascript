//debugger;
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

  // console.warn(
  //   'The query parameter you tried to get: "%s" is not available in the URL.',
  //   name
  // );
  // return undefined;
}
const getId = new URL(location);

const url = `https://movies-app-siit.herokuapp.com/movies/${getId.searchParams.get(
  'movieId'
)}`;

function movieDetail() {
  const prom = fetch(url)
    .then((res) => res.json())
    .then(createHtml);

  function createHtml(data) {
    const title = document.querySelector('[data-movie-title]');
    title.textContent = data.Title;

    const image = document.querySelector('[data-movie-poster]');
    image.setAttribute('src', data.Poster);

    const plot = document.querySelector('[data-movie-plot]');
    plot.textContent = data.Plot;

    const rating = document.querySelector('[data-movie-rating]');
    rating.textContent = data.imdbRating;

    const span = document.createElement('span');
    rating.appendChild(span);
    const stars = '\u2606';
    span.textContent = stars.repeat(10);
  }
  function starGen() {
    const totalStar = 10;
    const procentage = (imdbRating / totalStar) * 100;
  }
}
movieDetail();
