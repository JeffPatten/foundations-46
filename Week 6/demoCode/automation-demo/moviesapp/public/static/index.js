const message = document.querySelector("#message");
const moviesListEl = document.querySelector("#movies-list");
let movieIdx = 0;

document
  .querySelector("#add-movie-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    moviesListEl.insertAdjacentHTML(
      "beforeend",
      `
    <li>
      <input type="checkbox" id="movie-${movieIdx}" />
      <label for="movie-${movieIdx}">${formData.get("movieTitle")}</label>
      <button class="delete-btn">Remove</button>
    </li>`
    );

    movieIdx += 1;
    event.target.reset();
  });

moviesListEl.addEventListener("click", (event) => {
  const { target } = event;
  switch (target.tagName) {
    case "BUTTON":
      deleteMovie(event);
      break;
    case "INPUT":
      crossOffMovie(event);
    default:
      return;
  }
});

function deleteMovie(event) {
  const { target } = event;
  const movieListItem = target.parentNode;
  const movieTitle = movieListItem.querySelector("label").innerText.trim();

  revealMessage(`${movieTitle} deleted!`);

  movieListItem.remove();
}

function crossOffMovie(event) {
  const { target } = event;
  const movieTitle = target.parentNode.querySelector("label").innerText.trim();

  let msg;
  if (target.checked) {
    msg = `Watched ${movieTitle}`;
  } else {
    msg = `Added back ${movieTitle}`;
  }

  revealMessage(msg);
}

function revealMessage(msg) {
  message.innerText = msg;
  message.classList.remove("hide");
  setTimeout(() => {
    message.classList.add("hide");
  }, 1000);
}
