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

import {
  LOAD_DETAIL_MOVIE,
  SUCCESS_DETAIL_MOVIE,
  LOAD_MOVIE_ERROR,
  EYE_CHANGE,
  LIKE_CHANGE,
  VOTE_CHANGE,
  PROFILE_CHANGED,
  PROFILE_ERROR
} from './constants';

// The initial state of the App
const initialState = fromJS({
  detailsOfFilm: {},
  error: false,
  method: 'put',
  imdbId: '',
  detailsOfUser: fromJS({}),
  backupOfdetailsOfUser: fromJS({})
});

function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DETAIL_MOVIE:
      return state.set('imdbId', action.id).set('loading', true);
    case SUCCESS_DETAIL_MOVIE: {
      const details = action.movieData.responseProfile.length
        ? action.movieData.responseProfile[0]
        : {id: action.movieData.responseFilm.imdbID};

      return state
        .set('method', action.movieData.responseProfile.length ? 'put' : 'post')
        .set('detailsOfFilm', action.movieData.responseFilm)
        .set('loading', false)
        .set('detailsOfUser', fromJS(details))
        .set('backupOfdetailsOfUser', fromJS(details));
    }
    case LOAD_MOVIE_ERROR:
      return state.set('error', action.error).set('loading', false);
    case EYE_CHANGE: {
      return state.set('loading', true).setIn(['detailsOfUser', 'visto'], !state.getIn(['detailsOfUser', 'visto']));
    }
    case LIKE_CHANGE: {
      return state.set('loading', true).setIn(['detailsOfUser', 'piace'], !state.getIn(['detailsOfUser', 'piace']));
    }
    case VOTE_CHANGE:
      return state.setIn(['detailsOfUser', 'voto'], action.value);
    case PROFILE_CHANGED:
      return state
        .set('backupOfdetailsOfUser', fromJS(action.response))
        .set('loading', false)
        .set('error', false)
        .set('method', 'put');
    case PROFILE_ERROR:
      return state.set('detailsOfUser', state.get('backupOfdetailsOfUser'));
    default:
      return state;
  }
}

export default detailsReducer;
