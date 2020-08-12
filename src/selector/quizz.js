import { createSelector } from 'reselect';

const rootQuizzSelector = (state) => Object.values(state.quizzReducer.allData);
const rootQuizzNoArrSelector = (state) => state.quizzReducer.allData;
const quizzsSelector = (state) => Object.values(state.quizzReducer.data);

const loadingSelector = (state) => state.quizzReducer.loading;

const getQuizzNewOrOld = (quizzs, num, type) => {
  const maxLength = quizzs.length;
  const min = type === 'new' ? maxLength - num : 0;
  const max = type === 'new' ? maxLength : num;
  const result = [];
  for (let i = min; i < max; i++) {
    if (quizzs[i]) result.push(quizzs[i]);
  }
  return result;
};

export const getOldestQuizz = (num) =>
  createSelector([quizzsSelector], (allQuizz) =>
    getQuizzNewOrOld(allQuizz, num, 'old')
  );

export const getNewestQuizz = (num) =>
  createSelector([quizzsSelector], (allQuizz) =>
    getQuizzNewOrOld(allQuizz, num, 'new')
  );

export const getQuizzs = createSelector([quizzsSelector], (quizzs) => quizzs);

export const getRootQuizz = createSelector(
  [rootQuizzSelector],
  (rootQuizz) => rootQuizz
);

export const getRootQuizzNoArr = createSelector(
  [rootQuizzNoArrSelector],
  (rootQuizz) => rootQuizz
);

export const getLoadingQuizz = createSelector(
  loadingSelector,
  (loading) => loading
);
