import {
  TOGGLE_TYPE_LAYOUT_VIEW,
  CHANGE_TYPE_SPACE_VIEW,
  CHANGE_TYPE_PREFERENCES,
} from '../constants/options';
import { CURRENT_OPTIONS } from '../constants/localStorage';
import { setDataFromLS } from '../utils/localStorage';
import { getOptions } from '../utils/options';

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
