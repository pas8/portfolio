import { FC, useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { getCursorColor } from 'store/modules/App/selectors';
import SectionContainer from 'components/SectionContainer';

import CursorButton from 'components/CursorButton';
import { useStyles } from '../Greeting';
import Sphere from '../Sphere/index';

const MoreSkillsDialog = dynamic(() => import('./components/MoreSkillsDialog/index'), { ssr: false });


const useLocalStyles = makeStyles(({ palette: { background } }) => ({
  containerOfWHOIAM: {
    width: 920,
    '& path': {
      strokeWidth: '4px'
    }
  },
  container: {
    marginTop: 100,
    marginBottom: 100
  }
}));

const MySkills: FC = () => {
  const {
    red3Color,
    delayOSec,
    delay1Sec,
    delay2Sec,
    delay3Sec,
    delay4Sec,
    containerOfHI,
    containerOfIM,
    comaContainer,
    containerOfPAS,
    deepPink2Color,
    dashOffset1000,
    goldenRodColor,
    steelBlue3Color,
    red2VioletColor,
    dodgerBlue2Color,
    orange2GoldColor,
    containerOfWEBDEV,
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

  const { containerOfWHOIAM, container } = useLocalStyles();
  const cursorColor = useSelector(getCursorColor);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = (e?: any) => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <SectionContainer className={container}>
        <Grid className={containerOfWHOIAM}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 742 420" className={'svgContainer'}>
            <path
              className={clsx(red2VioletColor, dashOffset2000Dasharray500, delay3Sec)}
              d="M631.33 324.33l-29.51-30.24.27-27.35.27-27.34 57.57 57.58 57.58 57.58h-56.67zM602.08 385.12l.28-20.96 58.84-.26 58.84-.26.01 17.43c0 9.59.3 19.14.64 21.22l.62 3.8h-119.5zM636.15 260.04c-12.2-12.15-22.18-22.44-22.18-22.88 0-.43 23.87-.78 53.04-.78h53.03v44.44h-24.6c-13.53 0-27.42.3-30.86.66l-6.26.65zM456.37 320.56c0-46.49.16-84.33.36-84.1.43.51 129.88 165.56 131.25 167.35.77 1-12.45 1.26-65.32 1.26h-66.29z"
            />
            <path
              className={clsx(steelBlue3Color, dashOffset1500Dasharray6000, delay2Sec)}
              d="M387.9 321.23c0-46.11.34-83.83.76-83.81.7.03 129.06 163.1 130.86 166.24.69 1.2-9 1.41-65.4 1.41H387.9zM311.82 405.42c-.38-.37-.7-26.75-.7-58.6V288.9h53.56l-.26 58.34-.26 58.34-25.83.27c-14.2.14-26.13-.05-26.51-.43zM311.13 257.59v-21.21h53.54v42.42h-53.54zM233.03 402.8a25043.68 25043.68 0 00-52.8-72.53l-33.6-46-.33-23.95-.33-23.95h47.28l-.7 21.22c-.38 11.67-.46 21.21-.17 21.21.3 0 6.91-9.54 14.7-21.21l14.17-21.21h58.62l-3.74 5.8c-2.05 3.2-12.77 20.08-23.81 37.52l-20.08 31.7 16.57 26.38c9.12 14.5 22.54 35.81 29.82 47.34l13.25 20.96h-56.41zM145.46 354.56c0-28.33.18-51.51.39-51.51.21 0 9.53 12.2 20.7 27.11l20.33 27.12v48.8h-41.41zM2.02 384.87v-21.22H119.2v13.49c0 7.42.3 16.96.65 21.21l.65 7.73H2.02zM31.02 324.85l-29-29.72v-55.3l32.07 31.94c17.64 17.57 43.44 43.38 57.32 57.37l25.25 25.42H60.02zM48.4 273.14a1009.6 1009.6 0 01-22.35-22.87l-13.15-13.9h106.3v44.45H94.6c-13.53 0-27.39.3-30.8.65l-6.2.65zM132.45 85.36V1h52.7v168.7h-52.7zM66.94 118.62v-50.5l12.78 8.18 12.78 8.16 12.67-7.96c6.97-4.37 13.07-7.95 13.57-7.95.49 0 .9 22.63.9 50.28v50.3h-52.7zM0 85.36V1h52.7v168.7H0zM79.18 56.44l-12.24-9.22V1h52.69V48.3l-13 8.68c-7.15 4.77-13.5 8.68-14.1 8.68-.62 0-6.62-4.15-13.35-9.22zM219.3 84.85V0h54.57l.34 33.05.34 33.05 24.73-32.3L324 1.53l27.28-.77c15-.42 29.7-.65 32.68-.5l5.4.26-57.7 68.18-57.68 68.19-.04 16.41-.04 16.42h-54.6z"
            />

            <path
              className={clsx(goldenRodColor, dashOffset2050Dasharray250, delayOSec)}
              d="M609.92 241.9l115.15 115.17c-80.85 2.33-133.21-29.56-115.15-115.16z"
            />
            <path
              className={clsx(red3Color, dashOffset1500Dasharray6000, delayOSec)}
              d="M609.65 387.63c-5.99-37.1 117.95-33.06 117.97-4.05 6.5 40.78-22.61 25.01-58.5 25.01-31.93-3.02-59.95 15.71-59.47-20.96zM621.54 239.67c25.7-.82 47.2-.89 71.23-.84 42.92-3.26 41.76 47.78 22.65 45.1-13.53 0-39.83-.3-43.27.06-17.92-2.92-40.4-31.67-50.6-44.32zM475.25 336.9c7.34-45.9-11.15-98.16-10.96-97.93 8.1-4.4 157.25 148.03 131.25 167.35-1.01.76-12.44 1.26-65.31 1.26h-66.3z"
            />
            <path
              className={clsx(red2VioletColor, dashOffset2000Dasharray500, delay3Sec)}
              d="M396.22 239.93C434.2 241 546.32 403.61 527.1 406.17c-1.38.18-9 1.41-65.41 1.41h-66.22c16.78-57.26 6.58-111.02.76-167.65zM319.38 407.93c-.38-.38-.69-26.75-.69-58.6V291.4h26.78c44.98-5.8 43.43 116.5.43 116.94-14.2.15-26.14-.04-26.52-.42zM318.7 260.1v-21.21h26.76c39.02-4.64 39.02 42.42 0 42.42H318.7zM154.2 286.77l-.67-47.89c49.43-4.66 41.68 4.71 47.02 42.65 28.69-1.37 31.62-16.08 28.26-42.64h58.63c-6.2 26.95-.25 55.62-47.64 75.02 45.51 34.78 57.92 59.97 59.64 94.68h-56.4c-11.87-50.42-63.14-86.62-88.83-121.82zM153.42 305.56c48.96 54.77 104.79 117.05-.4 103.03 1.1-34.28-1.54-68.81.4-103.03zM192.71 3.52v168.7c-17.45 0-66.5 10.9-52.7 0 16.19-3.16-30.84-168.7 52.7-168.7zM74.5 70.64c23.74 20.52 27.27 10.47 51.8.41 1.37 35.4-14.46 57.18.9 100.58-17.57 0-45.63 17.57-52.7 0-11.35-33.04-10.89-66.73 0-101zM7.57 3.52c25.86-2.42 57.57-6.54 52.7 0-13.85 49.38-23.17 120.24 0 168.7 4.98 10.8-19.02 5.24-52.7 0-6.83-57.34-12.9-114.55 0-168.7z"
            />
            <path
              className={clsx(lime2TurquoiseColor, dashOffset1500Dasharray6000, delay2Sec)}
              d="M74.5 49.73c12.28-17.04 6.19-31.63 0-46.21 74.7-10.05 88.03 38.06 25.59 64.65-9.48-5.91-16.1-11.3-25.59-18.44zM241 3.65c24.25 34.57 40.32-11.94 40.77 31.9l.93 18.27C324.18 1.26 351.76-1.6 371.05 1.89c30.16 1.92 33.6 25.36 16.48 34.86-49.3 27.38-82.39 46.08-103.42 83.97-12.84 16.5-18.97 33.37-2.64 51.5 12.96 13.37-14.48 4.9-42.35.75-34.15 0-17.47-179.55 1.88-169.32zM14.9 239.85l115.16 115.17C49.2 357.34-3.16 325.46 14.9 239.85z"
            />
            <path
              className={clsx(orange2GoldColor, dashOffset1500Dasharray6000, delay4Sec)}
              d="M14.63 385.58c-5.98-37.11 117.95-33.06 117.97-4.05 6.5 40.77-22.6 25-58.49 25-31.93-3.02-59.95 15.72-59.48-20.95zM26.52 237.62c25.7-.83 47.2-.89 71.23-.85 42.93-3.25 41.76 47.79 22.65 45.1-13.53 0-39.83-.3-43.27.06-17.92-2.92-40.4-31.67-50.6-44.31z"
            />

            <path
              className={clsx(red3Color, dashOffset1000Dasharray1000, delay3Sec)}
              d="M604.14 241.9c16.96 16.98 67.33 17.7 50.9 50.91-13.44 27.15 42.83 42.84 64.25 64.26-80.86 2.33-133.22-29.56-115.15-115.16zM603.86 387.63c-23.04-30.54 16.33-51.8 117.97-4.05 46.64 29.59-19.75 24.43-58.49 25.01-35.94-1.44-47.42 4-59.48-20.96z"
            />
            <path
              className={clsx(steelBlue3Color, dashOffset1500Dasharray6000, delay4Sec)}
              d="M615.75 239.67c25.7-.82 47.2-.89 71.24-.84 42.92-3.26 41.76 47.78 22.64 45.1-13.53 0-39.83-.3-43.27.06 17.13-15.98-20.3-39.16-50.6-44.32z"
            />
            <path
              className={clsx(blueLightVioletColor, dashOffset2000Dasharray500, delay1Sec)}
              d="M478.51 340.47c10.2-45.61-45.8-110.36-20-101.5 21.27.24 157.24 148.03 131.25 167.35-12.41 6.23-18.07-10.39-68.45-9.3-13.38.28-27.9 8.42-63.16 10.56-26.77 2.16 15.2-44.03 20.36-67.11z"
            />
            <path
              className={clsx(red3Color, dashOffset1000Dasharray1000, delay3Sec)}
              d="M372.2 407.93c1.05-41.07 11.6-71.53.7-116.52h-26.78c-44.98-5.8-43.43 116.5-.43 116.94 14.2.15 26.13-.04 26.51-.42zM372.9 238.89h-26.78c-39.01-4.64-39.01 42.42 0 42.42h26.77c15.3-23.9 0-28.28 0-42.42zM148.42 286.77l-.67-47.89c49.43-4.66 40.64 17.46 45.98 55.4 28.69-1.37 32.66-28.83 29.3-55.4h58.62c-.54 37.28 25.65 102.9-47.63 75.03-3.93 59.67 42.9 67.52 59.64 94.68 12.27 16.11-39.49 11.63-56.41 0-57.57-48.78-64.19-86.58-88.83-121.82zM147.63 305.56c22.64 40.42 14.56 59.65 67.9 103.82 7.28 6.04-50.92 3.64-68.29-.79 1.1-34.28-1.55-68.81.39-103.03zM4.21 3.52v168.7c17.46 0 66.5 10.9 52.7 0C-3 122.29 87.75 3.52 4.2 3.52z"
            />
            <path
              className={clsx(goldenRodColor, dashOffset2050Dasharray250, delayOSec)}
              d="M122.42 70.64c-23.73 20.52-27.26 10.47-51.8.41-36.8 32.62-12.85 55.03-.9 100.58 16.24-35.06 45.56 15.46 52.7 0 12.54-50 14.52-118.6 0-101z"
            />
            <path
              className={clsx(lime2TurquoiseColor, dashOffset1500Dasharray6000, delay2Sec)}
              d="M189.36 3.52c-25.86-2.42-57.57-6.54-52.7 0 24.08 41.06 23.24 120.18 0 168.7-4.98 10.8 19.01 5.24 52.7 0 6.82-57.34 12.9-114.55 0-168.7zM122.42 49.73c-20.88-17.04-26.94-22.89 0-46.21C47.72-6.53 34.4 41.58 96.84 68.17c9.47-5.91 16.1-11.3 25.58-18.44zM235.21 3.65c50.16 3.14 43.02-13.83 42.97 30.63l-1.27 19.54C318.4 1.26 345.98-1.6 365.26 1.89c30.16 1.92 33.6 25.36 16.49 34.86-33.75 22.7-71 34.49-108.8 96.32 46.86 54-22.92 46.31-39.61 39.9-34.15 0-17.48-179.55 1.87-169.32z"
            />
            <path
              className={clsx(deepPink2Color, dashOffset1500Dasharray6000, delay1Sec)}
              d="M421.08 351.73c10.2-45.6-45.8-110.36-20-101.5 21.27.24 157.24 148.03 131.25 167.35-12.41 6.23-18.07-10.39-68.45-9.3-13.38.28-27.9 8.42-63.16 10.56-26.77 2.16 15.2-44.03 20.36-67.11z"
            />
            <path
              className={clsx(steelBlue3Color, dashOffset1500Dasharray6000, delay4Sec)}
              d="M6.65 241.68c16.97 16.97 67.34 17.7 50.9 50.9-13.43 27.16 42.84 42.85 64.25 64.27C40.95 359.17-11.4 327.29 6.65 241.68zM6.38 387.4c-23.04-30.53 16.32-51.8 117.97-4.05 46.63 29.6-19.76 24.43-58.49 25.01-35.94-1.43-47.42 4.01-59.48-20.96z"
            />
            <path
              className={clsx(red3Color, dashOffset1000Dasharray1000, delay3Sec)}
              d="M18.27 239.45c25.7-.83 47.2-.9 71.23-.85 42.93-3.26 41.76 47.78 22.65 45.1-13.53 0-39.83-.3-43.27.06 17.12-15.98-20.31-39.15-50.6-44.31z"
            />
          </svg>
        </Grid>
        <Grid container direction={'column'}>
          <Sphere />
          <CursorButton onClick={handleOpenDialog} title={' Read more!'} />
        </Grid>
      </SectionContainer>
      <MoreSkillsDialog open={isDialogOpen} onClose={handleCloseDialog} />
    </>
  );
};

export default MySkills;
