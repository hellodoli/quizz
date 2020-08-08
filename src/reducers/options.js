import {
  TOGGLE_TYPE_LAYOUT_VIEW,
  CHANGE_TYPE_SPACE_VIEW,
  CHANGE_TYPE_PREFERENCES,
} from '../constants/options';
import { CURRENT_OPTIONS } from '../constants/localStorage';
import { getDataFromLS, setDataFromLS } from '../utils/localStorage';
import { checkValidKeyObject } from '../utils/object';

const viewArr = ['card', 'row'];
const spaceArr = ['roomy', 'cozy', 'eco'];
const preferencesArr = ['cardAnimation', 'dlTheme'];

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
  },
};

const json2String = (options) => {
  return JSON.stringify(options);
};

const getOptions = () => {
  const ls = window.localStorage;
  const curView = { ...defaultOptions };
  const errorAction = () => {
    ls.removeItem(CURRENT_OPTIONS);
    ls.setItem(CURRENT_OPTIONS, json2String(defaultOptions));
  };
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
      curView.preferences = preferences;
    } else {
      errorAction();
    }
  } else {
    errorAction();
  }
  return curView;
};

const optionsReducer = (state = getOptions(), action) => {
  switch (action.type) {
    case TOGGLE_TYPE_LAYOUT_VIEW: {
      const view = state.view === 'card' ? 'row' : 'card';
      // saving to localStorage
      const newState = { ...state, view };
      setDataFromLS(CURRENT_OPTIONS, newState);
      return {
        ...state,
        view,
      };
    }
    case CHANGE_TYPE_SPACE_VIEW: {
      const { payload } = action;
      // saving to localStorage
      const newState = { ...state, space: payload };
      setDataFromLS(CURRENT_OPTIONS, newState);
      return {
        ...state,
        space: payload,
      };
    }
    case CHANGE_TYPE_PREFERENCES: {
      const { key, value } = action.payload;
      // saving to localStorage
      const newState = { ...state };
      newState.preferences[key].value = value;
      setDataFromLS(CURRENT_OPTIONS, newState);
      return {
        ...state,
        preferences: {
          ...state.preferences,
          [key]: {
            ...state.preferences[key],
            value,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default optionsReducer;
