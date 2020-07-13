import { put } from 'redux-saga/effects';
import { GET_LIST_QUIZZ_TEST } from '../../../constants/quizz';
// import requestListQuizz from '../api/listQuizz';

function* fetchListQuizz() {
  try {
    yield put({ type: GET_LIST_QUIZZ_TEST });
  } catch (error) {
    console.log(error);
  }
}

export default fetchListQuizz;
