import { put } from 'redux-saga/effects';
import { CHANGE_TYPE_PREFERENCES } from '../../../constants/options';
import { CHANGE_DL_THEME } from '../../../constants/theme';

function* changeDLTheme(action) {
  const { preference, payload } = action;
  yield put({
    type: CHANGE_TYPE_PREFERENCES,
    payload: preference,
  });
  yield put({
    type: CHANGE_DL_THEME,
    payload,
  });
}

export default changeDLTheme;
