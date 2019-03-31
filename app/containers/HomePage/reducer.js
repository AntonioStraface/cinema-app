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
import { fromJS } from 'immutable';

import { OPEN_SEARCH, CLOSE_SEARCH,LOAD_MOVIES, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_ERROR } from './constants';

// The initial state of the App
const initialState = fromJS({
  searchStatus: 'closed',
  listItems: null,
  loading: false,
  error: false
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_SEARCH:
      return state.set('searchStatus', 'opened')
    case CLOSE_SEARCH:
      return state.set('searchStatus', 'closed')
    case LOAD_MOVIES:
      return state
        .set('searchedText', action.text)
        .set('loading', true)
        .set('error', false);
    case LOAD_MOVIES_SUCCESS:
      return state
        .setIn(['listItems'], action.movies.Response == "True" ? action.movies.Search : [])
        .set('loading', false)
        .set('searchedText', action.movieText);
    case LOAD_MOVIES_ERROR:
      return state
        .set('error', action.error)
        .setIn(['listItems'], [])
        .set('loading', false);
    default:
      return state;
  }
}



export default homeReducer;
