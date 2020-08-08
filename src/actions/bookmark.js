import {
  ADD_BOOKMARK,
  TOGGLE_BOOKMARK,
  REMOVE_BOOKMARK,
} from '../constants/bookmark';

export const addBookmark = (payload) => ({
  type: ADD_BOOKMARK,
  payload,
});

export const toggleBookmark = (status, payload) => ({
  type: TOGGLE_BOOKMARK,
  status,
  payload,
});

export const removeBookmark = (payload) => ({
  type: REMOVE_BOOKMARK,
  payload,
});
