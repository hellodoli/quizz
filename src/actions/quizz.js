import {
  GET_LIST_QUIZZ,
  GET_LIST_QUIZZ_SUCCESS,
  GET_LIST_QUIZZ_FAIL,
  GET_LIST_QUIZZ_SCROLL,
  GET_LIST_QUIZZ_SCROLL_SUCCESS,
  SET_LIST_QUIZZ_BOOKMARK,
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

/**
 * Give id of QuizzCardItem for search and edit
 * both rootQuizzs and quizzs
 * @param {Number} id
 * @param {Book} value
 */
export const setListQuizzBookmark = (id, value) => ({
  type: SET_LIST_QUIZZ_BOOKMARK,
  id,
  value,
});
