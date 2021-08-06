import { TypeNames } from './enums';
import { AppActionTypes, PayloadTypes } from './types';

export const toChangeThemePropertyies = (
  payload: PayloadTypes[TypeNames.HANDLE_CHANGE_THEME_PROPERTYIES]
): AppActionTypes => ({
  type: TypeNames.HANDLE_CHANGE_THEME_PROPERTYIES,
  payload
});
export const toChangeCursorColor = (
  payload: PayloadTypes[TypeNames.HANDLE_CHANGE_CURSOR_COLOR]
): AppActionTypes => ({
  type: TypeNames.HANDLE_CHANGE_CURSOR_COLOR,
  payload
});



export const toChangeStatuses = (
  payload: PayloadTypes[TypeNames.HANDLE_CHANGE_STATUSES]
): AppActionTypes => ({
  type: TypeNames.HANDLE_CHANGE_STATUSES,
  payload
});
export const toChangeLoadingProperyies = (
  payload: PayloadTypes[TypeNames.HANDLE_CHANGE_LOADING_PROPERYIES]
): AppActionTypes => ({
  type: TypeNames.HANDLE_CHANGE_LOADING_PROPERYIES,
  payload
});
export const toChangeTextureMaps = (
  payload: PayloadTypes[TypeNames.HANDLE_CHANGE_TEXTURE_MAPS]
): AppActionTypes => ({
  type: TypeNames.HANDLE_CHANGE_TEXTURE_MAPS,
  payload
});

