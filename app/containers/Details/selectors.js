/**
 * Homepage selectors
 */

import {createSelector} from 'reselect';
import { fromJS } from 'immutable';

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
    (detailState) =>   detailState.getIn(['detailsOfUser']) ? detailState.getIn(['detailsOfUser']).toJS() : fromJS({})
  );


  const makeMethod = () =>
  createSelector(
    selectDetails,
    (detailState) =>   detailState.get('method')
  );  

export {makeDetailsOfFilm, makeSelectId, makeDetailsOfUser, makeMethod};
