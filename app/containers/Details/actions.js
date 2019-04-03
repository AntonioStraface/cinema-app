/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {LOAD_DETAIL_MOVIE, SUCCESS_DETAIL_MOVIE, LOAD_MOVIE_ERROR} from './constants';

/**
 * load details of film
 *
 * @return {object}    An action object with a type of LOAD_DETAIL_MOVIE
 */

export function loadDetailMovie(id) {
  return {
    type: LOAD_DETAIL_MOVIE,
    id
  };
}

/**
 * Dispatched when loading the movie fails
 *
 * @param  {object} movieData  The detail of film and detail of user
 *
 * @return {object}       An action object with a type of SUCCESS_DETAIL_MOVIE
 */
export function loadedDetailMovie(movieData) {
  return {
    type: SUCCESS_DETAIL_MOVIE,
    movieData
  };
}

/**
 * Dispatched when loading the movie fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_MOVIE_ERROR passing the error
 */
export function movieLoadingError(error) {
  return {
    type: LOAD_MOVIE_ERROR,
    error
  };
}
