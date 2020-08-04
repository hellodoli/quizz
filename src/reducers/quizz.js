import {
  GET_LIST_QUIZZ,
  GET_LIST_QUIZZ_SUCCESS,
  GET_LIST_QUIZZ_FAIL,
  GET_LIST_QUIZZ_SCROLL,
  GET_LIST_QUIZZ_SCROLL_SUCCESS,
} from '../constants/quizz';

const initialState = {
  loading: false,
  success: false,
  fail: false,
  err: '',
  // Data
  page: 1,
  allData: {},
  data: [],
};

const getListQuizzByPage = (datas, startIndex, cardNeedScroll) => {
  let cns = cardNeedScroll;
  if (cns < 4) cns = 4;
  let endIndex = startIndex + cns;
  if (endIndex > datas.length) endIndex = datas.length;
  return datas.slice(startIndex, endIndex);
};

const quizzReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_QUIZZ:
    case GET_LIST_QUIZZ_SCROLL:
      return {
        ...state,
        loading: true,
      };
    case GET_LIST_QUIZZ_SUCCESS: {
      const { payload, cardNeedScroll } = action;
      const quizzsArr = Object.values(payload).reverse(); // Arrange new first
      const quizzs = getListQuizzByPage(quizzsArr, 0, cardNeedScroll);
      return {
        ...state,
        loading: false,
        success: true,
        fail: false,
        allData: payload,
        data: quizzs,
      };
    }
    case GET_LIST_QUIZZ_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        fail: true,
        err: action.err,
      };
    case GET_LIST_QUIZZ_SCROLL_SUCCESS: {
      const { startIndex, cardNeedScroll } = action;
      const quizzsArr = Object.values(state.allData).reverse(); // Arrange new first
      const newPage = state.page + 1;
      const quizzs = getListQuizzByPage(quizzsArr, startIndex, cardNeedScroll);
      return {
        ...state,
        loading: false,
        success: true,
        fail: false,
        page: newPage,
        data: [...state.data, ...quizzs],
      };
    }
    default:
      return state;
  }
};

export default quizzReducer;
