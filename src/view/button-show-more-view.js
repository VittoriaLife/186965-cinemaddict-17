import { createElement } from '../render.js';

const createBtnShowMoreTemplate = () => '<button class="films-list__show-more">Show more</button>';

export default class BtnShowMoreView {
  getTemplate()  {
    return createBtnShowMoreTemplate();
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
