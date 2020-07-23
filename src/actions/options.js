import {
  TOGGLE_TYPE_LAYOUT_VIEW,
  CHANGE_TYPE_SPACE_VIEW,
  CHANGE_TYPE_PREFERENCES,
} from '../constants/options';

export const toggleTypeLayoutView = () => ({
  type: TOGGLE_TYPE_LAYOUT_VIEW,
});

export const changeTypeSpaceView = (space) => ({
  type: CHANGE_TYPE_SPACE_VIEW,
  payload: space,
});

export const changeTypePreferences = (preference) => ({
  type: CHANGE_TYPE_PREFERENCES,
  payload: preference,
});
