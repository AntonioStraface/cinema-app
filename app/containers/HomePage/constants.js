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

export const OPEN_SEARCH = 'cinema-app/Home/SEARCH_OPENED';
export const CLOSE_SEARCH = 'cinema-app/Home/CLOSE_SEARCH';
export const LOAD_MOVIES = 'cinema-app/Home/LOAD_MOVIES';
export const LOAD_MOVIES_ERROR = 'cinema-app/Home/LOAD_MOVIES_ERROR';
export const LOAD_MOVIES_SUCCESS = 'cinema-app/Home/LOAD_MOVIES_SUCCESS';
