import { createSelector } from 'reselect';

const getAllRoot = (state) => Object.values(state.quizzReducer.allData);

const getAll = (state) => Object.values(state.quizzReducer.data);

const getLoading = (state) => state.quizzReducer.loading;

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
  createSelector(getAll, (allQuizz) => getQuizzNewOrOld(allQuizz, num, 'old'));

export const getNewestQuizz = (num) =>
  createSelector(getAll, (allQuizz) => getQuizzNewOrOld(allQuizz, num, 'new'));

export const getAllQuizz = createSelector(getAll, (allQuizz) => allQuizz);

export const getAllQuizzRoot = createSelector(
  getAllRoot,
  (allQuizzRoot) => allQuizzRoot
);

export const getLoadingQuizz = createSelector(getLoading, (loading) => loading);
