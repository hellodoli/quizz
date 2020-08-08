import { select, put } from 'redux-saga/effects';
import {
  ADD_BOOKMARK_SUCCESS,
  REMOVE_BOOKMARK_SUCCESS,
} from '../../../constants/bookmark';
import { setBookmarkList, isExistBookmark } from '../../../utils/bookmark';

function* toggleBookmark(action) {
  const { bookmarkReducer: bookmarks } = yield select();
  const { payload, status } = action;

  if (status === 'ON') {
    setBookmarkList({ ...bookmarks, [payload.id]: payload }); // saving localStorage
    yield put({ type: ADD_BOOKMARK_SUCCESS, payload });
  } else if (isExistBookmark(payload.id, bookmarks)) {
    const newBookmarks = { ...bookmarks };
    delete newBookmarks[payload.id];
    setBookmarkList(newBookmarks); // saving localStorage
    yield put({ type: REMOVE_BOOKMARK_SUCCESS, payload });
  }
}

export default toggleBookmark;
