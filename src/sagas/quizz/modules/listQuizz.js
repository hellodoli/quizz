import { put, race, call, delay, select } from 'redux-saga/effects';
import {
  GET_LIST_QUIZZ_SUCCESS,
  GET_LIST_QUIZZ_FAIL,
} from '../../../constants/quizz';
import { apiTimeout } from '../../../config/api';
import { getCardNumber } from '../../../utils/quizzs';
// API
import requestListQuizz from '../api/listQuizz';

function* getListQuizz() {
  try {
    const { res, timeout } = yield race({
      res: call(requestListQuizz),
      timeout: delay(apiTimeout),
    });

    if (res) {
      if (res.data && res.data.quizzs) {
        const {
          optionsReducer: { view, space },
        } = yield select();
        const numberPerPage = getCardNumber(window.innerWidth, view, space);
        yield put({
          type: GET_LIST_QUIZZ_SUCCESS,
          payload: res.data.quizzs,
          numberPerPage,
        });
      } else {
        yield put({ type: GET_LIST_QUIZZ_FAIL, err: 'No Data!' });
      }
    }

    // error data or timeout case
    if (!res || timeout) {
      yield put({ type: GET_LIST_QUIZZ_FAIL, err: 'Server Error!' });
    }
    // timeout case
    if (timeout) {
      yield put({ type: GET_LIST_QUIZZ_FAIL, err: 'Request Timeout!' });
    }
  } catch (error) {
    yield put({ type: GET_LIST_QUIZZ_FAIL, err: error });
  }
}

export default getListQuizz;
