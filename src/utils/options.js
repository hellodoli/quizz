import { CURRENT_OPTIONS } from '../constants/localStorage';
import { getDataFromLS, setDataFromLS } from './localStorage';
import { checkValidKeyObject } from './object';

const viewArr = ['card', 'row'];
const spaceArr = ['roomy', 'cozy', 'eco'];
const preferencesArr = ['cardAnimation', 'dlTheme', 'bookmark'];

const defaultOptions = {
  view: 'card',
  space: 'roomy',
  preferences: {
    cardAnimation: {
      id: 'cardAnimation',
      name: 'Card Animations',
      value: true,
    },
    dlTheme: {
      id: 'dlTheme',
      name: 'Light theme',
      value: false,
    },
    bookmark: {
      id: 'bookmark',
      name: 'Bookmark view',
      value: false,
    },
  },
};

/**
 * @param {Object} options
 */
export const setOptions = (options) => {
  setDataFromLS(CURRENT_OPTIONS, options);
};

export const getOptions = () => {
  const curView = { ...defaultOptions };
  const errorAction = () => setOptions(defaultOptions);
  const state = getDataFromLS(CURRENT_OPTIONS);
  if (state.data) {
    const { view, space, preferences } = state.data;
    if (
      view &&
      viewArr.includes(view) &&
      space &&
      spaceArr.includes(space) &&
      preferences &&
      checkValidKeyObject(preferences, preferencesArr)
    ) {
      curView.view = view;
      curView.space = space;

      preferences.bookmark.value = false; // default is false
      curView.preferences = preferences;
      setOptions({
        ...state.data,
        preferences,
      });
    } else {
      errorAction();
    }
  } else {
    errorAction();
  }
  return curView;
};
