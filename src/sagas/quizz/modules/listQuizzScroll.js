import { delay, put, select } from 'redux-saga/effects';
import {
  GET_LIST_QUIZZ_SCROLL_SUCCESS,
  GET_LIST_QUIZZ_FAIL,
} from '../../../constants/quizz';
import { getCardNumber } from '../../../utils/quizzs';

function* getListQuizzScroll() {
  try {
    yield delay(500);
    const {
      optionsReducer: { view, space },
    } = yield select();
    const numberPerPage = getCardNumber(window.innerWidth, view, space);
    yield put({
      type: GET_LIST_QUIZZ_SCROLL_SUCCESS,
      numberPerPage,
    });
  } catch (error) {
    yield put({ type: GET_LIST_QUIZZ_FAIL, err: error });
  }
}

export default getListQuizzScroll;
