import ProfileRankView from '../view/user-profile-view.js';
import FilmsNavigationView from '../view/main-navigation-view.js';
import FiltersView from '../view/filters-view.js';
import FilmListView from '../view/films-list-view.js';
import FilmCardView from '../view/film-card-view.js';
import BtnShowMoreView from '../view/button-show-more-view.js';
import FilmListTopRatedView from '../view/films-list-top-rated-view.js';
import FilmListMostCommentedView from '../view/films-list-most-commented-view.js';
import StatisticView from '../view/footer-statistics-view.js';
import PopupView from '../view/film-popup-view.js';
import { render } from '../render.js';
import CommentView from '../view/comments-view.js';

const FILM_CARDS_AMOUNT = 5;
const FILM_EXTRA_AMOUNT = 2;
const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');
const siteFooterStatisticElement = siteFooterElement.querySelector('.footer__statistics');

export default class ComponentsPresenter {

  initHeader = () => {
    render(new ProfileRankView(), siteHeaderElement);
  };

  initMainBlock = (filmModel) => {
    this.filmModel = filmModel;
    this.filmsList = [...this.filmModel.getFilms()];

    render(new FilmsNavigationView(), siteMainElement);
    render(new FiltersView(), siteMainElement);
    render(new FilmListView(), siteMainElement);

    for(let i = 0; i < this.filmsList.length; i++) {
      render(new FilmCardView(this.filmsList[i]), siteMainElement.querySelector('.films-list__container'));
    }

    render(new BtnShowMoreView(), siteMainElement.querySelector('.films-list'));
    render(new FilmListTopRatedView(), siteMainElement.querySelector('.films'));
    render(new FilmListMostCommentedView(), siteMainElement.querySelector('.films'));

    for(let i = 0; i < FILM_EXTRA_AMOUNT; i++) {
      render(new FilmCardView(this.filmsList[i]), siteMainElement.querySelector('.films-list--extra .films-list__container'));
    }

    for(let i = 0; i < FILM_EXTRA_AMOUNT; i++) {
      render(new FilmCardView(this.filmsList[i]), siteMainElement.querySelector('.films-list--extra:last-child .films-list__container'));
    }

  };

  initFooterStatistic = () => {
    render(new StatisticView(), siteFooterStatisticElement);
  };

  initPopupBlock = (popupModel, commentModel) => {
    this.popupModel = popupModel;
    this.popupsList = [...this.popupModel.getPopups()];
    this.commentModel = commentModel;
    this.commentsList = [...this.commentModel.getComments()];

    for(const popup of this.popupsList) {
      render(new PopupView(popup), siteFooterElement, 'afterend');
    }

    for(const comment of this.commentsList) {
      render(new CommentView(comment), document.querySelector('.film-details__comments-list'));
    }
  };
}

export { FILM_CARDS_AMOUNT, FILM_EXTRA_AMOUNT };

