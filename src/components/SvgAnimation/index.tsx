import { FC } from 'react';
import { Grid, makeStyles, Typography, ButtonBase, useTheme } from '@material-ui/core';
import { SvgAnimationPropsType } from './types';
import { useSelector } from 'react-redux';
import { getCurrentSectionId, getIsSoundPaused, getSoundIdx } from 'store/modules/App/selectors';
import { useSample } from 'hooks/useSample';
import { ANIMATE, pathsClassName, KEY_FRAMES_OF } from 'models/denotation';
import { useMapValues } from 'hooks/useMapValues';
import { useGetColorsArr } from 'hooks/useGetColorsArr.hook';

const useStyles = makeStyles(({ palette: { background, secondary, primary }, breakpoints }) => ({
  '@global': {
    '@keyframes racket': {
      '0%': {
        transform: 'scale3d(1,1,1)'
      },

      '30%': {
        transform: 'scale3d(0.75,1.25,1)'
      },
      '40%': {
        transform: 'scale3d(1.15,0.85,1)'
      },
      '50%': {
        transform: 'scale3d(0.95,1.05,1)'
      },
      '65%': {
        transform: 'scale3d(1.1,0.8,1)'
      },
      '75%': {
        transform: 'scale3d(1.05,0.95,1)'
      },

      '100%': {
        transform: 'scaleY(1)'
      }
    },
    [`@keyframes ${KEY_FRAMES_OF}_${pathsClassName.FIRST}_${ANIMATE}`]: {
      '0%': {
        opacity: 0,
        strokeDashoffset: 0
      },
      '4%': {
        opacity: 1
      },
      '96%': {
        opacity: 1
      },
      '100%': {
        opacity: 0,
        strokeDashoffset: 2000
      }
    },
    [`@keyframes ${KEY_FRAMES_OF}_${pathsClassName.SECOND}_${ANIMATE}`]: {
      '0%': {
        strokeDashoffset: 0,
        opacity: 1
      },
      '100%': {
        opacity: 1,
        strokeDashoffset: 4000
      }
    },
    [`@keyframes ${KEY_FRAMES_OF}_${pathsClassName.THIRD}_${ANIMATE}`]: {
      '0%': {
        strokeDashoffset: 6000,
        opacity: 1
      },
      '100%': {
        strokeDashoffset: 0,
        opacity: 1
      }
    },

    [`@keyframes ${KEY_FRAMES_OF}_${pathsClassName.FOUR}_${ANIMATE}`]: {
      '0%': {
        strokeDashoffset: 8000,

        opacity: 1
      },
      '100%': {
        strokeDashoffset: 0,
        opacity: 1
      }
    }
  },

  svgContainer: ({ soundIdx }: { soundIdx: number }) => {
    const styles = {
      '& path': {
        fill: 'none'
      },
      '& .NOT_ACTIVE': {
        opacity: 0.42
      },

      [`& .${pathsClassName.FIRST}`]: {
        strokeDasharray: 2000
      },
      [`& .${pathsClassName.FIRST}_${ANIMATE}`]: {
        animation: `${KEY_FRAMES_OF}_${pathsClassName.FIRST}_${ANIMATE} ${8 / soundIdx}s infinite`
      },
      [`& .${pathsClassName.SECOND}`]: {
        strokeDasharray: 4000
      },
      [`& .${pathsClassName.SECOND}_${ANIMATE}`]: {
        animation: `${KEY_FRAMES_OF}_${pathsClassName.SECOND}_${ANIMATE} ${8 / soundIdx}s infinite `
      },
      [`& .${pathsClassName.THIRD}`]: {
        strokeDasharray: 3200
      },
      [`& .${pathsClassName.THIRD}_${ANIMATE}`]: {
        animation: `${KEY_FRAMES_OF}_${pathsClassName.THIRD}_${ANIMATE} ${8 / soundIdx}s infinite  `
      },
      [`& .${pathsClassName.FOUR}`]: {
        strokeDasharray: 1600
      },
      [`& .${pathsClassName.FOUR}_${ANIMATE}`]: {
        animation: `${KEY_FRAMES_OF}_${pathsClassName.FOUR}_${ANIMATE} ${8 / soundIdx}s infinite  `
      }
    };
    return styles;
  }
}));

const SvgAnimation: FC<SvgAnimationPropsType> = ({ className, id, viewBox, pathsArr, onClick, children, svgId }) => {
  const soundIdx = useSelector(getSoundIdx);
  const currentSectionId = useSelector(getCurrentSectionId);
  const isSoundPaused = useSelector(getIsSoundPaused);
  const { svgContainer } = useStyles({ soundIdx });
  const colorsArr  = useGetColorsArr();

  const pathsClassNameArr = Object.values(pathsClassName);

  return (
    <Grid container className={className}>
      <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={viewBox} className={svgContainer} onClick={onClick} id={svgId}>
        {pathsArr.map((arr, index) =>
          arr.map((d, dIdx) => {
            const idx = index + 1;
            const key = `${id}-${idx}-${dIdx}`;
            const stroke = useSample(colorsArr);
            const className = `${pathsClassNameArr[index]} ${
              idx > soundIdx || id !== currentSectionId || isSoundPaused
                ? 'NOT_ACTIVE'
                : `${pathsClassNameArr[index]}_${ANIMATE}`
            }`;

            const pathProps = { key, d, stroke, className };
            return <path {...pathProps}> </path>;
          })
        )}
      </svg>
      {children}
    </Grid>
  );
};

export default SvgAnimation;
