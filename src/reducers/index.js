import { combineReducers } from 'redux';

import themeReducer from './theme';
import quizzReducer from './quizz';

const rootReducer = combineReducers({
  themeReducer,
  quizzReducer,
});

export default rootReducer;
