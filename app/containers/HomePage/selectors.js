/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectSearchStatus = () => createSelector(
  selectHome,
  (homeState) => homeState.get('searchStatus')
);

const makeSelectSearchText = () => createSelector(
  selectHome,
  (homeState) => homeState.get('searchedText')
);

const makeListOfMovies = () => createSelector(
  selectHome,
  (homeState) => homeState.get('listItems')
);

export {
  selectHome,
  makeSelectSearchStatus,
  makeSelectSearchText,
  makeListOfMovies
};
