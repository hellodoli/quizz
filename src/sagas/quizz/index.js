import { takeLatest, all } from 'redux-saga/effects';
import { GET_LIST_QUIZZ, GET_LIST_QUIZZ_SCROLL } from '../../constants/quizz';

import getListQuizz from './modules/listQuizz';
import getListQuizzScroll from './modules/listQuizzScroll';

export default function* quizz() {
  yield all([
    yield takeLatest(GET_LIST_QUIZZ, getListQuizz),
    yield takeLatest(GET_LIST_QUIZZ_SCROLL, getListQuizzScroll),
  ]);
}
