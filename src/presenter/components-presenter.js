import ProfileRankView from '../view/user-profile-view.js';
import FilmsNavigationView from '../view/main-navigation-view.js';
import FiltersView from '../view/filters-view.js';
import FilmListView from '../view/films-list-view.js';
import FilmCardView from '../view/film-card-view.js';
import BtnShowMoreView from '../view/button-show-more-view.js';
import FilmListTopRatedView from '../view/films-list-top-rated-view.js';
import FilmListMostCommentedView from '../view/films-list-most-commented-view.js';
import StatisticView from '../view/footer-statistics-view.js';
import { render } from '../render.js';


const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterStatisticElement = document.querySelector('.footer__statistics');

export default class ComponentsPresenter {

  initHeader = () => {
    render(new ProfileRankView(), siteHeaderElement);
  };

  initMainBlock = () => {
    render(new FilmsNavigationView(), siteMainElement);
    render(new FiltersView(), siteMainElement);
    render(new FilmListView(), siteMainElement);

    for(let i = 0; i < 5; i++) {
      render(new FilmCardView(), siteMainElement.querySelector('.films-list__container'));
    }

    render(new BtnShowMoreView(), siteMainElement.querySelector('.films-list'));
    render(new FilmListTopRatedView(), siteMainElement.querySelector('.films'));
    render(new FilmListMostCommentedView(), siteMainElement.querySelector('.films'));

    for(let i = 0; i < 2; i++) {
      render(new FilmCardView(), siteMainElement.querySelector('.films-list--extra .films-list__container'));
    }

    for(let i = 0; i < 2; i++) {
      render(new FilmCardView(), siteMainElement.querySelector('.films-list--extra:last-child .films-list__container'));
    }

  };

  initFooterStatistic = () => {
    render(new StatisticView(), siteFooterStatisticElement);
  };

}


