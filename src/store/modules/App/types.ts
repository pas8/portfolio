import { ThemeOptions } from '@material-ui/core';
import { Texture } from 'three';
import { $Values, Optional } from 'utility-types';
import { TypeNames } from './enums';

export type PayloadTypes = {
  [TypeNames.HANDLE_CHANGE_THEME_PROPERTIES]: {
    themeProperties: ThemeOptions;
  };
  [TypeNames.HANDLE_CHANGE_CURSOR_COLOR]: {
    cursorColor: CursorColortype;
  };

  [TypeNames.HANDLE_CHANGE_STATUSES]: {
    newStatuses: Optional<StatusesType>;
  };
  [TypeNames.HANDLE_CHANGE_LOADING_PROPERTIES]: {
    loadingProperties: { percent: number; isLoading: boolean };
  };

  [TypeNames.HANDLE_CHANGE_TEXTURE_MAPS]: {
    textureMaps: TextureMapsType;
  };
  [TypeNames.HANDLE_CHANGE_CURRENT_SECTION_ID]: {
    currentSectionId: string;
  };
  [TypeNames.HANDLE_CHANGE_SOUND_IDX]: {
    soundIdx: number;
  };

  [TypeNames.HANDLE_CHANGE_SPHERE_CURSOR_TITLE]: {
    sphereCursorTitle: string;
  };
  
};

export type ActionsValueTypes = {
  toChangeSphereCursorTitle: {
    type: typeof TypeNames.HANDLE_CHANGE_SPHERE_CURSOR_TITLE;
    payload: PayloadTypes[TypeNames.HANDLE_CHANGE_SPHERE_CURSOR_TITLE];
  };
  toChangeSoundIdx: {
    type: typeof TypeNames.HANDLE_CHANGE_SOUND_IDX;
    payload: PayloadTypes[TypeNames.HANDLE_CHANGE_SOUND_IDX];
  };

  toChangeCurrentSectionId: {
    type: typeof TypeNames.HANDLE_CHANGE_CURRENT_SECTION_ID;
    payload: PayloadTypes[TypeNames.HANDLE_CHANGE_CURRENT_SECTION_ID];
  };

  toChangethemeProperties: {
    type: typeof TypeNames.HANDLE_CHANGE_THEME_PROPERTIES;
    payload: PayloadTypes[TypeNames.HANDLE_CHANGE_THEME_PROPERTIES];
  };
  toChangeTextureMaps: {
    type: typeof TypeNames.HANDLE_CHANGE_TEXTURE_MAPS;
    payload: PayloadTypes[TypeNames.HANDLE_CHANGE_TEXTURE_MAPS];
  };

  toChangeLoadingProperties: {
    type: typeof TypeNames.HANDLE_CHANGE_LOADING_PROPERTIES;
    payload: PayloadTypes[TypeNames.HANDLE_CHANGE_LOADING_PROPERTIES];
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

export type StatusesNamesType = 'isRandomColorChangingDisabled' | 'isMain3dSceneHidden' | 'isLoading' | 'isSoundPaused' | 'isTipsLayoutHidden' 
export type StatusesType = {
  [Property in StatusesNamesType]: boolean;
};
export type LoadingPropertyiesType = {};
export type TextureMapsType = {
  [Property in 'avatar']: Texture | null;
} & {
  skillsTextureArr: (Texture | null)[];
};

export type AppInitialStateType = {
  themeProperties: ThemeOptions;
  skills: SkillsType;
  loadingPercent: number;
  currentSectionId:string ;
  sphereCursorTitle:string ;
  soundIdx:number;
  textureMaps: TextureMapsType;
  statuses: StatusesType;
  cursorColor: CursorColortype;
};
