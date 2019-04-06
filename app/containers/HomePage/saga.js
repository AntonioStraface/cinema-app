/**
 * Gets the movies from punk api
 */

import {call, put, select, takeLatest} from 'redux-saga/effects';
import request from 'utils/request';

import {moviesLoaded, moviesLoadingError} from './actions';
import {makeSelectSearchText} from './selectors';
import {LOAD_MOVIES} from './constants';
import {SERVERMOVIES, APIKEY} from '../App/constants';

/**
 * punk api beers request/response handler
 */
export function* getMovies() {
  const parameter = yield select(makeSelectSearchText());

  const requestURL = `${SERVERMOVIES}?s=${parameter}&type=movie&apikey=${APIKEY}`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL);
    yield put(moviesLoaded(response, parameter));
  } catch (err) {
    yield put(moviesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getMoviesData() {
  // Watches for LOAD_MOVIES actions and calls getMovies when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_MOVIES, getMovies);
}
