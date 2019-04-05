/**
 * Gets the movies from punk api
 */

import {call, put, select, takeLatest} from 'redux-saga/effects';
import request from 'utils/request';

import {loadedDetailMovie, movieLoadingError, profileChanged} from './actions';
import {makeSelectId, makeDetailsOfUser, makeMethod} from './selectors';
import {LOAD_DETAIL_MOVIE, EYE_CHANGE, LIKE_CHANGE, VOTE_CHANGE} from './constants';

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

export function* changeProfile() {
  const detailsProfile = yield select(makeDetailsOfUser());
  const method = yield select(makeMethod());
  const parameter = yield select(makeSelectId())

  const requestProfileOfUser = method === 'put' ? `http://localhost:3004/films/${parameter}` : `http://localhost:3004/films`;

  try {
    // Call our request helper (see 'utils/request')
    const responseProfile = yield call(request, requestProfileOfUser, {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(detailsProfile)
    });
    yield put(profileChanged(responseProfile));
  } catch (err) {
    console.log(err);
    // yield put(movieLoadingError(err)); todo revert if there is an error
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
  yield takeLatest(EYE_CHANGE, changeProfile);

  // Watches for LIKE_CHANGE actions and calls changeWatched when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  yield takeLatest(LIKE_CHANGE, changeProfile);

  // Watches for VOTE_CHANGE actions and calls changeWatched when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It will be cancelled automatically on component unmount
  yield takeLatest(VOTE_CHANGE, changeProfile);
}
