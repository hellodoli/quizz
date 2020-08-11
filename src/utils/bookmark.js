import { CURRENT_BOOKMARKS } from '../constants/localStorage';
import { getDataFromLS, setDataFromLS } from './localStorage';

/**
 * @param {Object} bookmarkList
 */
export const setBookmarkList = (bookmarks) => {
  setDataFromLS(CURRENT_BOOKMARKS, { bookmarks });
};

export const getBookmarkList = () => {
  let bookmarks = {};
  const errorAction = () => setBookmarkList(bookmarks);
  const state = getDataFromLS(CURRENT_BOOKMARKS);
  if (state.data) {
    if (state.data.bookmarks) bookmarks = state.data.bookmarks;
    else errorAction();
  } else {
    errorAction();
  }
  return bookmarks;
};

/**
 * @param {Array} quizzs
 * @param {Object} bookmarkList
 */
export const getMixBookmarkWithQuizz = (quizzs, bookmarkList) => {
  const mixQuizz = [];
  for (let i = 0; i < quizzs.length; i++) {
    const quizz = quizzs[i];
    quizz.bookmark = !!bookmarkList[quizz.id];
    mixQuizz.push(quizz);
  }
  return mixQuizz;
};

/**
 * @param {Array} quizzs
 * @param {Object} bookmarkList
 */
export const mixBookmarkWithQuizz = (quizzs, bookmarkList) => {
  for (let i = 0; i < quizzs.length; i++) {
    const quizz = quizzs[i];
    quizz.bookmark = !!bookmarkList[quizz.id];
  }
};

/**
 * @param {Number} id
 * @param {Object} bookmarkList
 */
export const isExistBookmark = (id, bookmarkList) => {
  if (bookmarkList && bookmarkList[id]) return true;
  return false;
};
