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
  },

  statuses: {
    isRandomColorChangingDisabled: false,
    isMain3dSceneHidden: false,
    isLoading: !true,
    isSoundPaused: false
  },
  currentSectionId: '',
  cursorColor: '#ecaf25',
  skills: [
    { href: '#git_', title: 'Git' },
    { href: '#json_', title: 'JSON' },
    { href: '#html_', title: 'HTML' },
    { href: '#react_', title: 'React' },
    { href: '#npm_', title: 'npm' },
    { href: '#css_', title: 'CSS' },
    { href: '#js_', title: 'JavaScript' },
    { href: '#node.js_', title: 'Node_js' },
    { href: '#Inskspace_', title: 'Inskspace' },
    { href: '#Typescript_', title: 'Typescript' },
    { href: '#Next js_', title: 'Next_js' },
    { href: '#Redux_', title: 'Redux' },
    { href: '#JSS_', title: 'JSS' },
    { href: '#SCSS_', title: 'SCSS' },
    { href: '#MaterialUi_', title: 'Material ui' },
    { href: '#Lodash_', title: 'Lodash' },
    { href: '#Mongo_', title: 'Mongo' },
    { href: '#Express_', title: 'Express' },
    { href: '#Three_js_', title: 'Three_js' },
    { href: '#Bem_', title: 'BEM' }
  ],
  loadingPercent: 0,
  soundIdx: 2,
  textureMaps: {
    skillsTextureArr: [],
    avatar: null
  }
};

export const AppReducer = (state = initialState, action: AppActionTypes): AppInitialStateType => {
  switch (action.type) {
    case TypeNames.HANDLE_CHANGE_THEME_PROPERTYIES: {
      return { ...state, themePropertyies: { ...state.themePropertyies, ...action.payload.themePropertyies } };
    }

    case TypeNames.HANDLE_CHANGE_STATUSES: {
      return { ...state, statuses: { ...state.statuses, ...action.payload.newStatuses } };
    }

    case TypeNames.HANDLE_CHANGE_LOADING_PROPERYIES: {
      return {
        ...state,
        statuses: { ...state.statuses, isLoading: action.payload.loadingProperyies.isLoading },
        loadingPercent: action.payload.loadingProperyies.percent
      };
    }

    case TypeNames.HANDLE_CHANGE_CURSOR_COLOR:
    case TypeNames.HANDLE_CHANGE_CURRENT_SECTION_ID:
    case TypeNames.HANDLE_CHANGE_SOUND_IDX:
    case TypeNames.HANDLE_CHANGE_TEXTURE_MAPS: {
      return { ...state, ...action.payload };
    }

    default:
      //@ts-ignore
      const x: never = action;
  }
  return state;
};
