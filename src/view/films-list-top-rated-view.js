import { createElement } from '../render.js';

const createFilmListTopRatedTemplate = () => `
<section class="films films-list--extra">
<section class="films-list">
<h2 class="films-list__title">Top rated</h2>

  <div class="films-list__container"></div>
</section>
</section>`;

export default class FilmListTopRatedView {
  getTemplate()  {
    return createFilmListTopRatedTemplate();
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
