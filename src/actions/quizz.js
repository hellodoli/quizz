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

export const getListQuizzSuccess = (payload, numberPerPage) => ({
  type: GET_LIST_QUIZZ_SUCCESS,
  payload,
  numberPerPage,
});

// For scrolling paging
export const getListQuizzScroll = () => ({
  type: GET_LIST_QUIZZ_SCROLL,
});

export const getListQuizzScrollSuccess = (numberPerPage) => ({
  type: GET_LIST_QUIZZ_SCROLL_SUCCESS,
  numberPerPage,
});

export const getListQuizzFail = () => ({
  type: GET_LIST_QUIZZ_FAIL,
});
