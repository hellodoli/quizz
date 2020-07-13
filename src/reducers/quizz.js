import { GET_LIST_QUIZZ, GET_LIST_QUIZZ_TEST } from '../constants/quizz';

const quizzReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_LIST_QUIZZ:
      console.log('GET_LIST_QUIZZ');
      return state;
    case GET_LIST_QUIZZ_TEST:
      console.log('GET_LIST_QUIZZ_TEST');
      return state;
    default:
      return state;
  }
};

export default quizzReducer;
