import { all, takeLatest } from 'redux-saga/effects';
import { TOGGLE_BOOKMARK } from '../../constants/bookmark';

import toggleBookmark from './modules/toggleBookmark';

export default function* bookmark() {
  yield all([yield takeLatest(TOGGLE_BOOKMARK, toggleBookmark)]);
}
