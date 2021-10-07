import { colord } from 'colord';
import clsx from 'clsx';
import Image from 'next/image';
import { useBreakpointNames } from 'hooks/useBreakpointNames.hook';
import { FC } from 'react';
import { Grid, makeStyles, Typography, ButtonBase } from '@material-ui/core';
import SectionContainer from 'components/SectionContainer';
import CursorButton from 'components/CursorButton';
import SvgAnimation from 'components/SvgAnimation/index';
import { sectionIds } from 'models/denotation';
import stopWatchSrc from '../../../../../public/stopWatch.png';
import pakeepsSrc from '../../../../../public/pakeeps.png';
import simpleBlogSrc from '../../../../../public/simple_blog.png';

const useLocalStyles = makeStyles(
  ({ palette: { background, secondary, primary }, breakpoints, shape: { borderRadius } }) => ({
    container: {

    

      '& path': {
        strokeWidth: '3px'
      },
      '& .projectsContainer': {
        marginTop: 42,
        // borderRadius,
        gap: 10,
        '& .projectItem': {
          '& img': {
            borderRadius
          },
'& > div ' :{


  width: '100%',
  height: '100%'
},
          position: 'relative',
          '& .wrapper': {
            position: 'absolute',
            inset: 0,
            borderRadius,
            bottom: 6,
            '& .contentContainer': {
              display: 'none'
            },
            '&:hover': {
              '& .contentContainer': {
                padding: 16,
                gap: 8,

                display: 'flex'
              },

              backdropFilter: 'blur(4px)',
              background: colord('#292730').alpha(0.8).toHex()
            },
            zIndex: 2
          },
          // overflow:'hidden',maxHeight:342,
          width: 'calc(50% - 8px)',
          marginBottom:'8px',
          [breakpoints.down('sm')]: {
            width: '100%'
          }
          // height:200
        }
      },
      '& .comingSoonPlaceholder':{
        justifyContent:'center',
        borderRadius,
display:'grid',
placeItems:'center',
        color:`${colord(primary.main).alpha(0.8).toHex()}`,
             border: `2px solid ${colord(primary.main).alpha(0.42).toHex()}`,
        
       
        '&:hover':{
background:'linear-gradient(90deg, #ffe6ad 0%, rgba(255,175,249,1) 100%)',
       
       color:background.default,
       },
       },
    }
  })
);

