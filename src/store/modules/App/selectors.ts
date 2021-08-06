import { find } from 'lodash';
import { RootStoreType } from 'models/types';
import { createSelector } from 'reselect';

export const getThemePropertyies = createSelector(
  [(state: RootStoreType) => state.app.themePropertyies],
  themePropertyies => themePropertyies
);
export const getSkills = createSelector([(state: RootStoreType) => state.app.skills], skills => skills);

export const getCursorColor = createSelector(
  [(state: RootStoreType) => state.app.cursorColor],
  cursorColor => cursorColor
);

export const getIsMain3dSceneHidden = createSelector(
  [(state: RootStoreType) => state.app.statuses.isMain3dSceneHidden],
  isMain3dSceneHidden => isMain3dSceneHidden
);

export const getLoadingProperyies = createSelector(
  [(state: RootStoreType) => ({ isLoading: state.app.statuses.isLoading, percent: state.app.loadingPercent })],
  loadingProperyies => loadingProperyies
);

export const getIsRandomColorChangingDisabled = createSelector(
  [(state: RootStoreType) => state.app.statuses.isRandomColorChangingDisabled],
  isRandomColorChangingDisabled => isRandomColorChangingDisabled
);


export const getAvatarMap = createSelector(
  [(state: RootStoreType) => state.app.textureMaps.avatar],
  avatarMap => avatarMap
);
