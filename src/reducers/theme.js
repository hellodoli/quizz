import { CURRENT_DL_THEME } from '../constants/localStorage';
import { GET_THEME, CHANGE_DL_THEME } from '../constants/theme';
import { defaultDLType, defaultTheme, getTheme } from '../theme/theme';

function json2String(type) {
  return JSON.stringify({ type });
}

function getInitialTheme() {
  let DLTheme = defaultTheme;
  const ls = window.localStorage;
  const savedDLTheme = ls.getItem(CURRENT_DL_THEME);
  if (savedDLTheme) {
    const obSavedDLTheme = JSON.parse(savedDLTheme);
    const { type } = obSavedDLTheme;
    const lType = type.toLowerCase();
    if (lType && (lType === 'dark' || lType === 'light')) {
      DLTheme = getTheme(lType);
    } else {
      ls.setItem(CURRENT_DL_THEME, json2String(defaultDLType));
    }
  } else {
    ls.setItem(CURRENT_DL_THEME, json2String(defaultDLType));
  }
  return DLTheme;
}

const themeReducer = (state = getInitialTheme(), action) => {
  switch (action.type) {
    case GET_THEME:
      return state;
    case CHANGE_DL_THEME:
      return getTheme(action.type);
    default:
      return state;
  }
};

export default themeReducer;
