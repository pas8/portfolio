import { find } from 'lodash';
import { RootStoreType } from 'models/types';
import { createSelector } from 'reselect';

export const getThemePropertyies = createSelector(
  [(state: RootStoreType) => state.app.themePropertyies],
  themePropertyies => themePropertyies
);
export const getSkills = createSelector(
  [(state: RootStoreType) => state.app.skills],
  skills => skills
);


export const getCursorColor = createSelector(
  [(state: RootStoreType) => state.app.cursorColor],
  cursorColor => cursorColor
);
