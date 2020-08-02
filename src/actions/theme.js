import {
  GET_THEME,
  CHANGE_DL_THEME,
  PRE_CHANGE_DL_THEME,
} from '../constants/theme';

export const getTheme = () => ({
  type: GET_THEME,
});

/**
 * @param {object} preference
 * @param {string} payload
 */
export const preChangeDLTheme = (preference, payload) => ({
  type: PRE_CHANGE_DL_THEME,
  preference,
  payload,
});

export const changeDLTheme = (payload) => ({
  type: CHANGE_DL_THEME,
  payload,
});
