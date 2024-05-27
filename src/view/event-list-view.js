import { createEventListTemplate } from '../templates/event-list-template.js';
import AbstractView from '../framework/view/abstract-view.js';

export default class EventListView extends AbstractView{
  get template() {
    return createEventListTemplate();
  }
}
