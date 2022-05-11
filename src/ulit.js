import dayjs from 'dayjs';
import duration  from 'dayjs/plugin/duration';


dayjs.extend(duration);

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const humanizeYearRelease = (dateRelease) => dayjs(dateRelease).format('YYYY');
const humanizeDateRelease = (dateRelease) => dayjs(dateRelease).format('D MMMM YYYY');
const humanizeCommentDate = (dateRelease) => dayjs(dateRelease).format('YYYY/MMMM/D');

const setTime = (runTime) => dayjs.duration(runTime, 'minutes');


export { getRandomInteger, humanizeYearRelease, humanizeDateRelease, setTime, humanizeCommentDate };

