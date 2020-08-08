import { combineReducers } from 'redux';

import themeReducer from './theme';
import quizzReducer from './quizz';
import optionsReducer from './options';
import bookmarkReducer from './bookmark';

const rootReducer = combineReducers({
  themeReducer,
  quizzReducer,
  optionsReducer,
  bookmarkReducer,
});

export default rootReducer;
