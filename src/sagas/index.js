import { all, fork } from 'redux-saga/effects';
import quizz from './quizz';

export default function* root() {
  yield all([fork(quizz)]);
}
