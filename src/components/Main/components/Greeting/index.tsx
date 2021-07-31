import { Grid, makeStyles } from '@material-ui/core';
import { FC } from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(({ palette: { background } }) => ({
  '@global': {
    '@keyframes lines': {
      '100%': {
        strokeDashoffset: 3000
      }
    }
  },
  container: {
    '& .pasSvgContainer': {
      width:400,
      '& path': {
        fill: 'none',
        strokeMiterlimit: 10,
        strokeWidth: '5px',
        strokeLinecap: 'round',
        strokeDasharray: 1500
      }
    }
  },
  dashOffset2000Dasharray500: {
    strokeDashoffset: 2000,
    strokeDasharray: 500
  },

  dashOffset1000Dasharray1000: {
    strokeDashoffset: 1000,
    strokeDasharray: 1000
  },

  dashOffset1500Dasharray6000: {
    strokeDashoffset: 1500,
    strokeDasharray: 6000
  },

  dashOffset2050Dasharray250: {
    strokeDashoffset: 2050,
    strokeDasharray: 250
  },

  dashOffset1000: {
    strokeDashoffset: 1000
  },

  dashOffset1500Dasharray1500: {
    strokeDashoffset: 1500,
    strokeDasharray: 1500
  },

  mediumTurquoiseColor: {
    stroke: 'rgb(49, 191, 186)'
  },
  deepPink2Color: {
    stroke: 'rgb( 246, 9, 149)'
  },
  freeSpeechBlueColor: {
    stroke: 'rgb(88, 40, 215)'
  },
  goldenRodColor: {
    stroke: 'rgb(254, 219, 59)'
  },
  red3Color: {
    stroke: 'rgb(202, 02, 02)'
  },
  steelBlue3Color: {
    stroke: 'rgb(64, 179, 199)'
  },
  springGreen3Color: {
    stroke: 'rgb(6, 220, 69)'
  },
  blueLightVioletColor: {
    stroke: 'rgb(164, 9, 259)'
  },
  red2VioletColor: {
    stroke: 'rgb(244, 17, 103)'
  },
  dodgerBlue2Color: {
    stroke: 'rgb(26, 149, 219)'
  },
  lime2TurquoiseColor: {
    stroke: ' rgb(54, 229, 159)'
  },
  mediumSlateBlueColor: {
    stroke: 'rgb(106, 9, 249)'
  },
  delayOSec: {
    animation: 'lines 4s infinite'
  },
  delay1Sec: {
    animation: 'lines 4s infinite 1s'
  },
  delay2Sec: {
    animation: 'lines 4s infinite 2s'
  },

  delay3Sec: {
    animation: 'lines 4s infinite 3s'
  },
  delay4Sec: {
    animation: 'lines 4s infinite 4s'
  }
}));

