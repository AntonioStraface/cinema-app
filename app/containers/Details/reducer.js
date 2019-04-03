/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import {fromJS} from 'immutable';

import {LOAD_DETAIL_MOVIE, SUCCESS_DETAIL_MOVIE, LOAD_MOVIE_ERROR} from './constants';

// The initial state of the App
const initialState = fromJS({
  detailsOfFilm: {},
  imdbId: '',
  loading: false,
  error: false,
  detailsOfUser: {}
});

function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DETAIL_MOVIE:
      return state.set('imdbId', action.id).set('loading', true);
    case SUCCESS_DETAIL_MOVIE:
      return state.set('detailsOfFilm', action.movieData.responseFilm).set('loading', false).set('detailsOfUser',action.movieData.responseProfile[0]);
    case LOAD_MOVIE_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default detailsReducer;
