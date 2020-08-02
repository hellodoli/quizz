import { createSelector } from 'reselect';

const getAllOptions = (state) => state.optionsReducer;
const getOptions = createSelector(getAllOptions, (op) => op);

const getSpace = createSelector(
  (state) => state.optionsReducer.space,
  (space) => space
);

const getSpaceAndView = createSelector(
  (state) => state.optionsReducer,
  (options) => ({
    space: options.space,
    view: options.view,
  })
);

const getPreferences = createSelector(
  (state) => state.optionsReducer,
  (options) => ({ ...options.preferences })
);

export { getOptions, getSpaceAndView, getPreferences, getSpace };
