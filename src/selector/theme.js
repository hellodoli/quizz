import { createSelector } from 'reselect';

const themeSelector = (state) => state.themeReducer;

export const getTheme = createSelector([themeSelector], (theme) => theme);
export const getDLTheme = createSelector(
  [themeSelector],
  (theme) => theme.palette.type
);
