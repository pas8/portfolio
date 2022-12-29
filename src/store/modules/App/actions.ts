import { TypeNames } from './enums';
import { AppActionTypes, PayloadTypes } from './types';

export const toChangethemeProperties = (
  payload: PayloadTypes[TypeNames.HANDLE_CHANGE_THEME_PROPERTIES]
): AppActionTypes => ({
  type: TypeNames.HANDLE_CHANGE_THEME_PROPERTIES,
  payload
});
export const toChangeCursorColor = (payload: PayloadTypes[TypeNames.HANDLE_CHANGE_CURSOR_COLOR]): AppActionTypes => ({
  type: TypeNames.HANDLE_CHANGE_CURSOR_COLOR,
  payload
});

export const toChangeStatuses = (payload: PayloadTypes[TypeNames.HANDLE_CHANGE_STATUSES]): AppActionTypes => ({
  type: TypeNames.HANDLE_CHANGE_STATUSES,
  payload
});
export const toChangeLoadingProperties = (
  payload: PayloadTypes[TypeNames.HANDLE_CHANGE_LOADING_PROPERTIES]
): AppActionTypes => ({
  type: TypeNames.HANDLE_CHANGE_LOADING_PROPERTIES,
  payload
});
export const toChangeTextureMaps = (payload: PayloadTypes[TypeNames.HANDLE_CHANGE_TEXTURE_MAPS]): AppActionTypes => ({
  type: TypeNames.HANDLE_CHANGE_TEXTURE_MAPS,
  payload
});

export const toChangeCurrentSectionId = (
  payload: PayloadTypes[TypeNames.HANDLE_CHANGE_CURRENT_SECTION_ID]
): AppActionTypes => ({
  type: TypeNames.HANDLE_CHANGE_CURRENT_SECTION_ID,
  payload
});

export const toChangeSoundIdx = (payload: PayloadTypes[TypeNames.HANDLE_CHANGE_SOUND_IDX]): AppActionTypes => ({
  type: TypeNames.HANDLE_CHANGE_SOUND_IDX,
  payload
});
export const toChangeSphereCursorTitle = (payload: PayloadTypes[TypeNames.HANDLE_CHANGE_SPHERE_CURSOR_TITLE]): AppActionTypes => ({
  type: TypeNames.HANDLE_CHANGE_SPHERE_CURSOR_TITLE,
  payload
});

