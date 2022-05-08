import { createElement } from '../render.js';
import { humanizeYearRelease, setTime } from '../ulit.js';

const createFilmCardTemplate = (film) => {
  const { title, poster, runtime, genre, description } = film.filmInfo;
  const date = film.filmInfo.release.date;

  const releaseYear = date !== null ? humanizeYearRelease(date) : '';
  const filmTime = setTime(runtime);

  return (
    `<article class="film-card">
    <a class="film-card__link">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">8.3</p>
  <p class="film-card__info">
    <span class="film-card__year">${releaseYear}</span>
    <span class="film-card__duration">${filmTime.$d.hours}h ${filmTime.$d.minutes}m</span>
    <span class="film-card__genre">${genre}</span>
  </p>
  <img src="${poster}" alt="" class="film-card__poster">
  <p class="film-card__description">${description}</p>
  <span class="film-card__comments">5 comments</span>
</a>
<div class="film-card__controls">
  <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
  <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
  <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
</div>
</article>
`);
};


export default class FilmCardView {
  constructor(film) {
    this.film = film;
  }

  getTemplate()  {
    return createFilmCardTemplate(this.film);
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}


