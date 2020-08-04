import {
  GET_LIST_QUIZZ,
  GET_LIST_QUIZZ_SUCCESS,
  GET_LIST_QUIZZ_FAIL,
  GET_LIST_QUIZZ_SCROLL,
  GET_LIST_QUIZZ_SCROLL_SUCCESS,
} from '../constants/quizz';

export const getListQuizz = () => ({
  type: GET_LIST_QUIZZ,
});

export const getListQuizzSuccess = (payload, cardNeedScroll) => ({
  type: GET_LIST_QUIZZ_SUCCESS,
  payload,
  cardNeedScroll,
});

// For scrolling paging
export const getListQuizzScroll = () => ({
  type: GET_LIST_QUIZZ_SCROLL,
});

export const getListQuizzScrollSuccess = (cardNeedScroll, startIndex) => ({
  type: GET_LIST_QUIZZ_SCROLL_SUCCESS,
  cardNeedScroll,
  startIndex,
});

export const getListQuizzFail = () => ({
  type: GET_LIST_QUIZZ_FAIL,
});
