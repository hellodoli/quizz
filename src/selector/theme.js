import { createSelector } from 'reselect';

export const getTheme = createSelector(
  (state) => state.themeReducer,
  (theme) => theme
);
