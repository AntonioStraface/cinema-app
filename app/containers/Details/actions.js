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

import {
  LOAD_DETAIL_MOVIE,
  SUCCESS_DETAIL_MOVIE,
  LOAD_MOVIE_ERROR,
  LIKE_CHANGE,
  VOTE_CHANGE,
  EYE_CHANGE,
  PROFILE_CHANGED,
  PROFILE_ERROR
} from './constants';

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
 * Dispatched when click like
 *
 *
 * @return {object}       An action object with a type of LIKE_CHANGE
 */
export function changeLike() {
  return {
    type: LIKE_CHANGE
  };
}

/**
 * Dispatched when click Stars
 *
 * @param  {int} value The new vote for a movie
 *
 * @return {object}       An action object with a type of VOTE_CHANGE
 */
export function changeVote(value) {
  return {
    type: VOTE_CHANGE,
    value
  };
}

/**
 * Dispatched when click eye
 *
 * @return {object}       An action object with a type of EYE_CHANGE
 */
export function changeWatched() {
  return {
    type: EYE_CHANGE
  };
}

/**
 * Dispatched when changed was finished
 *
 * @return {object}       An action object with a type of PROFILE_CHANGED and full response of object profile
 */
export function profileChanged(response) {
  return {
    type: PROFILE_CHANGED,
    response
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

/**
 * Dispatched when change the profile fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of PROFILE_ERROR passing the error
 */
export function profileError(error) {
  return {
    type: PROFILE_ERROR,
    error
  };
}
