import clsx from 'clsx';
import { FC } from 'react';
import { Grid, makeStyles, Typography, ButtonBase, useTheme } from '@material-ui/core';
import { SvgAnimationPropsType } from './types';
import { useSelector } from 'react-redux';
import { getCurrentSectionId, getIsSoundPaused, getSoundIdx } from 'store/modules/App/selectors';
import { useSample } from 'hooks/useSample';
import { ANIMATE } from 'models/denotation';

const useStyles = makeStyles(({ palette: { background, secondary, primary }, breakpoints }) => ({
  '@global': {
    '@keyframes 1PathAnimation': {
      '0%': {
        opacity: 1,
        strokeDashoffset: 0
      },
      // '4%': {
      //   opacity: 1
      // },
      // '96%': {
      //   opacity: 1
      // },
      '100%': {
        opacity: 1,
        strokeDashoffset: 420
      }
    },
    '@keyframes 2PathAnimation': {
      '0%': {
        strokeDashoffset: 0
      },
      '100%': {
        strokeDashoffset: 800
      }
    },
    '@keyframes 3PathAnimation': {
      '0%': {
        strokeDashoffset: 0
      },
      '100%': {
        strokeDashoffset: 1600
      }
    },
    '@keyframes 4PathAnimation': {
      '0%': {
        strokeDashoffset: 0
      },
      '100%': {
        strokeDashoffset: 2400
      }
    }
  },

  svgContainer: () => {
    const styles = {
      '& path': {
        fill: 'none'
      },
      '&:hover': {
        animation: 'racket 1s '

        // transform:'scaleY(0.4)'
      },
      '& .red': {
        strokeDasharray: 420
      },
      '& .1animate': {
        fill: 'red',
        animation: '1PathAnimation 8s infinite'
      },
      '& .2': {
        strokeDasharray: 800
      },

      [`& .2${ANIMATE}`]: {
        animation: '2PathAnimation 8s infinite'
      },

      '& .3': {
        strokeDasharray: 1600
      },

      [`& .3${ANIMATE}`]: {
        animation: '3PathAnimation 8s infinite'
      },

      '& .4': {
        strokeDasharray: 2400
      },
      [`& .4${ANIMATE}`]: {
        animation: '4PathAnimation 8s infinite'
      }
    };
    return styles;
  }
}));

const SvgAnimation: FC<SvgAnimationPropsType> = ({ className, id, viewBox, pathsArr }) => {
  const { palette } = useTheme();
  const soundIdx = useSelector(getSoundIdx);
  const currentSectionId = useSelector(getCurrentSectionId);
  const isSoundPaused = useSelector(getIsSoundPaused);

  const { svgContainer } = useStyles();

  const colorsArr = [
    'rgb(49, 191, 186)',
    'rgb( 246, 9, 149)',
    'rgb(88, 40, 215)',
    'rgb(254, 219, 59)',
    'rgb(202, 02, 02)',
    'rgb(64, 179, 199)',
    'rgb(6, 220, 69)',
    'rgb(164, 9, 259)',
    'rgb(244, 17, 103)',
    'rgb(106, 9, 249)',
    'rgb(54, 229, 159)',
    'rgb(26, 149, 219)',
    palette.secondary.main,
    palette.primary.main
  ];

  return (
    <Grid container className={className}>
      <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={viewBox} className={svgContainer}>
        {pathsArr.map((arr, index) =>
          arr.map((d, dIdx) => {
            const idx = index + 1;
            const key = `${id}-${idx}-${dIdx}`;
            const stroke = useSample(colorsArr);
            const className = `red ${
              idx > soundIdx || id !== currentSectionId || isSoundPaused ? '' : idx + ANIMATE
            }`;

            const pathProps = { key, d, stroke, className };
            console.log(pathProps, idx, soundIdx, id, currentSectionId, isSoundPaused);
            return <path {...pathProps}> </path>;
          })
        )}
      </svg>
    </Grid>
  );
};

export default SvgAnimation;
