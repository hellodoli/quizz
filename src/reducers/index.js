import { combineReducers } from 'redux';
import quizzReducer from './quizz';

/**
 * just testing reducer
 */
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

// combine rootReducer
const rootReducer = combineReducers({
  fishReducer,
  chainReducer,
  quizzReducer,
});

export default rootReducer;
