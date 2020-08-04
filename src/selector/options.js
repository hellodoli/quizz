import { createSelector } from 'reselect';

const optionsSelector = (state) => state.optionsReducer;
const spaceSelector = (state) => state.optionsReducer.space;
const viewSelector = (state) => state.optionsReducer.view;

export const getOptions = createSelector([optionsSelector], (op) => op);
export const getPreferences = createSelector(
  [getOptions],
  (op) => op.preferences
);
export const getSpace = createSelector([spaceSelector], (space) => space);
export const getView = createSelector([viewSelector], (view) => view);
export const getSpaceAndView = createSelector(
  [spaceSelector, viewSelector],
  (space, view) => ({
    space,
    view,
  })
);
