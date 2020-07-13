import { all, takeLatest } from 'redux-saga/effects';
import { GET_LIST_QUIZZ_TEST } from '../../constants/quizz';
import fetchListQuizz from './modules/listQuizz';

export default function* quizz() {
  yield all([yield takeLatest(GET_LIST_QUIZZ_TEST, fetchListQuizz)]);
}