const Greeting: FC = () => {
  const {
    container,
    red3Color,
    delayOSec,
    delay1Sec,
    delay2Sec,
    delay3Sec,
    delay4Sec,
    goldenRodColor,
    deepPink2Color,
    dashOffset1000,
    steelBlue3Color,
    dodgerBlue2Color,
    red2VioletColor,
    springGreen3Color,
    freeSpeechBlueColor,
    lime2TurquoiseColor,
    mediumTurquoiseColor,
    blueLightVioletColor,
    mediumSlateBlueColor,
    dashOffset2050Dasharray250,
    dashOffset2000Dasharray500,
    dashOffset1000Dasharray1000,
    dashOffset1500Dasharray6000,
    dashOffset1500Dasharray1500
  } = useStyles();

  const pasPathsArr = [
    {
      className: clsx(mediumTurquoiseColor, dashOffset2000Dasharray500, delay3Sec),
      d: 'm 140.94697,332.85968 c 2.8239,54.36145 15.41245,110.95995 0.55265,161.27013 l 96.596,-0.6064 C 249.52374,398.64614 213.55227,380.23145 319.41445,380.685 329.916,302.09148 269.91121,251.20839 230.13295,205.56993 l -88.72657,1.52707 c 98.77984,128.80942 140.46781,127.17194 -0.45941,125.76268 z'
    },
    {
      className: clsx(freeSpeechBlueColor, dashOffset1000Dasharray1000, delay1Sec),
      d: 'm 140.94697,330.743 c 2.07044,53.90451 15.33176,108.68589 0.55265,161.27013 29.46311,-3.78152 48.48215,-21.22874 96.596,-0.6064 7.27001,-39.16546 9.84756,-77.44958 -1.10981,-113.19156 45.21898,-19.98826 46.64782,12.45532 82.42864,0.35315 -0.98053,-15.33884 -9.6883,-23.80343 -0.88602,-47.84521 -45.81927,-27.83936 -59.06269,-84.72853 -88.39548,-127.26986 -30.80735,17.42161 -54.58594,-17.62472 -88.72657,1.52707 28.21945,42.5739 42.8393,90.73893 87.28906,126.64016 -24.17559,14.34742 -52.81693,15.80963 -87.74847,-0.87748 z'
    },

    {
      className: clsx(deepPink2Color, dashOffset1500Dasharray6000, delay2Sec),
      d: 'm 140.94697,325.85968 0.55265,161.27013 96.596,-0.6064 -1.10981,-113.19156 82.42864,0.35315 -0.88602,-47.84521 -88.39548,-127.26986 -88.72657,1.52707 87.28906,126.64016 z'
    },
    {
      className: clsx(freeSpeechBlueColor, dashOffset2050Dasharray250, delayOSec),
      d: 'm 140.94697,325.85968 0.55265,161.27013 96.596,-0.6064 -1.10981,-113.19156 82.42864,0.35315 -0.88602,-47.84521 -88.39548,-127.26986 -88.72657,1.52707 87.28906,126.64016 z'
    },

    {
      className: clsx(deepPink2Color, dashOffset1500Dasharray6000, delay1Sec),
      d: 'm 386.94647,394.10446 80.87405,-194.72163 91.98549,198.69158 z'
    },
    {
      className: clsx(goldenRodColor, dashOffset1000Dasharray1000, delay2Sec),
      d: 'm 370.30326,415.83733 -26,59 267,4 -49,-60 z'
    },
    {
      className: clsx(red3Color, dashOffset1000, delay1Sec),
      d: 'm 386.94647,394.10446 c 17.34479,-69.87525 49.93852,-130.18252 80.87405,-194.72163 55.02493,75.35412 37.11258,133.65469 91.98549,198.69158 z'
    },
    {
      className: clsx(steelBlue3Color, dashOffset1500Dasharray6000, delay2Sec),
      d: 'm 370.30326,415.83733 c -24.21154,32.97954 -31.89693,47.35423 -36.05533,69.40058 91.28956,5.3104 191.33457,-4.73714 269.79393,-3.34505 -39.1363,-110.53846 -111.21958,-35.1539 -233.7386,-66.05553 z'
    },
    {
      className: clsx(dashOffset2000Dasharray500, springGreen3Color, delay1Sec),
      d: 'm 386.94647,394.10446 c 17.34479,-69.87525 49.93852,-130.18252 80.87405,-194.72163 24.46507,83.7069 55.13214,122.9028 91.98549,198.69158 -60.58396,-7.4092 -118.84239,-10.04364 -172.85954,-3.96995 z'
    },
    {
      className: clsx(blueLightVioletColor, dashOffset2000Dasharray500, delay2Sec),
      d: 'm 370.87516,415.77545 c -18.32904,32.97954 -23.61705,46.92215 -37.02107,68.9685 91.28956,5.3104 180.87221,-3.24318 259.33157,-1.85109 0,0 -36.18192,-60.70827 -37.50883,-60.75396 z'
    },
    {
      className: clsx(deepPink2Color, dashOffset1500Dasharray6000, delay1Sec),
      d: 'm 661.65081,214.30258 2.0262,94.42707 94.93053,94.39214 95.47035,-0.77391 z'
    },
    {
      className: clsx(dashOffset2050Dasharray250, goldenRodColor, delay3Sec),
      d: 'm 695.01789,209.49258 70.10099,72.84772 106.25832,-1.94669 -1.65165,-72.73748 z'
    },
    {
      className: clsx(steelBlue3Color, dashOffset1000Dasharray1000, delay1Sec),
      d: 'm 668.58582,415.66414 0.50137,72.87304 198.00594,0.27175 -3.87987,-65.95101 z'
    },
    {
      className: clsx(dashOffset1000Dasharray1000, springGreen3Color, delay4Sec),
      d: 'm 661.65081,214.30258 c 1.24376,31.38704 8.27062,61.87207 2.0262,94.42707 34.57716,31.46405 66.5558,62.92809 94.93053,94.39214 33.06186,1.82098 69.63695,9.5397 95.47035,-0.77391 -37.38771,-34.86856 -83.72002,-65.12766 -114.3699,-107.01193 -22.41013,-30.62433 -50.27576,-57.06506 -78.05718,-81.03337 z'
    },
    {
      className: clsx(blueLightVioletColor, dashOffset1500Dasharray1500, delay2Sec),
      d: 'm 695.01789,209.49258 c 27.13887,23.7538 50.54063,48.0315 70.10099,72.84772 33.90896,-2.69727 64.76763,-9.53108 106.25832,-1.94669 2.79162,-24.23744 2.4597,-48.48272 -1.65165,-72.73748 -67.53967,13.02786 -117.05803,2.00664 -174.70766,1.83645 z'
    },
    {
      className: clsx(red2VioletColor, dashOffset1000, delay1Sec),
      d: 'm 674.08719,488.53718 c 121.061,-4.0991 132.00396,0.18117 198.00594,0.27175 4.6494,-22.84565 -0.24404,-44.30712 -3.87987,-65.95101 -110.42657,18.91002 -219.69796,-51.83483 -194.12607,65.67926 z'
    },

    {
      className: clsx(dodgerBlue2Color, dashOffset1000Dasharray1000, delay1Sec),
      d: 'm 661.65081,214.30258 c -5.17086,32.27867 -7.46848,64.05979 2.0262,94.42707 65.04103,33.54405 70.85634,63.22172 94.93053,94.39214 29.00724,-9.56058 63.17824,-8.59028 95.47035,-0.77391 -37.38771,-34.86856 -67.53319,-84.65059 -114.3699,-107.01193 -43.92941,-20.9733 -51.98156,-56.30004 -78.05718,-81.03337 z'
    },

    {
      className: clsx(lime2TurquoiseColor, dashOffset1000, delayOSec),
      d: 'm 705.01789,209.49258 c 20.67741,27.0066 30.93846,57.89954 70.10099,72.84772 33.90896,-2.69727 106.25832,-1.94669 106.25832,-1.94669 l -1.65165,-72.73748 c -65.64267,-9.04496 -116.11258,-8.99422 -174.70766,1.83645 z'
    },

    {
      className: clsx(mediumSlateBlueColor, dashOffset1500Dasharray6000, delay4Sec),
      d: 'm 672.08719,488.53718 c 124.49862,-2.55954 141.33155,4.35857 198.00594,0.27175 4.6494,-22.84565 0,0 -3.87987,-65.95101 -40.34203,-25.68705 -116.73634,16.27906 -191.39066,-1.95595 7.70712,21.782 0.8769,44.85105 -2.73541,67.63521 z'
    }
  ];

  return (
    <Grid container className={container}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={'0 0 900 900'} className={'pasSvgContainer'}>
        {pasPathsArr.map((props, idx) => (
          <path key={idx} {...props} />
        ))}
      </svg>
    </Grid>
  );
};

export default Greeting;
