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

const getListQuizzByPage = (datas, page = 1, numberPerPage = 8) => {
  let npp = numberPerPage;
  if (npp < 4) npp = 4;
  const startIndex = (page - 1) * npp;
  let endIndex = startIndex + npp;
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
      const { payload, numberPerPage } = action;
      const quizzsArr = Object.values(payload).reverse(); // Arrange new first
      const quizzs = getListQuizzByPage(quizzsArr, 1, numberPerPage * 2);
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
      const { numberPerPage } = action;
      const quizzsArr = Object.values(state.allData).reverse(); // Arrange new first
      const newPage = state.page + 1;
      const quizzs = getListQuizzByPage(quizzsArr, newPage, numberPerPage * 2);
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
