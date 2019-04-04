/**
 * Homepage selectors
 */

import {createSelector} from 'reselect';

const selectDetails = (state) => state.get('details');

const makeSelectId = () =>
  createSelector(
    selectDetails,
    (detailState) => detailState.get('imdbId')
  );

const makeDetailsOfFilm = () =>
  createSelector(
    selectDetails,
    (detailState) => detailState.get('detailsOfFilm')
  );

const makeDetailsOfUser = () =>
  createSelector(
    selectDetails,
    (detailState) => detailState.get('detailsOfUser')
  );

const makeWatchedSelector = () =>
  createSelector(
    makeDetailsOfUser,
    (detailState) => detailState.get('visto')
  );

const makeLikeSelector = () =>
  createSelector(
    makeDetailsOfUser,
    (detailState) => detailState.get('preferito')
  );

const makeVotesSelector = () =>
  createSelector(
    makeDetailsOfUser,
    (detailState) => detailState.get('voti')
  );

export {makeDetailsOfFilm, makeSelectId, makeDetailsOfUser, makeWatchedSelector, makeVotesSelector, makeLikeSelector};
