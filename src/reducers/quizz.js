import {
  GET_LIST_QUIZZ,
  GET_LIST_QUIZZ_SUCCESS,
  GET_LIST_QUIZZ_FAIL,
  GET_LIST_QUIZZ_SCROLL,
  GET_LIST_QUIZZ_SCROLL_SUCCESS,
  SET_LIST_QUIZZ_BOOKMARK,
} from '../constants/quizz';

const initialState = {
  loading: false,
  success: false,
  fail: false,
  err: '',
  // Data
  page: 1,
  allData: {},
  data: {},
};

/**
 *
 * @param {Object} allData
 * @param {Number} startIndex
 * @param {Number} cardNeedScroll
 * @param {Boolean} isReverse
 * @return {Object}
 */
const getListQuizzByPage = (
  allData,
  startIndex,
  cardNeedScroll,
  isReverse = true
) => {
  const datas = isReverse
    ? Object.values(allData).reverse()
    : Object.values(allData);
  let cns = cardNeedScroll;
  if (cns < 4) cns = 4;
  let endIndex = startIndex + cns;
  if (endIndex > datas.length) endIndex = datas.length;
  const sliced = datas.slice(startIndex, endIndex).reduce((result, quizz) => {
    // eslint-disable-next-line no-param-reassign
    result[quizz.id] = quizz;
    return result;
  }, {});
  return sliced;
};

const quizzReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_QUIZZ:
    case GET_LIST_QUIZZ_SCROLL:
      return {
        ...state,
        loading: true,
      };
    case GET_LIST_QUIZZ_FAIL: {
      return {
        ...state,
        loading: false,
        success: false,
        // define err by fail and err
        fail: true,
        err: action.err,
      };
    }
    case GET_LIST_QUIZZ_SUCCESS: {
      const { payload, cardNeedScroll } = action;
      const quizzs = getListQuizzByPage(payload, 0, cardNeedScroll);
      return {
        ...state,
        loading: false,
        success: true,
        fail: false,
        allData: payload,
        data: quizzs,
      };
    }
    case GET_LIST_QUIZZ_SCROLL_SUCCESS: {
      const { startIndex, cardNeedScroll } = action;
      const newPage = state.page + 1;
      const quizzs = getListQuizzByPage(
        state.allData,
        startIndex,
        cardNeedScroll
      );
      console.log(startIndex);
      console.log(cardNeedScroll);
      return {
        ...state,
        loading: false,
        success: true,
        fail: false,
        page: newPage,
        data: { ...state.data, ...quizzs },
      };
    }
    case SET_LIST_QUIZZ_BOOKMARK: {
      const { id, value } = action;
      const newState = { ...state };
      newState.allData[id].bookmark = value;
      newState.data[id].bookmark = value;
      return {
        ...newState,
      };
    }
    default:
      return state;
  }
};

export default quizzReducer;
