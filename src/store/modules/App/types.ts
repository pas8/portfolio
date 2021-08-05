import { ThemeOptions } from '@material-ui/core';
import { $Values,Optional } from 'utility-types';
import { TypeNames } from './enums';

export type PayloadTypes = {
  [TypeNames.HANDLE_CHANGE_THEME_PROPERTYIES]: {
    themePropertyies: ThemeOptions;
  };
  [TypeNames.HANDLE_CHANGE_CURSOR_COLOR]: {
    cursorColor: CursorColortype;
  };

  [TypeNames.HANDLE_CHANGE_STATUSES]: {
    newStatuses: Optional<StatusesType>;
  };

  

};

export type ActionsValueTypes = {
  toChangeThemePropertyies: {
    type: typeof TypeNames.HANDLE_CHANGE_THEME_PROPERTYIES;
    payload: PayloadTypes[TypeNames.HANDLE_CHANGE_THEME_PROPERTYIES];
  };

  toChangeStatuses: {
    type: typeof TypeNames.HANDLE_CHANGE_STATUSES;
    payload: PayloadTypes[TypeNames.HANDLE_CHANGE_STATUSES];
  };

  toChangeCursorColor: {
    type: typeof TypeNames.HANDLE_CHANGE_CURSOR_COLOR;
    payload: PayloadTypes[TypeNames.HANDLE_CHANGE_CURSOR_COLOR];
  };
};
export type AppActionTypes = $Values<ActionsValueTypes>;
export type SkillsType = { title: string; href: string }[];
export type CursorColortype = string;

export type StatusesNamesType = 'isRandomColorChangingDisabled' | 'isMain3dSceneHidden';
export type StatusesType = {
  [Property in StatusesNamesType]: boolean;
};

export type AppInitialStateType = {
  themePropertyies: ThemeOptions;
  skills: SkillsType;
  statuses: StatusesType;
  cursorColor: CursorColortype;
};
