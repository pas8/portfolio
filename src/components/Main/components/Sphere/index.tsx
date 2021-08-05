import { FC, useEffect } from 'react';
import { Grid, Typography, useTheme, useMediaQuery } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getSkills } from 'store/modules/App/selectors';

const Sphere: FC = () => {
  const { breakpoints, palette } = useTheme();
  const isSizeIsMd = useMediaQuery(breakpoints.only('md'));
  const isSizeIsLg = useMediaQuery(breakpoints.only('lg'));
  const isSizeIsXl = useMediaQuery(breakpoints.only('xl'));
  const isSizeIsSm = useMediaQuery(breakpoints.only('sm'));
  const isSizeSmall = useMediaQuery(breakpoints.down('sm'));

  const skills = useSelector(getSkills);

  const options = {
    textColour: palette.text.secondary,
    textHeight: isSizeIsXl ? 32 : isSizeIsLg ? 28 : isSizeIsMd ? 22 : isSizeIsSm ? 26 : 24,
    outlineColour: 'transparent',
    clickToFront: 600,
    depth: 0.99,
    zoomMin: 1,
    zoomMax: 1,
    outlineOffset: 20
  };
  useEffect(() => {
    //@ts-ignore
    TagCanvas.Start('myCanvas', '', options);
  }, [options]);

  const DIVISION_COEFFICIENT = isSizeSmall ? 1 : 2
  //@ts-ignore
  const width = document?.getElementById('containerOfMYSKILLS')?.offsetWidth / DIVISION_COEFFICIENT

  return (
    <Grid id={'myCanvasContainer'}>
      <canvas id={'myCanvas'} width={width} height={width * .92}>
        <ul>
          {skills.map((skill, idx) => (
            <Typography key={`${skill.title}_${idx}`}>
              <a href={skill.href}>{skill.title}</a>
            </Typography>
          ))}
        </ul>
      </canvas>
    </Grid>
  );
};

export default Sphere;
