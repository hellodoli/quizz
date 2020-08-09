import { delay, put, select } from 'redux-saga/effects';
import {
  GET_LIST_QUIZZ_SCROLL_SUCCESS,
  GET_LIST_QUIZZ_FAIL,
} from '../../../constants/quizz';
import { getCardNumberToScroll } from '../../../utils/quizzs';

function* getListQuizzScroll() {
  try {
    yield delay(500);
    const {
      quizzReducer,
      optionsReducer: { view, space },
    } = yield select();

    const { length } = Object.keys(quizzReducer.data);
    const cardNeedScroll = getCardNumberToScroll(
      window.innerWidth,
      view,
      space,
      length
    );
    yield put({
      type: GET_LIST_QUIZZ_SCROLL_SUCCESS,
      startIndex: length,
      cardNeedScroll,
    });
  } catch (error) {
    yield put({ type: GET_LIST_QUIZZ_FAIL, err: error });
  }
}

export default getListQuizzScroll;
