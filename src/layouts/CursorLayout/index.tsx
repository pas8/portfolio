import { makeStyles, Grid, Typography } from '@material-ui/core';
import { createContext, FC, useRef } from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getCursorColor } from 'store/modules/App/selectors';
import { useWindowSize } from 'react-use';
import { useState } from 'react';
import { MouseEventHandler } from 'react';
import { useAnimateCursor } from 'hooks/useAnimateCursor.hook';
import { HIDDEN, ACTIVE_CURSOR } from 'models/denotation';

export const CursorContext = createContext({ mouseOverEvent: () => {}, mouseOutEvent: () => {} });

const useStyles = makeStyles(({ palette: { background, primary, secondary } }) => ({
  '@global': {
    '*': { cursor: 'none' },
    '@keyframes RotationRight': {
      '0%': {
        transform: 'rotate(0deg)'
      },

      '100%': {
        transform: 'rotate(1turn)'
      }
    },

    '@keyframes cursorActiveAnimation': {
      '0%': {
        backgroundPosition: '0 0'
      },

      '100%': {
        backgroundPosition: '100% 0'
      }
    },

    [HIDDEN]: {
      display: 'none !important'
    },
    [ACTIVE_CURSOR]: {
      width: 48,
      borderRadius: '0',
      height: 48,
      '& .content': {
        display: 'block !important',
        backgroundImage: 'url(https://about.mav.farm/sprites/cursor-sphere-sprite.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 0',
        backgroundSize: '6100% 100%',
        animation: 'cursorActiveAnimation 2s linear infinite'
      }
    }
  },
  dotContainer: {
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 1000,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
  },
  cursorDotContainer: {
    width: 8,
    borderRadius: '50%',
    height: 8,
    background: secondary.main
  },
  cursorDotOutlinedContainer: {
    '& div': {
      animation: 'RotationRight 8s linear infinite'
    }
  }
}));

const CursorLayout: FC = ({ children }) => {
  const { height, width } = useWindowSize();

  const cursorColor = useSelector(getCursorColor);
  const { cursorDotOutlinedContainer, cursorDotContainer, dotContainer } = useStyles();

  const dot = useRef<HTMLDivElement>(null)!;
  const dotOutline = useRef<HTMLDivElement>(null)!;
  const cursorContextValue = useAnimateCursor({ dot, dotOutline });

  return (
    <CursorContext.Provider value={cursorContextValue}>
      <Grid ref={dotOutline} className={clsx(cursorDotOutlinedContainer, dotContainer)}>
        <Grid>
          <svg width={'42'} height={'42'} viewBox={'0 0 37 36'} xmlns={'http://www.w3.org/2000/svg'}>
            <path
              stroke={cursorColor}
              stroke-width={'1.5'}
              d={
                'M18.5 32.093l-7.593 2.174-3.034-7.292-6.434-4.58 3.809-6.92-.43-7.886 7.784-1.336L18.5 1l5.898 5.253 7.784 1.336-.43 7.886 3.81 6.92-6.435 4.58-3.034 7.292z'
              }
              fill={'none'}
              fill-rule={'evenodd'}
            ></path>
          </svg>
        </Grid>
      </Grid>
      <Grid ref={dot} className={clsx(cursorDotContainer, dotContainer)}>
        <Grid className={'content'}>
          <Typography variant={'button'} color={'textPrimary'}>
            Open
          </Typography>
        </Grid>
      </Grid>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorLayout;
