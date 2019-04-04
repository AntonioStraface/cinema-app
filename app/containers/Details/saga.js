/**
 * Gets the movies from punk api
 */

import {call, put, select, takeLatest} from 'redux-saga/effects';
import request from 'utils/request';

import {loadedDetailMovie, movieLoadingError, watchChanged} from './actions';
import {makeSelectId, makeWatchedSelector, makeDetailsOfUser} from './selectors';
import {LOAD_DETAIL_MOVIE, EYE_CHANGE} from './constants';

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

    yield put(loadedDetailMovie({responseFilm, responseProfile}, parameter));
  } catch (err) {
    yield put(movieLoadingError(err));
  }
}

export function* changeWatched() {
  const detailsProfile = yield select(makeDetailsOfUser());
  const parameter = yield select(makeSelectId());

  const requestProfileOfUser = `http://localhost:3004/films/${parameter}`;

  try {
    // Call our request helper (see 'utils/request')
    const responseWatched = yield call(request, requestProfileOfUser, {
      method: 'put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(detailsProfile)
    });
    yield put(watchChanged(responseWatched));
  } catch (err) {
    yield put(movieLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* listeners() {
  // Watches for LOAD_MOVIES actions and calls getMovies when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_DETAIL_MOVIE, getMovieDetails);

  // Watches for EYE_CHANGE actions and calls changeWatched when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  yield takeLatest(EYE_CHANGE, changeWatched);
}
