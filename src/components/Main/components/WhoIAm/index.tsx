import { FC, useState } from 'react';
import { makeStyles, Grid, Typography, Dialog } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { colord } from 'colord';
import clsx from 'clsx';
import dynamic from 'next/dynamic';

import { getCursorColor } from 'store/modules/App/selectors';
import CursorButton from 'components/CursorButton';
import SectionContainer from 'components/SectionContainer';
import { useStyles } from '../Greeting';

const ResumeDialog = dynamic(() => import('./components/ResumeDialog'), { ssr: false });

const useLocalStyles = makeStyles(
  ({ palette: { background, primary, secondary }, shape: { borderRadius }, breakpoints }) => ({
    container: {
      borderRadius,

      backdropFilter: 'blur(10px)',
      background: colord(secondary.main).alpha(0.04).toHex(),
      padding: 32,
      '& .readMoreButtonContainer': {
        marginTop: 24,
        '& button': {
          // height: 42,
          // width: 200
        }
      }
    },
    textContainer: {
      marginLeft: 42,
      userSelect: 'none',
      '& h4:hover': {
        color: secondary.main
      }
      // width: 'calc(100vw - 860px)'
    },
    containerOfWHOIAM: {
      width: 2400,
      // [breakpoints.down('xl')]: {
      //   width: 3000
      // },

      // [breakpoints.down('lg')]: {
      //   width: 3600
      // },

      // [breakpoints.down('md')]: {
      //   width: 2800
      // },

      // [breakpoints.down('sm')]: {
      //   width: 2000
      // },
      // width: 1800,
      '& path': {
        strokeWidth: '4px'
      }
    }
  })
);

