import { createSelector } from 'reselect';

const getCurOptions = (state) => state.optionsReducer;

export const getOptions = createSelector(getCurOptions, (op) => op);
