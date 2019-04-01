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

import {OPEN_SEARCH, CLOSE_SEARCH, LOAD_MOVIES, LOAD_MOVIES_ERROR, LOAD_MOVIES_SUCCESS} from './constants';

/**
 * clicked button lens on form
 *
 * @return {object}    An action object with a type of OPEN_SEARCH
 */

export function openSearch() {
  return {
    type: OPEN_SEARCH
  };
}

/**
 * clicked button close on form
 *
 * @return {object}   An action object with a type of CLOSE_SEARCH
 */

export function closeSearch() {
  return {
    type: CLOSE_SEARCH
  };
}

/**
 * clicked button on form
 *
 * @param  {string}    Text written on search form by user
 *
 * @return {object}    An action object with a type of LOAD_MOVIES
 */

export function loadMovies(text) {
  return {
    text,
    type: LOAD_MOVIES
  };
}

/**
 * Dispatched when the movies are loaded by the request saga
 *
 * @param  {array} movies The movies Matched with movie name
 * @param  {string} movieText The written movie name
 *
 * @return {object}      An action object with a type of LOAD_BEERS_SUCCESS passing the beers
 */
export function moviesLoaded(movies, movieText) {
  return {
    type: LOAD_MOVIES_SUCCESS,
    movies,
    movieText
  };
}

/**
 * Dispatched when loading the movies fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_MOVIES_ERROR passing the error
 */
export function moviesLoadingError(error) {
  return {
    type: LOAD_MOVIES_ERROR,
    error
  };
}
