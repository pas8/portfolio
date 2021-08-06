import { ThemeOptions } from '@material-ui/core';
import { Texture } from 'three';
import { $Values, Optional } from 'utility-types';
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
  [TypeNames.HANDLE_CHANGE_LOADING_PROPERYIES]: {
    loadingProperyies: { percent: number; isLoading: boolean };
  };

  [TypeNames.HANDLE_CHANGE_TEXTURE_MAPS]: {
    textureMaps: TextureMapsType;
  };
};

export type ActionsValueTypes = {
  toChangeThemePropertyies: {
    type: typeof TypeNames.HANDLE_CHANGE_THEME_PROPERTYIES;
    payload: PayloadTypes[TypeNames.HANDLE_CHANGE_THEME_PROPERTYIES];
  };
  toChangeTextureMaps: {
    type: typeof TypeNames.HANDLE_CHANGE_TEXTURE_MAPS;
    payload: PayloadTypes[TypeNames.HANDLE_CHANGE_TEXTURE_MAPS];
  };

  toChangeLoadingProperyies: {
    type: typeof TypeNames.HANDLE_CHANGE_LOADING_PROPERYIES;
    payload: PayloadTypes[TypeNames.HANDLE_CHANGE_LOADING_PROPERYIES];
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

export type StatusesNamesType = 'isRandomColorChangingDisabled' | 'isMain3dSceneHidden' | 'isLoading';
export type StatusesType = {
  [Property in StatusesNamesType]: boolean;
};
export type LoadingPropertyiesType = {};
export type TextureMapsType = {
  [Property in 'avatar']: Texture | null;
};

export type AppInitialStateType = {
  themePropertyies: ThemeOptions;
  skills: SkillsType;
  loadingPercent: number;
  textureMaps: TextureMapsType;
  statuses: StatusesType;
  cursorColor: CursorColortype;
};
