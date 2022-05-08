import ComponentsPresenter from './presenter/components-presenter.js';
import FilmCardModel from './model/film-card-model.js';
import FilmPopupModel from './model/popup-model.js';
import CommentModel from './model/comment-model.js';

const componentsPresenter = new ComponentsPresenter();
const filmModel = new FilmCardModel();
const popupModel = new FilmPopupModel();
const commentModel = new CommentModel();

componentsPresenter.initHeader();
componentsPresenter.initMainBlock(filmModel);
componentsPresenter.initFooterStatistic();
componentsPresenter.initPopupBlock(popupModel, commentModel);


