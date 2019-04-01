/**
 * Gets the movies from punk api
 */

import {call, put, select, takeLatest} from 'redux-saga/effects';
import request from 'utils/request';

import {loadedDetailMovie, movieLoadingError} from './actions';
import {makeSelectId} from './selectors';
import {LOAD_DETAIL_MOVIE} from './constants';

/**
 * punk api beers request/response handler
 */
export function* getMovieDetails() {
  const parameter = yield select(makeSelectId());

  const requestURL = `http://www.omdbapi.com/?i=${parameter}&apikey=aaac1593`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL);
    yield put(loadedDetailMovie(response, parameter));
  } catch (err) {
    yield put(movieLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getMoviesData() {
  // Watches for LOAD_MOVIES actions and calls getMovies when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_DETAIL_MOVIE, getMovieDetails);
}
