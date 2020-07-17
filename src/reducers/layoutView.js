import { TOGGLE_TYPE_LAYOUT_VIEW } from '../constants/layoutView';
import { CURRENT_LAYOUT_VIEW } from '../constants/localStorage';
import { getDataFromLS } from '../utils/localStorage';

const json2String = (view) => {
  return JSON.stringify({ view });
};

const getLayoutViewState = () => {
  let curLayoutView = 'row';
  const ls = window.localStorage;
  const errorCb = () => {
    ls.removeItem(CURRENT_LAYOUT_VIEW);
    ls.setItem(CURRENT_LAYOUT_VIEW, json2String('card'));
  };
  const successCb = (data) => {
    const { view } = data;
    if (view && (view === 'card' || view === 'row')) {
      curLayoutView = view;
    } else {
      errorCb();
    }
  };

  getDataFromLS(CURRENT_LAYOUT_VIEW).then(successCb).catch(errorCb);
  return { view: curLayoutView };
};

const layoutViewReducer = (state = getLayoutViewState(), action) => {
  switch (action.type) {
    case TOGGLE_TYPE_LAYOUT_VIEW:
      return { ...state, view: state.view === 'card' ? 'row' : 'card' };
    default:
      return state;
  }
};

export default layoutViewReducer;
