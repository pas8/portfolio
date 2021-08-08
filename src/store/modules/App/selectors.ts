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

export const getSkillsTextureArr = createSelector(
  [(state: RootStoreType) => state.app.textureMaps.skillsTextureArr],
  skillsTextureArr => skillsTextureArr
);

export const getCurrentSectionId = createSelector(
  [(state: RootStoreType) => state.app.currentSectionId],
  currentSectionId => currentSectionId
);
export const getSoundIdx = createSelector([(state: RootStoreType) => state.app.soundIdx], soundIdx => soundIdx);
export const getIsSoundPaused = createSelector(
  [(state: RootStoreType) => state.app.statuses.isSoundPaused],
  isSoundPaused => isSoundPaused
);
