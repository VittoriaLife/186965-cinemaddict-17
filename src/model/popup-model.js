import {generatePopup} from '../mock/popup.js';

export default class FilmPopupModel {
  popup = Array.from({length: 1}, generatePopup);

  getPopups = () => this.popup;
}
