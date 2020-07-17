import { createSelector } from 'reselect';

const getCurrentView = (state) => state.layoutViewReducer.view;

export const getView = createSelector(getCurrentView, (view) => view);
