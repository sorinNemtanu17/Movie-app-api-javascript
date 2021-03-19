function getUrlParam(name) {
  //"?altceva=ceva&movieId=6018075fa1c19b0022112a01&test=8"
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
function movieDetail() {
  fetch('https://movies-app-siit.herokuapp.com/movies/6018075fa1c19b0022112a02')
    .then((res) => res.json())
    .then(createHtml);

  function createHtml() {
    const title = document.querySelector('h1');
    const image = document.querySelector('img');
    const plot = document.querySelector([data - attribute]);
  }
}
