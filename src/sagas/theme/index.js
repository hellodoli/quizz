import { all, takeLatest } from 'redux-saga/effects';
import { PRE_CHANGE_DL_THEME } from '../../constants/theme';
import changeDLTheme from './modules/changeDLTheme';

export default function* theme() {
  yield all([yield takeLatest(PRE_CHANGE_DL_THEME, changeDLTheme)]);
}
