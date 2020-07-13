import { GET_DL_THEME, CHANGE_DL_THEME } from '../constants/theme';

export const getDLTheme = () => ({
  type: GET_DL_THEME,
});

export const changeDLTheme = () => ({
  type: CHANGE_DL_THEME,
});
