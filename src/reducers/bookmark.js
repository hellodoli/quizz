import {
  TOGGLE_BOOKMARK,
  ADD_BOOKMARK_SUCCESS,
  REMOVE_BOOKMARK_SUCCESS,
} from '../constants/bookmark';
import { getBookmarkList } from '../utils/bookmark';

const bookmarkReducer = (state = getBookmarkList(), action) => {
  switch (action.type) {
    case TOGGLE_BOOKMARK:
      return state;
    case ADD_BOOKMARK_SUCCESS: {
      const { payload } = action;
      return { ...state, [payload.id]: payload };
    }
    case REMOVE_BOOKMARK_SUCCESS: {
      const { payload } = action;
      const newState = { ...state };
      delete newState[payload.id];
      return { ...newState };
    }
    default:
      return state;
  }
};

export default bookmarkReducer;
