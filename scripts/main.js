// https://movies-app-siit.herokuapp.com/movies
function movies() {
  const url = 'https://movies-app-siit.herokuapp.com/movies?take=9';

  const moviesContainer = document.querySelector('main');
  moviesContainer.classList.add('movies-container');

  const loadingState = document.createElement('h1');
  loadingState.innerText = 'Loading...';
  const isLoading = setTimeout(() => {
    loadingState.innerText = 'Wait for it...';
  }, 1000);

  moviesContainer.appendChild(loadingState);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      moviesContainer.removeChild(loadingState);

      for (const movie of data.results) {
        renderCard(movie);
      }
    });

  function renderCard(movie) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    const movieImg = document.createElement('img');
    movieImg.src = movie.Poster;

    const movieTitle = document.createElement('h2');
    movieTitle.textContent = movie.Title;

    const heartIcon = document.createElement('i');
    heartIcon.classList.add('fas');
    heartIcon.classList.add('fa-heart');

    const wrapper = document.createElement('a');

    wrapper.appendChild(movieImg);
    wrapper.appendChild(movieTitle);
    wrapper.appendChild(heartIcon);
    // wrapper.setAttribute('href', '#');
    wrapper.href = `movieDetails.html?movieId=${movie._id}`;
    cardContainer.appendChild(wrapper);

    moviesContainer.appendChild(cardContainer);
  }
}

movies();
