import { combineReducers } from 'redux';

const chainReducer = (state = {}, action) => {
  switch (action.type) {
    case 'START_FISHING':
      return { ...state, start: true };
    default:
      return state;
  }
};

const fishReducer = (state = {}, action) => {
  switch (action.type) {
    case 'START_FISHING':
      return { ...state, start: true };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  fishReducer,
  chainReducer,
});

export default rootReducer;
