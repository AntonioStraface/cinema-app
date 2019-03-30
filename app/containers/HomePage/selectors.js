/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectSearchStatus = () => createSelector(
  selectHome,
  (homeState) => homeState.get('searchStatus')
);

export {
  selectHome,
  makeSelectSearchStatus,
};
