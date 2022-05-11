import { createElement } from '../render.js';
import { humanizeCommentDate } from '../ulit.js';


const createPopupTemplate = (commentItem) => {
  const {author, comment, date, emotion} = commentItem;
  const commentDate = date !== null ? humanizeCommentDate(date) : '';

  return (`<li class="film-details__comment">
  <span class="film-details__comment-emoji">
    <img src="${emotion}" width="55" height="55" alt="emoji-smile">
  </span>
  <div>
    <p class="film-details__comment-text">${comment}</p>
    <p class="film-details__comment-info">
      <span class="film-details__comment-author">${author}</span>
      <span class="film-details__comment-day">${commentDate}</span>
      <button class="film-details__comment-delete">Delete</button>
    </p>
  </div>
</li>`);
};

export default class CommentView {
  constructor(comment) {
    this.comment = comment;
  }

  getTemplate()  {
    return createPopupTemplate(this.comment);
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
