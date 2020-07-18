import { TOGGLE_TYPE_LAYOUT_VIEW } from '../constants/options';
import { CURRENT_OPTIONS } from '../constants/localStorage';
import { getDataFromLS, setDataFromLS } from '../utils/localStorage';

const viewArr = ['card', 'row'];
const spaceArr = ['roomy', 'cozy', 'eco'];

const defaultOptions = {
  view: 'card',
  space: 'roomy',
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
    const { view, space } = state.data;
    if (view && viewArr.includes(view) && space && spaceArr.includes(space)) {
      curView.view = view;
      curView.space = space;
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
    default:
      return state;
  }
};

export default layoutViewReducer;
