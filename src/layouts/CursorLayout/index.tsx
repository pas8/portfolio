import { makeStyles, Grid } from '@material-ui/core';
import { FC, useRef } from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getCursorColor } from 'store/modules/App/selectors';
import { useWindowSize } from 'react-use';
import { useState } from 'react';
import { MouseEventHandler } from 'react';
import { useAnimateCursor } from 'hooks/useAnimateCursor.hook';

const useStyles = makeStyles(({ palette: { background ,primary,secondary} }) => ({
  '@global': {
    '*': { cursor: 'none' },
    '@keyframes RotationRight': {
      '0%': {
        transform: 'rotate(0deg)'
      },

      '100%': {
        transform: 'rotate(1turn)'
      }
    }
  },
  dotContainer: {
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
  },
  cursorDotContainer: {
    width: 8,
    borderRadius: '50%',
    height: 8,
    background:secondary.main
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
  useAnimateCursor({ dot, dotOutline });

  return (
    <>
      <Grid ref={dotOutline} className={clsx(cursorDotOutlinedContainer, dotContainer)}>
        <Grid>
          <svg width={"42"} height={"42"} viewBox={"0 0 37 36"} xmlns={"http://www.w3.org/2000/svg"}>
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
      <Grid ref={dot} className={clsx(cursorDotContainer, dotContainer)} /> {children}
    </>
  );
};

export default CursorLayout;
