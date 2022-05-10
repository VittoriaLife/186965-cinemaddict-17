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


const films = [
  {
    id: 1,
    filmInfo: {
      title: 'The Dance of Life',
      totalRating: 5.7,
      ageRating: '18+',
    }
  },
  {
    id: 2,

    filmInfo: {
      title: 'Sagebrush Trail',
      totalRating: 5.2,
      ageRating: '8+',
    }
  },
  {
    id: 3,
    filmInfo: {
      title: 'The Man with the Golden Arm',
      totalRating: 5.9,
      ageRating: '1+',
    }
  }

];

const comments = [
  {
    id: 1,
    author: 'Monica',
    comment: 'Interesting setting and a good cast',
    date: '2019-05-11T16:12:32.554Z',
  },
  {
    id: 2,
    author: 'Phoebe',
    comment:  'Booooooooooring',
    date: '2019-05-11T16:12:32.554Z',
  }
  , {
    id: 3,
    author: 'Joey',
    comment:  'Very very old. Meh',
    date: '2019-05-11T16:12:32.554Z',
  }
  , {
    id: 2,
    author: 'Chandler',
    comment: 'Almost two hours? Seriously?',
    date: '2019-05-11T16:12:32.554Z',
  }
];


const filterComments = (commentsArray) => commentsArray.filter((comment) => comment.id === 2);

// const filterComments = comments.filter((comment) => comment.id === 2);

// console.log(filterComments(comments));

