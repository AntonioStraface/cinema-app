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

export {makeDetailsOfFilm, makeSelectId};
