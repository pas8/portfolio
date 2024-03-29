import { RootStoreType } from 'models/types';
import { createSelector } from 'reselect';

export const getThemeProperties = createSelector(
  [(state: RootStoreType) => state.app.themeProperties],
  themeProperties => themeProperties
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

export const getLoadingProperties = createSelector(
  [(state: RootStoreType) => ({ isLoading: state.app.statuses.isLoading, percent: state.app.loadingPercent })],
  loadingProperties => loadingProperties
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

export const getSphereCursorTitle = createSelector(
  [(state: RootStoreType) => state.app.sphereCursorTitle],
  sphereCursorTitle => sphereCursorTitle
);


export const getIsTipsLayoutHidden = createSelector(
  [(state: RootStoreType) => state.app.statuses.isTipsLayoutHidden],
  isTipsLayoutHidden => isTipsLayoutHidden
);





