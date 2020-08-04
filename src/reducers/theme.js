import { CURRENT_DL_THEME } from '../constants/localStorage';
import {
  GET_THEME,
  CHANGE_DL_THEME,
  PRE_CHANGE_DL_THEME,
} from '../constants/theme';
import { defaultDLType, defaultTheme, getTheme } from '../theme/theme';
import { getDataFromLS, setDataFromLS } from '../utils/localStorage';

function getInitialTheme() {
  let DLTheme = defaultTheme;
  const ls = window.localStorage;
  const errorAction = () => {
    ls.removeItem(CURRENT_DL_THEME);
    setDataFromLS(CURRENT_DL_THEME, { type: defaultDLType });
  };

  const state = getDataFromLS(CURRENT_DL_THEME);
  if (state.data) {
    const { type } = state.data;
    if (!type) errorAction();
    const lType = type.toLowerCase();
    if (lType && (lType === 'dark' || lType === 'light')) {
      DLTheme = getTheme(lType);
    }
  } else {
    errorAction();
  }
  return DLTheme;
}

const themeReducer = (state = getInitialTheme(), action) => {
  switch (action.type) {
    case GET_THEME:
    case PRE_CHANGE_DL_THEME:
      return state;
    case CHANGE_DL_THEME: {
      const { payload } = action;
      setDataFromLS(CURRENT_DL_THEME, { type: payload });
      return getTheme(payload);
    }
    default:
      return state;
  }
};

export default themeReducer;
