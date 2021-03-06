/**
 * Gets the movies from punk api
 */

import {call, put, select, takeLatest, all} from 'redux-saga/effects';
import request from 'utils/request';

import {loadedDetailMovie, movieLoadingError, profileChanged, profileError} from './actions';
import {makeSelectId, makeDetailsOfUser, makeMethod} from './selectors';
import {LOAD_DETAIL_MOVIE, EYE_CHANGE, LIKE_CHANGE, VOTE_CHANGE} from './constants';
import {SERVERMOVIES, APIKEY, SERVERPROFILE} from '../App/constants';

/**
 * omdb api request/response handler
 */
export function* getMovieDetails() {
  const parameter = yield select(makeSelectId());

  const requestFilmURL = `${SERVERMOVIES}?i=${parameter}&apikey=${APIKEY}&plot=full`;

  const requestProfileOfUser = `${SERVERPROFILE}films?id=${parameter}`;

  try {
    // Call our request helper (see 'utils/request')
    const [responseFilm, responseProfile] = yield all([
      call(request, requestFilmURL),
      call(request, requestProfileOfUser)
    ]);

    yield put(loadedDetailMovie({responseFilm, responseProfile}, parameter));
  } catch (err) {
    yield put(movieLoadingError(err));
  }
}

export function* changeProfile() {
  const detailsProfile = yield select(makeDetailsOfUser());
  const method = yield select(makeMethod());
  const parameter = yield select(makeSelectId());

  const requestProfileOfUser = method === 'put' ? `${SERVERPROFILE}films/${parameter}` : `${SERVERPROFILE}films`;

  try {
    // Call our request helper (see 'utils/request')
    const responseProfile = yield call(request, requestProfileOfUser, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(detailsProfile)
    });
    yield put(profileChanged(responseProfile));
  } catch (err) {
    yield put(profileError());
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
