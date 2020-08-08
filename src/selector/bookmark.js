import { createSelector } from 'reselect';

const bookmarkSelector = (state) => state.bookmarkReducer;

export const getBookmark = createSelector([bookmarkSelector], (bm) => bm);
