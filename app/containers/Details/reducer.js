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
import {fromJS,Map} from 'immutable';

import {LOAD_DETAIL_MOVIE, SUCCESS_DETAIL_MOVIE, LOAD_MOVIE_ERROR, EYE_CHANGE,LIKE_CHANGE ,PROFILE_CHANGED} from './constants';

// The initial state of the App
const initialState = fromJS({
  detailsOfFilm: {},
  imdbId: '',
  loading: false,
  error: false,
  detailsOfUser : {
    id: "",
    visto: false,
    voto: 0
  }
});

function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DETAIL_MOVIE:
      return state.set('imdbId', action.id).set('loading', true);
    case SUCCESS_DETAIL_MOVIE:
      return state
        .set('detailsOfFilm', action.movieData.responseFilm)
        .set('loading', false)
        .set('detailsOfUser', fromJS(action.movieData.responseProfile[0]));
    case LOAD_MOVIE_ERROR:
      return state.set('error', action.error).set('loading', false);
    case EYE_CHANGE:
       return state.setIn(['detailsOfUser','visto'],false);
    case PROFILE_CHANGED:
      return state
        .set('detailsOfUser', action.response)
        .set('loading', false)
        .set('error', false);
    default:
      return state;
  }
}

export default detailsReducer;
