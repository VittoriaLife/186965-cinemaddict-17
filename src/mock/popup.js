import { generateFilmTitle, generateFilmPoster } from './film.js';
// import { commentsId } from './comment.js';

// const compareItems = (first, second) => {
//   let compareArray = new Map().set(first, second);
// };

// const filmsId = [1, 2, 3, 4, 5];

export const generatePopup = () => ({
  id: '0',
  comments: [
    // $Comment.id$, $Comment.id$
  ],
  filmInfo: {
    title: generateFilmTitle(),
    alternativeTitle: generateFilmTitle(),
    totalRating: 5.2,
    poster: generateFilmPoster(),
    ageRating: '18+',
    director: 'Tom Ford',
    writers: [
      'Takeshi Kitano'
    ],
    actors: [
      'Morgan Freeman'
    ],
    release: {
      date: '2019-05-11T00:00:00.000Z',
      releaseCountry: 'Finland'
    },
    runtime: 77,
    genre: [
      'Comedy', 'Drama', 'Film-Noir', 'Mystery', 'Triller'
    ],
    description: 'Oscar-winning film, a war drama about two young people, from the creators of timeless classic \'Nu, Pogodi!\' and \'Alice in Wonderland\', with the best fight scenes since Bruce Lee.'
  },
  userDetails: {
    watchList: false,
    alreadyWatched: true,
    watchingDate: '2019-04-12T16:12:32.554Z',
    favorite: false
  }
});
