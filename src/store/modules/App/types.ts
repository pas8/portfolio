import { ThemeOptions } from '@material-ui/core';
import { $Values } from 'utility-types';
import { TypeNames } from './enums';

export type PayloadTypes = {
  [TypeNames.HANDLE_CHANGE_THEME_PROPERTYIES]: {
    themePropertyies:ThemeOptions
  };
};

export type ActionsValueTypes = {
  toChangeThemePropertyies: {
    type: typeof TypeNames.HANDLE_CHANGE_THEME_PROPERTYIES;
    payload: PayloadTypes[TypeNames.HANDLE_CHANGE_THEME_PROPERTYIES];
  };
};
export type AppActionTypes = $Values<ActionsValueTypes>;

export type AppInitialStateType = {
  themePropertyies:ThemeOptions;
} 
