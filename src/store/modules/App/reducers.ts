import { TypeNames } from './enums';
import { AppActionTypes, AppInitialStateType } from './types';

export const initialState: AppInitialStateType = {
  themePropertyies: {
    shape: { borderRadius: 8 },
    palette: {
      success: { main: '#4caf50' },
      type: 'dark',

      primary: {
        main: '#ecaf25'
      },
      secondary: {
        main: '#9e80fc'
      },
      background: {
        paper: '#282828',
        default: '#202020'
      }
    }
  }
};

export const AppReducer = (state = initialState, action: AppActionTypes): AppInitialStateType => {
  switch (action.type) {
    case TypeNames.HANDLE_CHANGE_THEME_PROPERTYIES: {
      return { ...state, themePropertyies: { ...state.themePropertyies, ...action.payload.themePropertyies } };
    }

    default:
      //@ts-ignore
      const x: never = action;
  }
  return state;
};
