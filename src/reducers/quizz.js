import {
  GET_LIST_QUIZZ,
  GET_LIST_QUIZZ_SUCCESS,
  GET_LIST_QUIZZ_FAIL,
} from '../constants/quizz';

const initialState = {
  loading: false,
  success: false,
  fail: false,
  err: '',
  data: {},
};

const quizzReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_QUIZZ:
      return {
        ...state,
        loading: true,
      };
    case GET_LIST_QUIZZ_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        fail: false,
        data: action.payload,
      };
    case GET_LIST_QUIZZ_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        fail: true,
        err: action.err,
      };
    default:
      return state;
  }
};

export default quizzReducer;
