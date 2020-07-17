import { combineReducers } from 'redux';

import themeReducer from './theme';
import quizzReducer from './quizz';
import layoutViewReducer from './layoutView';

const rootReducer = combineReducers({
  themeReducer,
  quizzReducer,
  layoutViewReducer,
});

export default rootReducer;
