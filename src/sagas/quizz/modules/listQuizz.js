import { put, race, call, delay } from 'redux-saga/effects';
import {
  GET_LIST_QUIZZ_SUCCESS,
  GET_LIST_QUIZZ_FAIL,
} from '../../../constants/quizz';
import { apiTimeout } from '../../../config/api';
import requestListQuizz from '../api/listQuizz';

function* getListQuizz() {
  try {
    const { res, timeout } = yield race({
      res: call(requestListQuizz),
      timeout: delay(apiTimeout),
    });

    if (res && res.data && res.data.quizzs) {
      yield put({ type: GET_LIST_QUIZZ_SUCCESS, payload: res.data.quizzs });
    } else {
      yield put({ type: GET_LIST_QUIZZ_FAIL, err: 'No Data!' });
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
