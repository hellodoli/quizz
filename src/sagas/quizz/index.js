import { takeLatest, all } from 'redux-saga/effects';
import { GET_LIST_QUIZZ } from '../../constants/quizz';

import getListQuizz from './modules/listQuizz';

export default function* quizz() {
  yield all([yield takeLatest(GET_LIST_QUIZZ, getListQuizz)]);
}
