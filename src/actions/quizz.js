import {
  GET_LIST_QUIZZ,
  GET_LIST_QUIZZ_SUCCESS,
  GET_LIST_QUIZZ_FAIL,
} from '../constants/quizz';

export const getListQuizz = () => ({
  type: GET_LIST_QUIZZ,
});

export const getListQuizzSuccess = (payload) => ({
  type: GET_LIST_QUIZZ_SUCCESS,
  payload,
});

export const getListQuizzFail = () => ({
  type: GET_LIST_QUIZZ_FAIL,
});
