import { DialogProps } from '@material-ui/core';
import { FC } from 'react';
import { AppInitialStateType } from 'store/modules/App/types';

export type RootStoreType = {
  app: AppInitialStateType;
};

export type HandleAddTipElementType = (param: { title: string; element: any; id: string }) => void;

export type FCCloseVideoButtonType = FC<{ onClose: DialogProps['onClose'] | any }>;
