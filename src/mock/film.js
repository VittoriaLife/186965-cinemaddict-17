import { getRandomInteger } from '../ulit.js';
import {  generateFilmsId } from '../mock/popup.js';

const filmsTitles = ['The Dance of Life', 'Sagebrush Trail', 'The Man with the Golden Arm', 'Santa Claus Conquers the Martians', 'Popeye the Sailor Meets Sindbad the Sailor'];
const filmsPosters = [
  '/images/posters/made-for-each-other.png',
  '/images/posters/popeye-meets-sinbad.png',
  '/images/posters/sagebrush-trail.jpg',
  '/images/posters/santa-claus-conquers-the-martians.jpg',
  '/images/posters/the-dance-of-life.jpg',
  '/images/posters/the-great-flamarion.jpg',
  '/images/posters/the-man-with-the-golden-arm.jpg',

];

const generateFilmTitle = () => {
  const randomNumber = getRandomInteger(0, filmsTitles.length - 1);

  return filmsTitles[randomNumber];
};


const generateFilmPoster = () => {
  const randomNumber = getRandomInteger(0, filmsPosters.length - 1);

  return filmsPosters[randomNumber];
};


export const generateFilmCard = () => ({
  filmId: generateFilmsId(),
  filmInfo: {
    title: generateFilmTitle(),
    totalRating: 5.3,
    poster: generateFilmPoster(),
    release: {
      date: '2019-05-11T00:00:00.000Z',
    },
    runtime: 77,
    genre: [
      'Comedy'
    ],
    description: 'Oscar-winning film, a war drama about two young people, from the creators of timeless classic \'Nu, Pogodi!\' and \'Alice in Wonderland\', with the best fight scenes since Bruce Lee.'
  },
  userDetails: {
    watchList: false,
    alreadyWatched: true,
    favorite: false
  }
});

export { filmsTitles,  filmsPosters, generateFilmTitle, generateFilmPoster};
