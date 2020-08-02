import { all, fork } from 'redux-saga/effects';
import quizz from './quizz';
import theme from './theme';

export default function* root() {
  yield all([fork(quizz), fork(theme)]);
}
