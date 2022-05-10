
import { getRandomInteger } from '../ulit.js';

const authorsNames = ['Monica', 'Phoebe', 'Rachel', 'Chandler', 'Joey', 'Ross'];
const commentsTexts = ['Interesting setting and a good cast', 'Booooooooooring', 'Very very old. Meh', 'Almost two hours? Seriously?', 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.'];
const emotions = [
  '/images/emoji/angry.png',
  '/images/emoji/puke.png',
  '/images/emoji/sleeping.png',
  '/images/emoji/smile.png',
];

const commentsId = [1, 2, 3, 4, 5];

const generateAuthorName = () => {
  const randomNumber = getRandomInteger(0, authorsNames.length - 1);

  return authorsNames[randomNumber];
};

const generateCommentText = () => {
  const randomNumber = getRandomInteger(0, commentsTexts.length - 1);

  return commentsTexts[randomNumber];
};

const generateEmotions = () => {
  const randomNumber = getRandomInteger(0, emotions.length - 1);

  return emotions[randomNumber];
};

const generateCommentsId = () => {
  const randomNumber = getRandomInteger(0, commentsId.length - 1);

  return commentsId[randomNumber];
};


export const generateComment = () => (
  {
    id: generateCommentsId(),
    author: generateAuthorName(),
    comment:  generateCommentText(),
    date: '2019-05-11T16:12:32.554Z',
    emotion:  generateEmotions()
  }
);


export { commentsId, generateCommentsId };
