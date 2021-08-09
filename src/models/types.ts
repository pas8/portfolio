import { AppInitialStateType } from 'store/modules/App/types';

export type RootStoreType = {
  app: AppInitialStateType;
};

export type HandleAddTipElementType = (param: { title: string; element: any; id: string }) => void;
