import { combineReducers } from 'redux';

import themeReducer from './theme';
import quizzReducer from './quizz';
import optionsReducer from './options';

const rootReducer = combineReducers({
  themeReducer,
  quizzReducer,
  optionsReducer,
});

export default rootReducer;
