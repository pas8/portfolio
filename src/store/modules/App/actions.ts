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

