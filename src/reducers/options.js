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
const preferencesArr = ['cardAnimation'];

const defaultOptions = {
  view: 'card',
  space: 'roomy',
  preferences: {
    cardAnimation: {
      id: 'cardAnimation',
      name: 'Card Animations',
      value: true,
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

const layoutViewReducer = (state = getOptions(), action) => {
  switch (action.type) {
    case TOGGLE_TYPE_LAYOUT_VIEW: {
      const view = state.view === 'card' ? 'row' : 'card';
      const newState = { ...state, view };
      setDataFromLS(CURRENT_OPTIONS, newState);
      return newState;
    }
    case CHANGE_TYPE_SPACE_VIEW: {
      const newState = { ...state, space: action.payload };
      setDataFromLS(CURRENT_OPTIONS, newState);
      return newState;
    }
    case CHANGE_TYPE_PREFERENCES: {
      const { key, value } = action.payload;
      const newState = { ...state };
      newState.preferences[key].value = value;
      setDataFromLS(CURRENT_OPTIONS, newState);
      return newState;
    }
    default:
      return state;
  }
};

export default layoutViewReducer;
