/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_DETAIL_MOVIE = 'cinema-app/Details/LOAD_DETAIL_MOVIE';
export const SUCCESS_DETAIL_MOVIE = 'cinema-app/Details/SUCCESS_DETAIL_MOVIE';
export const LOAD_MOVIE_ERROR = 'cinema-app/Details/LOAD_MOVIE_ERROR';
export const LIKE_CHANGE = 'cinema-app/Details/LIKE_CHANGE';
export const VOTE_CHANGE = 'cinema-app/Details/VOTE_CHANGE';
export const EYE_CHANGE = 'cinema-app/Details/EYE_CHANGE';
export const PROFILE_CHANGED = 'cinema-app/Details/PROFILE_CHANGED';
