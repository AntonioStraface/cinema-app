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
    (detailState) => detailState.getIn(['detailsOfUser']).toJS()
  );

export {makeDetailsOfFilm, makeSelectId, makeDetailsOfUser};
