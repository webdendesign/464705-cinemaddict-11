import { createTitleUserTemplate } from './components/title-user';
import { createMenuTemplate } from './components/menu';
import { createFilterTemplate } from './components/filter';
import { createFilmsTemplate } from './components/fimls';
import { createCardFilmTemplate } from './components/card-film';
import { createLoadMoreButtonTemplate } from './components/load-button';
import { createCardFilmExtraTemplate } from './components/film-extra';
import { createAmountFilmTemplate } from './components/amount-film';
// import {createFilmDetailsTemplate} from './components/film-details';

const TASK_COUNT = 5;
const AMOUNT_FILM = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, createTitleUserTemplate(), `beforeend`);

const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, createMenuTemplate(), `afterBegin`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createFilmsTemplate(), `beforeend`);

const filmsElement = siteMainElement.querySelector(`.films`);
const filmsListElement = filmsElement.querySelector(`.films-list`);
const filmsListContainerElement = filmsListElement.querySelector(`.films-list__container`);
for (let i = 0; i < TASK_COUNT; i++) {
  render(filmsListContainerElement, createCardFilmTemplate(), `beforeend`);
}
render(filmsListElement, createLoadMoreButtonTemplate(), `beforeend`);

for (let i = 0; i < AMOUNT_FILM; i++) {
  render(filmsElement, createCardFilmExtraTemplate(), `beforeend`);
}

const siteFooterElement = document.querySelector(`.footer`);
const footerStatisticsElement = siteFooterElement.querySelector(`.footer__statistics`);
render(footerStatisticsElement, createAmountFilmTemplate(), `beforeend`);

// render(siteFooterElement, createFilmDetailsTemplate(), `afterend`);