const WhoIAm: FC = () => {
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

  const { containerOfWHOIAM, textContainer, container } = useLocalStyles();
  const cursorColor = useSelector(getCursorColor);
  const [isResumeDialogOpen, setIsResumeDialogOpen] = useState(false);
  const handleOpenResumeDialog = () => {
    setIsResumeDialogOpen(true);
  };

  const handleCloseResumeDialog = (e?: any) => {
    setIsResumeDialogOpen(false);
  };

  const text =
    'I am Anatolii Ponocheniuk,self educated by realizing studying projects and also acquire new info by reading  official documentations. And about my soft skills, I improved them in mba school and gdansk business week of course all communication was an english. Exactly want evolve as react-ts developer and of course be fond of coding and right react with typescript. So, I have default hobbies. Certainly motivated enough to work in new company.';

  return (
    <>
      <SectionContainer className={container}>
        <Grid className={containerOfWHOIAM}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox={'0 0 550 420'} className={'svgContainer'}>
            <path
              className={clsx(orange2GoldColor, dashOffset1500Dasharray6000, delay4Sec)}
              d="M207.16 352.84c6.21-14.28 52.07-115.37 52.58-115.92.3-.3 3.2 5.35 6.44 12.57a27335.77 27335.77 0 0047.62 105.1c.18.28-23.96.52-53.65.52h-53.98zM31.9 349.86v-55.14h53.58V405H31.9zM31.9 256.43V235h53.58v42.86H31.9zM20.51 85.6C9.45 39.5.23 1.37.01.87-.28.16 3.78 0 19.66.17l20.01.19 10.36 25.52c5.7 14.04 10.59 25.54 10.88 25.54.28 0 8.3-6.12 17.83-13.62l17.3-13.63 16.4 13.1c9 7.2 16.92 13.35 17.6 13.66.74.36 1.36.22 1.6-.35C133.01 47.3 150.97.72 150.97.4c0-.22 8.9-.4 19.75-.4h19.76l-.02 1.6c-.06 5.16-6.97 35.4-22.23 97.27-9.49 38.46-17.35 70-17.47 70.07-.12.07-12.2-11.53-26.84-25.79-14.64-14.25-27.07-25.93-27.62-25.96-.56-.03-1.13.23-1.3.57-.15.34-11.49 11.16-25.18 24.04a7711.25 7711.25 0 00-27.06 25.5l-2.14 2.1zM301.66 170.21l-1.61-.3V93.56h-23.57v75.72h-61.43V0h61.43v60h69.28V170.71l-21.25-.1c-11.69-.05-21.97-.23-22.85-.4zM375.76 104.83c-10.13-10.42-18.3-19.23-18.17-19.58.13-.35 18.87-19.48 41.63-42.52L440.6.85l2.08 1.97c1.14 1.08 9.46 9.58 18.49 18.9l16.4 16.92-40.15 40.93a23380.27 23380.27 0 00-41.7 42.57l-1.56 1.64zM431.76 166.86l-18.02-19.8-10.51-11.56 25.51-25.32a99668.8 99668.8 0 0142.3-41.96l16.8-16.63 17.72 18.95c9.75 10.42 17.63 19.26 17.5 19.64-.32.96-82.73 84.97-83.32 84.94-.26 0-3.85-3.73-7.98-8.26zM353.05 320.36V235.7H400.54V405H353.05zM424 289.98l-11.81-9.69v-44.58H459.68v45.5l-11.94 9.23-11.93 9.22zM412.19 353.12v-51.88l5.15 3.6c2.83 1.98 8.2 5.76 11.94 8.42 5.96 4.22 6.94 4.69 7.96 3.78.64-.56 5.95-4.32 11.8-8.35l10.64-7.31V405H412.19zM471.32 320.36V235.7H519.1l-.58 9.76c-.33 5.37-.6 43.46-.6 84.64V405h-46.59zM189.9 399.82c1.2-2.85 4.7-11.12 7.75-18.4l5.55-13.2 56.68-.19 56.67-.18 6.02 13.4c3.3 7.37 7.08 15.72 8.37 18.57l2.36 5.18H187.68z"
            />

            <path
              className={clsx(lime2TurquoiseColor, dashOffset1500Dasharray6000, delay2Sec)}
              d="M259.73 239.08c28.8 25.6 32.95 65.1 54.06 117.66.18.29-23.96.52-53.65.52h-53.98c7.16-31.13 30.2-101.86 53.57-118.18zM31.89 296.88c13.37-6.04 33.39-12.88 53.57 0v110.28c-15.79-5.93-27.98-9.4-53.57 0zM31.89 237.16c-4.46 3.36 23.95-9.5 53.57 0V280c-17.6-1.15-33.92-4-53.57 0zM0 3.04C42.63-9.55 41.48 18.88 60.88 53.58c25.52-50.1 53.28 5.47 70.74-.85 14.36-47.58 16.76-50.57 58.84-50.57l-.02 1.6C175 65.48 171.73 107.14 150.74 171.1c-62.3-56.58-47.35-60-108-1.63l-2.14 2.1C25.42 116.15 15.9 58.11 0 3.03zM301.64 172.37l-1.6-.31c-4.53-34.58 18.84-76.33-23.58-76.33 7.24 71.81-3.62 74.48-61.43 75.71 12.57-40.35 0-112.85 0-169.28 14.18 6.6 30.64 10.78 61.43 0v60c92.01-8.1 67.22 40.07 69.29 110.71-15.86-1.76-28.07-7.37-44.11-.5zM357.58 87.4C388 65.85 411.7 50.97 440.58 3c6.7 5.23 14.55 25.03 36.98 37.8-20.5 36.55-48.97 63.02-81.86 83.5l-1.55 1.64c-11.08-13.56-26.56-24.21-36.57-38.53zM403.2 137.66c72.71-65.38 65.6-59.24 84.62-83.91 2.77 15.05 24.33 23.4 35.22 38.59-7.2 11.51-83.22 90.94-83.32 84.94-13.6-14.16-28.8-21.32-36.51-39.62zM353.03 237.87H400.52c0 56.43-16.74 108.56 0 169.29H353.03c-14.28-59.67-1.5-113.2 0-169.29zM412.17 282.45c6.86-14.19 0-29.72 0-44.58H459.66c0 15.17 8.07 27.88 0 45.5-21.65 20.52-26.12 16.6-47.49-.92zM412.17 303.4l5.15 3.6c19.48 17.11 23.49 9.5 42.34-3.47 0 34.54 8.53 68.2 0 103.63h-47.49c9.38-33.7 0-69.18 0-103.76zM471.3 237.87h47.78c13.9 61.73 16.32 114.93-1.18 169.29h-46.6c16.68-55.22 0-112.86 0-169.29zM203.19 370.37l56.67-.18 56.67-.18c6.83 21.78-1.84 19.5 16.75 37.15H187.67c-2.52-14.77.81-28 15.52-36.79z"
            />

            <path
              className={clsx(red2VioletColor, dashOffset2000Dasharray500, delay3Sec)}
              d="M259.73 239.08c32.3 25.1 55.63 61.8 54.06 117.66.18.29-23.96.52-53.65.52h-53.98c26.1-39.2 12.89-118.47 53.57-118.18zM31.89 296.88c17 14.11 35.71 0 53.57 0v110.28c-17.86 0-36.85 16.06-53.57 0V296.88zM31.89 237.16c13.86 21.96 35.34 2.06 53.57 0V280c-17.86 0-39.67 22.34-53.57 0zM0 3.04C42.63-9.55 41.48 18.88 60.88 53.58c12.63-9.31 21.92-16.84 35.14-27.25 6.95 2.56 29.4 29.96 35.6 26.4 14.36-47.58 16.76-50.57 58.84-50.57l-.02 1.6C175 65.48 171.73 107.14 150.74 171.1c-21.3-13.48-30.24-40.51-54.46-51.74-.55-.03-1.13.23-1.29.57-17.9 17.61-33.02 31-52.24 49.54l-2.15 2.1C25.42 116.15 15.9 58.11 0 3.03zM301.64 172.37l-1.6-.31c-4.53-34.58 18.84-76.33-23.58-76.33v75.71c-26.26-12.57-40.95 0-61.43 0 12.57-40.35 0-112.85 0-169.28 14.18 6.6 30.64 10.78 61.43 0v60c23.1 0 42.23 13.76 69.29 0 12.4 39.23-1.6 74.5 0 110.71-15.86-1.76-28.07-7.37-44.11-.5zM357.58 87.4C388 65.85 411.7 50.97 440.58 3c6.99 4.72 28.1 1.37 36.98 37.8-20.5 36.55-48.97 63.02-81.86 83.5l-1.55 1.64c-11.08-13.56-26.56-24.21-36.57-38.53zM403.2 137.66c85.3-56.48 68.92-56.9 84.62-83.91 15.36 8.89 39.98 15.75 35.22 38.59-7.2 11.51-83.22 90.94-83.32 84.94-13.6-14.16-28.8-21.32-36.51-39.62zM353.03 322.51v-84.64H400.52V407.16H353.03zM423.98 292.14l-11.81-9.69v-44.58H459.66v45.5l-11.93 9.22-11.93 9.23zM412.17 355.28V303.4l5.15 3.6c2.84 1.97 8.21 5.76 11.95 8.41 5.95 4.23 6.93 4.7 7.95 3.8.64-.58 5.95-4.33 11.8-8.36l10.64-7.32v103.63H412.17zM471.3 322.51v-84.64h47.78l-.6 9.76c-.31 5.36-.58 43.45-.58 84.64v74.89h-46.6zM203.19 370.37l56.67-.18 56.67-.18c-4.2 20.48 11.13 24.78 16.75 37.15H187.67c5.52-12.94 18.9-23.9 15.52-36.79z"
            />

            <path
              className={clsx(blueLightVioletColor, dashOffset2050Dasharray250, delay2Sec)}
              d="M259.73 239.08c43.02 2.67 33.56 64.12 54.06 117.66.18.29-23.96.52-53.65.52h-53.98c1.73-50.34 23.75-124.64 53.57-118.18zM31.89 296.88c13.37-6.04 33.39-12.88 53.57 0 21.33 37.52 7.05 73.77 0 110.28-15.79-5.93-27.98-9.4-53.57 0-6.76-36.76-17.5-73.52 0-110.28zM31.89 237.16c-4.46 3.36 23.95-9.5 53.57 0 13.57 18.66 5.61 30.38 0 42.85-17.6-1.15-33.92-4-53.57 0-5.07-14.28-18.11-28.57 0-42.85zM0 3.04C42.63-9.55 41.48 18.88 60.88 53.58c25.52-50.1 53.28 5.47 70.74-.85 14.36-47.58 16.76-50.57 58.84-50.57l-.02 1.6c-.4 79.75-10.1 113.7-39.7 167.33-62.3-56.58-47.35-60-108-1.63l-2.14 2.1C12.31 118.37 1.63 60.52 0 3.03zM301.64 172.37l-1.6-.31c-13.45-139.26-5.31-1.5-85-.62C229.56 52.26 191.55 30.87 276.45 2.16v60c92.01-8.1 67.22 40.07 69.29 110.71-15.86-1.76-28.07-7.37-44.11-.5z"
            />
            <path
              className={clsx(freeSpeechBlueColor, dashOffset1000Dasharray1000, delay1Sec)}
              d="M440.59 3c6.7 5.23 14.54 25.03 36.97 37.8-25.8 31.25-66.45 45.52-81.86 83.5l-1.55 1.64C314.85 65.98 401.16 33.43 440.59 3zM403.2 137.66c58.15-78.78 65.34-59.48 84.62-83.91 61.38 33.9 13.56 98.6-48.1 123.53-13.6-14.16-28.8-21.32-36.51-39.62zM353.03 237.87H400.52c11.94 69.1-2.4 123.78 0 169.29H353.03c-14.28-59.67-1.5-113.2 0-169.29zM421.89 284.06c6.86-14.2-9.72-31.33-9.72-46.19H459.66c11.72 15.17 22.4 27.88 0 45.5-21.65 20.52-16.4 18.2-37.77.69z"
            />
            <path
              className={clsx(steelBlue3Color, dashOffset1500Dasharray6000, delay2Sec)}
              d="M422.12 300.4c24.77 17.84 24.86 14.73 41.54 3.13 1.67 34.66 15.93 68.7 0 103.63-77.76 15.55-46.12-87.03-41.54-106.77zM483.3 237.87h47.78c13.9 61.73 16.32 114.93-1.18 169.29-77.07 21.6-38.04-103.7-46.6-169.29zM203.19 370.37l56.67-.18 56.67-.18c17.44 18.58 7.86 16.58 16.75 37.15h-72.8l-65.56.44c7.26-17.02-6.44-28.45 8.27-37.23z"
            />
          </svg>
        </Grid>
        <Grid className={textContainer}>
          <Typography variant={'subtitle1'} color={'textSecondary'}>
            {text}
          </Typography>
          <Grid className={'readMoreButtonContainer'}>
            <CursorButton onClick={handleOpenResumeDialog} title={'Read more!'} />
          </Grid>
        </Grid>
      </SectionContainer>

      <ResumeDialog open={isResumeDialogOpen} onClose={handleCloseResumeDialog} />
    </>
  );
};

export default WhoIAm;
