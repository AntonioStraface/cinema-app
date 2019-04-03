/**
 * Gets the movies from punk api
 */

import {call, put, select, takeLatest} from 'redux-saga/effects';
import request from 'utils/request';

import {loadedDetailMovie, movieLoadingError} from './actions';
import {makeSelectId} from './selectors';
import {LOAD_DETAIL_MOVIE} from './constants';

/**
 * omdb api request/response handler
 */
export function* getMovieDetails() {
  const parameter = yield select(makeSelectId());

  const requestFilmURL = `http://www.omdbapi.com/?i=${parameter}&apikey=aaac1593&plot=full`;

  const requestProfileOfUser = `http://localhost:3004/films?id=${parameter}`;


  try {
    // Call our request helper (see 'utils/request')
    const responseFilm = yield call(request, requestFilmURL);
    const responseProfile = yield call(request, requestProfileOfUser);
    
    yield put(loadedDetailMovie({responseFilm,responseProfile}, parameter));
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
