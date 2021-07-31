import { ThemeOptions } from '@material-ui/core';
import { $Values } from 'utility-types';
import { TypeNames } from './enums';

export type PayloadTypes = {
  [TypeNames.HANDLE_CHANGE_THEME_PROPERTYIES]: {
    themePropertyies: ThemeOptions;
  };
  [TypeNames.HANDLE_CHANGE_CURSOR_COLOR]: {
    cursorColor: CursorColortype;
  };
};

export type ActionsValueTypes = {
  toChangeThemePropertyies: {
    type: typeof TypeNames.HANDLE_CHANGE_THEME_PROPERTYIES;
    payload: PayloadTypes[TypeNames.HANDLE_CHANGE_THEME_PROPERTYIES];
  };
  toChangeCursorColor: {
    type: typeof TypeNames.HANDLE_CHANGE_CURSOR_COLOR;
    payload: PayloadTypes[TypeNames.HANDLE_CHANGE_CURSOR_COLOR];
  };
};
export type AppActionTypes = $Values<ActionsValueTypes>;
export type SkillsType = { title: string; href: string }[];
export type CursorColortype = string

export type AppInitialStateType = {
  themePropertyies: ThemeOptions;
  skills: SkillsType;
  cursorColor: CursorColortype;
};