const Experience: FC = () => {
  const { container } = useLocalStyles();

  const projectArr = [
    {
      src: simpleBlogSrc,
      title: 'Simple blog',
      gitHub: 'https://github.com/pas8/simple_blog_by_pas',
      site: 'https://simple-blog-by-pas.vercel.app/'
    },
    {
      src: pakeepsSrc,
      title: 'Pakeeps',
      gitHub: 'https://github.com/pas8/pakeeps',
      site: 'https://pakeeps.vercel.app'
    },
    {
      src: stopWatchSrc,
      title: 'StopWatch',
      gitHub: 'https://stopwatch-5ce7m2y2d-8pas.vercel.app/',
      site: 'https://stopwatch-5ce7m2y2d-8pas.vercel.app/'
    },
  

  ];
  const id = sectionIds.PROJECTS;
const {isSizeSmall} = useBreakpointNames()

const isComingSoonPlaceholderVisible = (projectArr.length & 1) !== 0 && !isSizeSmall  

  return (
    <Grid container className={container} alignItems={'center'} id={id}>
      <SectionContainer>
        <SvgAnimation
          viewBox={'0 0 1188 152'}
          id={id}
          pathsArr={[
            [
              'M1091.07 73.54v17.14c68.3-.94 96.14 7.2 94.28-17.14-3.36-48.52-92.08-15.9-94.28 0zM118.41 2.56c50.18 34.86 59.65 23.74 106.88.08-4.59 47.25 9.17 87.53.03 137.14-48.4-31.05-54.92-30.8-107.65-.22 8.3-3.34-6.18-139.57.74-137zM.4 18.8V1.64c68.3.94 96.14-7.2 94.28 17.14l-.88 33.23C14.46 16.16-1.48 70.24.4 18.79zM245 101.57V63.36c63.92 4.5 27.5-30.23-3.84-60.54 45.52 1.85 137.03 77.5 69.55 83.4h-19.29c0 32.07 1.67 55.4-23.21 53.56h-23.22zM481.54 102.64V65.5c67.2 5.7 35.15-26.85 1.47-62.68 57.45-11.32 155.56 65.4 71.89 80.1 41.04 67.21 51 57.65 14.16 56.84l-23.86-.02c-26.2-45.12-26.96-52.02-27.43.04-45 .14-33.66 4.67-36.23-37.14zM637.41 44.78h21.43c18.45 107.35 12.5 94.49-42.86 95 17.93-102.08-7.83-94.19 21.43-95zM615.98 19.07C613.94-1.5 619.1 1.93 637.77 1.93c37.34 16.84 17.3 37.2-14.17 37.2zM810.56 81.4l.01-58.4c100 155.06-85.43-134.6 39.05 60.13 23.66 44.05 11.33 61.9-19.54 56.65-25.02.7-18.38-5.2-19.52-58.39zM896.94 136.75c-14.41-20.9-51.81-79.2-85.68-133.59 26.52-11.03 47.88 11.82 61.76 33.77a4002.63 4002.63 0 0023.22 35.71c.55.71.85-11.01.89-34.82.08-28.89-7.46-39.38 20.56-35.9 42.58 14.29 19 177.77-20.75 134.83z'
            ],
            [
              'M1064.66 2.74c12.83 16.92 11.43 29.64-.47 47.4-53.98 22.66-51.8 15.74.18 44.89 11.84 10.27 15.93 22.17.5 38.86-149.64-42.3-144.32-96.98-.21-131.15zM1.09 122.98v-17.15c66.4 13.4 96.14-7.19 94.28 17.15v17.14c-77.05 24.8-94.93 6.65-94.28-17.14zM94.28 73.42c7.1-26.2-94.3-24-94.28 0v17.15c100.09 13.7 94.93 6.65 94.28-17.15zM348.3 17.92v17.15c68.3-.95 96.15 7.19 94.3-17.15V.78c-101.61 1.1-94.94-6.65-94.3 17.14zM348.48 72.77c-5.75-43.74 100.86-27.95 94.28 0V89.9c-94.38-22.57-94.93 6.65-94.28-17.14zM689.4 17.51v17.14c76.86 16.6 96.33 7.55 94.29-17.14V.37c-101.6 1.1-94.93-6.65-94.28 17.14zM688.72 121.7v17.14c68.3-.94 96.14 7.2 94.28-17.14v-17.15c-7.91-20.02-94.93-6.64-94.28 17.15z'
            ],
            [
              'M117.22 70.87c0-65.96.06-68.96 1.28-68.31 50.18 34.86 59.65 23.74 106.87.08.24 0 .43 30.86.43 68.57 0 37.72-.18 68.57-.4 68.57-48.4-31.05-54.9-30.8-107.64-.22-.3.17-.54-30.74-.54-68.69zM.48 18.8V1.64c68.3.94 96.15-7.2 94.28 17.14v17.14C-6.84 34.83-.16 42.58.48 18.8zM245.08 101.57V63.36h21.15c59.61 5.58-9.16-44.7-24.98-60.54-.56-.71 8.7-.9 25.48-.9h21.11c43.84 34.93 74.37 84.3 22.96 84.3H291.5V113c1.43 27.15 2.08 28.74-23.21 26.78h-23.22zM481.62 102.64V65.5h26.99c57.64 9.04-8.67-44.2-25.51-62.68-.67-.71 4.02-.9 22.86-.9 44.04.97 98.81 79.11 63.36 80.72-7.89 0-14.34.12-14.34.27 41.04 67.22 51 57.66 14.16 56.85l-23.85-.02-13.5-24.76c-13.41-24.16-13.43-30.63-13.7.02l-.23 24.78c-45 .14-33.66 4.67-36.24-37.14zM637.5 44.78h21.43c.2 110.64 11.97 94.58-42.86 95 0-103.57-8.2-94.22 21.43-95zM616.07 19.07c-2.05-20.57 3.12-17.14 21.79-17.14h21.78v17.14c2.05 20.57-3.12 17.14-21.78 17.14h-21.79zM810.65 81.4l.01-58.4c99.99 155.06-85.43-134.6 39.04 60.13-3.19 29.4 10.83 61.61-19.53 56.65-25.03.7-18.39-5.2-19.52-58.39zM897.03 136.75c-14.42-20.9-51.81-79.2-85.68-133.59 26.52-11.03 47.87 11.82 61.76 33.77a4002.63 4002.63 0 0023.22 35.71c.55.71.85-11.01.88-34.82.08-28.89-7.46-39.38 20.57-35.9 23.62-2.06 20.47 1.98 19.96 23.7-.31 13.02-.56 44.04-.56 68.92-.8 47.4 7.5 45.47-19.03 45.24-8.95-2.05-17.73 2.4-21.12-3.03z',
              'M687.46 69.68V52.53h100.62v34.29H687.47zM687.46 18.25V1.1h100.62v34.28H687.47zM687.46 121.82v-17.14h100.62v34.28H687.47zM116.74 69.22c0-65.96.06-68.96 1.27-68.31.7.37 12.67 7.31 26.6 15.42C167.87 29.86 170.1 31 171.73 30.25c.99-.45 13.26-7.21 27.27-15.04C213 7.4 224.66 1 224.9 1c.22 0 .41 30.86.41 68.57 0 37.72-.17 68.58-.38 68.58-.63 0-16.54-8.76-35.88-19.75-9.93-5.64-18.4-10.25-18.84-10.25-.58 0-35.48 19.63-52.93 29.77-.3.17-.54-30.74-.54-68.69zM0 120.71v-17.14h94.28v34.29H0zM0 68.57V51.43h94.28V85.7H0zM0 17.14V0h94.28v34.29H0zM244.6 99.92V61.71h21.15c18.15 0 21.09-.15 20.75-1.04-.34-.87-38.65-56.95-40.66-59.5-.56-.7 3.62-.9 20.4-.9h21.12l11 15.9c6.04 8.74 15.54 22.54 21.11 30.67l10.13 14.78v22.94h-38.57v53.58H244.6zM353.88 68.85V51.71h100.63v34.28H353.88zM353.88 17.42V.28h100.63v34.28H353.88zM353.88 121v-17.15h100.63v34.29H353.88zM481.14 101V63.84h26.98c17.78 0 26.99-.25 26.99-.73 0-.54-47.65-56.77-52.5-61.95-.66-.7 4.02-.9 22.87-.9h23.7l27 28.57 26.99 28.56V81h-14.34c-7.88 0-14.33.11-14.33.26 0 .23 29.87 44.98 35.94 53.84l2.08 3.04-23.86-.03-23.86-.02-13.49-24.76-13.49-24.76-.22 24.78-.22 24.79h-36.24zM615.59 90.64v-47.5h42.85v95H615.6zM615.59 17.42V.28h43.57v34.28h-43.57zM810.17 79.74V21.35l7.26 11.07c3.99 6.1 12.77 19.62 19.52 30.06l12.27 19v56.66h-39.06zM896.55 135.1c-14.42-20.9-51.82-79.2-85.68-133.58-.75-1.2.32-1.26 19.3-1.08l20.08.2 22.38 34.64a4002.63 4002.63 0 0023.21 35.71c.56.71.86-11.01.89-34.82l.05-35.9h41.04l-.56 23.7c-.31 13.03-.57 44.04-.57 68.93v45.24h-38.05zM1007.19 103.9c-31.03-18.76-56.4-34.4-56.39-34.76.02-.7 2.28-2.07 69.49-42.18 24.07-14.37 43.86-26.01 43.97-25.87.11.14.06 10.87-.13 23.83l-.33 23.57-17.97 10c-9.88 5.5-18 10.3-18.05 10.66-.05.36 8.08 5.96 18.05 12.44l18.14 11.8v16.48c0 9.06.23 19.13.5 22.37.28 3.36.2 5.87-.2 5.83-.37-.03-26.06-15.4-57.08-34.17zM1085.02 68.85V51.71H1187.79v34.28H1085.02zM1085.02 121v-17.15H1187.79v34.29H1085.02zM1085.02 17.42V.28H1187.79v34.28H1085.02z',
              'M783.63 72.15v17.14c-68.3-.94-96.14 7.19-94.28-17.14 3.36-48.53 92.08-15.9 94.28 0zM1185.3 18.9v17.15c-76.86 16.6-96.33 7.54-94.29-17.14V1.76c101.6 1.1 94.93-6.64 94.28 17.15zM1185.98 123.1v17.14c-68.3-.95-96.14 7.19-94.28-17.15v-17.14c7.91-20.02 94.93-6.65 94.28 17.14z',
              'M350.08 122.9v-17.14c-7-22.15 96.14-7.2 94.28 17.14v17.14c-101.6-1.1-94.93 6.65-94.28-17.14z'
            ],
            [
              'M1064.74 2.74c.12.14.06 10.87-.12 23.83l-.34 23.57c-53.98 22.66-51.8 15.74.18 44.89v16.48c0 9.07.22 19.14.5 22.38-149.64-42.3-144.32-96.98-.22-131.15zM1.17 122.98v-17.15c68.3.95 96.15-7.19 94.28 17.15v17.14c-101.6-1.1-94.92 6.65-94.28-17.14zM94.37 73.42V56.28C26.07 57.22-1.78 49.1.09 73.42v17.15c101.6-1.1 94.92 6.65 94.28-17.15zM442.45 18.13V1c-68.3.94-96.14-7.2-94.28 17.14v17.15c101.6-1.1 94.93 6.64 94.28-17.15zM441.76 122.32v-17.14c-68.3.94-96.14-7.2-94.28 17.14v17.14c101.6-1.1 94.93 6.65 94.28-17.14zM348.57 72.77V55.62c68.3.95 96.14-7.19 94.28 17.15V89.9c-101.6-1.1-94.93 6.65-94.28-17.14zM783.55 17.72V.58c-68.3.94-96.14-7.2-94.28 17.14v17.14c101.6-1.1 94.93 6.65 94.28-17.14zM782.86 121.9v-17.14c-68.3.95-96.14-7.19-94.28 17.15v17.14c101.6-1.1 94.93 6.65 94.28-17.14zM689.67 72.35V55.21c68.3.94 96.14-7.19 94.28 17.14V89.5c-101.6-1.1-94.93 6.64-94.28-17.15zM1081.54 19.68V2.53c68.3.95 96.14-7.19 94.28 17.15v17.14c-101.6-1.1-94.93 6.65-94.28-17.14zM1082.23 123.86v-17.14c68.3.94 96.14-7.2 94.28 17.14v17.15c-101.6-1.1-94.93 6.64-94.28-17.15zM1175.42 74.31V57.17c-68.3.94-96.14-7.2-94.28 17.14v17.14c101.6-1.1 94.93 6.65 94.28-17.14z'
            ]
          ]}
        />

        <Grid container className={'projectsContainer'} justify={'space-between'}>
          {projectArr.map(({ src, title, gitHub, site }, idx) => {
            return (
              <Grid component={'a'} key={`${idx}_${title}`} className={'projectItem'}>
                <Grid className={'wrapper'}>
                  <Grid container className={'contentContainer'}>
                    <Grid container>
                      <Typography color={'textSecondary'} variant={'h4'}>
                        {title}
                      </Typography>
                    </Grid>

                    <Grid container>
                      <CursorButton
                        title={'Git Hub'}
                        href={gitHub}
                        customIcon={
                          <svg viewBox={'0 0 24 24'}>
                            <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                          </svg>
                        }
                      />
                    </Grid>
                    <Grid container>
                      <CursorButton
                        href={site}
                        title={'Web site'}
                        customIcon={
                          <svg viewBox={'0 0 24 24'}>
                            <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                          </svg>
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Image src={src} alt={title} placeholder={'blur'} />
              </Grid>
            );
          })}
  {isComingSoonPlaceholderVisible && <Grid className={'projectItem comingSoonPlaceholder'} ><Typography variant={'h2'} component={'h6'}> Coming soon </Typography></Grid>}

        </Grid>
      </SectionContainer>
    </Grid>
  );
};

export default Experience;
