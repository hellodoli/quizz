import { select, put } from 'redux-saga/effects';
import {
  ADD_BOOKMARK_SUCCESS,
  REMOVE_BOOKMARK_SUCCESS,
} from '../../../constants/bookmark';
import { SET_LIST_QUIZZ_BOOKMARK } from '../../../constants/quizz';
import { setBookmarkList, isExistBookmark } from '../../../utils/bookmark';

function* toggleBookmark(action) {
  const { bookmarkReducer: bookmarks } = yield select();
  const { payload, status } = action;

  if (status === 'ON') {
    // saving localStorage
    setBookmarkList({ ...bookmarks, [payload.id]: payload });
    // change bookmarkReducer
    yield put({ type: ADD_BOOKMARK_SUCCESS, payload });
    // change quizzReducer
    yield put({ type: SET_LIST_QUIZZ_BOOKMARK, id: payload.id, value: true });
  } else if (isExistBookmark(payload.id, bookmarks)) {
    // saving localStorage
    const newBookmarks = { ...bookmarks };
    delete newBookmarks[payload.id];
    setBookmarkList(newBookmarks);
    // change bookmarkReducer
    yield put({ type: REMOVE_BOOKMARK_SUCCESS, payload });
    // change quizzReducer
    yield put({ type: SET_LIST_QUIZZ_BOOKMARK, id: payload.id, value: false });
  }
}

export default toggleBookmark;
