import { FC, useEffect } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getSkills } from 'store/modules/App/selectors';

const Sphere: FC = () => {
  const skills = useSelector(getSkills);

  useEffect(() => {
    const options = {
      textColour: '#fff',
      textHeight: 20,
      // height:
      depth: 0.99
    };

    //@ts-ignore
    TagCanvas.Start('myCanvas', '', options);
    // TagCanvas.wheelZoom = false;
    // TagCanvas.textFont = 'Raleway, sans-serif';
    // TagCanvas.textColour = 'white';
    // TagCanvas.textHeight = 26;
    // TagCanvas.outlineMethod = 'size';
    // TagCanvas.outlineIncrease = 10;
    // TagCanvas.maxSpeed = 0.09;
    // TagCanvas.minBrightness = 0.2;
    // TagCanvas.depth = 0.92;
    // TagCanvas.pulsateTo = 0.6;
    // TagCanvas.initial = [0.1, -0.1];
    // TagCanvas.decel = 0.98;
    // TagCanvas.reverse = true;
    // TagCanvas.hideTags = false;
    // TagCanvas.shadow = false;
    // TagCanvas.shadowBlur = 3;
    // TagCanvas.weight = false;
    // TagCanvas.imageScale = null;
    // TagCanvas.fadeIn = 1000;
    // TagCanvas.clickToFront = 600;
    // TagCanvas.w
    try {
    } catch (e) {
      // document.getElementById('myCanvasContainer').style.display = 'none';
    }
  }, []);

  return (
    <Grid id={'myCanvasContainer'}>
      <canvas id={'myCanvas'}>
        <ul>
          {skills.map(skill => (
            <li key={skill.title}>
              <a href={skill.href}>{skill.title}</a>
            </li>
          ))}
        </ul>
      </canvas>
    </Grid>
  );
};

export default Sphere;
