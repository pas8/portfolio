import { makeStyles, Grid, Typography } from '@material-ui/core';
import { createContext, FC, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { useWindowSize } from 'react-use';
import { useState } from 'react';
import { MouseEventHandler } from 'react';
import { useAnimateCursor } from 'hooks/useAnimateCursor.hook';
import { getCursorColor ,getSphereCursorTitle} from 'store/modules/App/selectors';
import { HIDDEN, ACTIVE_CURSOR } from 'models/denotation';
import { useMapKeys } from 'hooks/useMapKeys.hook';

export const CursorContext = createContext({ mouseOverEvent: () => {}, mouseOutEvent: () => {} });

const useStyles = makeStyles(({ palette: { background, primary, secondary } }) => ({
  '@global': {
    '*': { cursor: 'none !important' },
    '@keyframes RotationRight': {
      '0%': {
        transform: 'rotate(0deg)'
      },

      '100%': {
        transform: 'rotate(1turn)'
      }
    },

    [`.${HIDDEN}`]: {
      display: 'none !important'
    },
    [`.${ACTIVE_CURSOR}`]: {
      // width: 48,
      borderRadius: '0',
      // height: 48,
      padding: 12,
      '& .content': {
        height: 96,
        width: 96,
        marginTop: -40,
        marginLeft: -40,
        display: 'flex !important',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '6100% 100%'
        // animation: 'cursorActiveAnimation 10s infinite'
      }
    }
  },
  dotContainer: {
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 100000,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
  },
  cursorDotContainer: {
    width: 8,
    '& .content': {
      display: 'none '
    },
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

  const VALUE_TO_ADD = 100 / 60;
  const [number, setNumber] = useState(0);

  const cursorColor = useSelector(getCursorColor);
  const sphereCursorTitle = useSelector(getSphereCursorTitle);
  
  const { cursorDotOutlinedContainer, cursorDotContainer, dotContainer } = useStyles();

  const dot = useRef<HTMLDivElement>(null)!;
  const dotOutline = useRef<HTMLDivElement>(null);
  const cursorContextValue = useAnimateCursor({ dot, dotOutline });

  useEffect(() => {
    const interval = setInterval(() => {
      !!dot?.current?.className?.search(ACTIVE_CURSOR) &&
        setNumber(prev => (prev + VALUE_TO_ADD > 100 ? 0 : prev + VALUE_TO_ADD));
    }, 42);
    return () => clearInterval(interval);
  }, []);

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
        <Grid className={'content sphereBackground'} style={{ backgroundPosition: `${number}% 0` }} justifyContent={'center'} alignItems={'center'} container>
          <Typography variant={'button'} color={'textPrimary'}>
            {sphereCursorTitle}
          </Typography>
        </Grid>
      </Grid>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorLayout;
