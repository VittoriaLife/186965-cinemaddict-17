import { generateFilmCard } from '../mock/film.js';
import { FILM_CARDS_AMOUNT } from '../presenter/components-presenter.js';

export default class FilmCardModel {
  films = Array.from({length: FILM_CARDS_AMOUNT}, generateFilmCard);

  getFilms = () => this.films;
}
