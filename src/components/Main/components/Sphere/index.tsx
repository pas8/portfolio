import { FC, useEffect, useRef } from 'react';
import { makeStyles, Grid, Typography, useTheme, useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';
import { useWindowScroll, useWindowSize } from 'react-use';

import { useSelector, useDispatch } from 'react-redux';

import { getCursorColor, getSkills } from 'store/modules/App/selectors';
import { toChangeStatuses } from 'store/modules/App/actions';

const useStyles = makeStyles(({ palette: { background } }) => ({}));

const Sphere: FC = () => {
  const { breakpoints, palette } = useTheme();
  const isSizeIsMd = useMediaQuery(breakpoints.only('md'));
  const isSizeIsLg = useMediaQuery(breakpoints.only('lg'));
  const isSizeIsXl = useMediaQuery(breakpoints.only('xl'));
  const isSizeIsSm = useMediaQuery(breakpoints.only('sm'));

  const {} = useStyles();
  const { y } = useWindowScroll();
  const { height } = useWindowSize();

  const ref = useRef<HTMLDivElement>();
  const dispatch = useDispatch();
  const skills = useSelector(getSkills);
  const cursorColor = useSelector(getCursorColor);

  const options = {
    textColour: palette.text.secondary,
    textHeight: isSizeIsXl ? 30 : isSizeIsLg ? 28 : isSizeIsMd ? 24 : isSizeIsSm ? 20 : 16,
    outlineColour: 'transparent',
    clickToFront: 600,
    depth: 0.99,
    zoomMin: 1,
    zoomMax: 1,
    outlineOffset: 20
    // interval:42,
    // padding:100,
  };

  // const isUserSeeTheSphere = (y + height) > (!ref?.current?.offsetTop ? y + height + 100 :   ref?.current?.offsetTop)
  // console.log(isUserSeeTheSphere)
  //   useEffect(() => {
  //     // console.log(isUserSeeTheSphere)
  // dispatch(toChangeStatuses({newStatuses:{isRandomColorChangingDisabled:isUserSeeTheSphere}}))
  // }  ,[isUserSeeTheSphere])

  useEffect(() => {
    //@ts-ignore
    TagCanvas.Start('myCanvas', '', options);
  }, [options]);

  return (
    <Grid id={'myCanvasContainer'} container justifyContent={'center'}>
      <canvas
        id={'myCanvas'}
        width={isSizeIsXl ? '742' : isSizeIsLg ? '516' : isSizeIsMd ? '480' : isSizeIsSm ? '360' : '500'}
        height={isSizeIsXl ? '700' : isSizeIsLg ? '460' : isSizeIsMd ? '400' : isSizeIsSm ? '300' : '460'}
      >
        <ul>
          {skills.map(skill => (
            <Typography key={skill.title}>
              <a href={skill.href}>{skill.title}</a>
            </Typography>
          ))}
        </ul>
      </canvas>
    </Grid>
  );
};

export default Sphere;
