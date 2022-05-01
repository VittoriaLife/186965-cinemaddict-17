import { createElement } from '../render.js';

const createFilmListMostCommentedTemplate = () => `
<section class="films films-list--extra">
<section class="films-list">
<h2 class="films-list__title">Most commented</h2>

  <div class="films-list__container"></div>
</section>
</section>`;

export default class FilmListMostCommentedView {
  getTemplate()  {
    return createFilmListMostCommentedTemplate();
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
