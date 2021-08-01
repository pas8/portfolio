import { FC, useEffect, useRef } from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { useWindowScroll, useWindowSize } from 'react-use';

import { useSelector, useDispatch } from 'react-redux';

import { getCursorColor, getSkills } from 'store/modules/App/selectors';
import { toChangeStatuses } from 'store/modules/App/actions';

const useStyles = makeStyles(({ palette: { background } }) => ({}));

const Sphere: FC = () => {
  const {} = useStyles();
  const { y } = useWindowScroll();
  const { height } = useWindowSize();

  const ref = useRef<HTMLDivElement>();
  const dispatch = useDispatch();
  const skills = useSelector(getSkills);
  const cursorColor = useSelector(getCursorColor);

  const options = {
    textColour: cursorColor,
    textHeight: 29,
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
    <Grid
      id={'myCanvasContainer'}
      //  ref={ref}
    >
      <canvas id={'myCanvas'} width="800" height="500">
        <ul>
          {skills.map(skill => (
            <Typography key={skill.title}>
              <a>{skill.title}</a>
            </Typography>
          ))}
        </ul>
      </canvas>
    </Grid>
  );
};

export default Sphere;
