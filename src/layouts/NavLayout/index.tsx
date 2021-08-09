import {
  makeStyles,
  Grid,
  ButtonBase,
  MenuItem,
  Typography,
  SvgIcon,
  IconButton,
  Box,
  withWidth,
  Slider,
  WithWidthProps
} from '@material-ui/core';
import { colord } from 'colord';
import SvgAnimation from 'components/SvgAnimation';
import clsx from 'clsx';
import { FC, useState, Fragment } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentSectionId, getIsSoundPaused, getSoundIdx } from 'store/modules/App/selectors';
import { CursorContext } from 'layouts/CursorLayout';
import VideoButton from 'components/VideoButton';
import { sectionIds, tipsElementIds } from 'models/denotation';
import { toChangeSoundIdx, toChangeSphereCursorTitle, toChangeStatuses } from 'store/modules/App/actions';

const useLocalStyles = makeStyles(
  ({ palette: { background, secondary, text, primary }, breakpoints, shape: { borderRadius } }) => ({
    container: {},
    mainContainer: {
      position: 'relative'
    },
    menuButton: {
      color: text.primary,

      position: 'fixed',
      top: 12,
      right: 12,
      zIndex: 11,

      '& button': {
        width: 68,
        height: 68
      }
    },

    navContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      zIndex: 10,
      width: 142,
      [breakpoints.down('md')]: {
        width: '100%'
      },

      '& .navFooterContainer': {
        paddingBottom: 42
      },
      '& .logoContainer': {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        '& .logoContentContainer': {
          position: 'relative',
          '& .cursorWrapper': {
            position: 'absolute',
            inset: 0,
            bottom: 60
          }
        },
        '& h6': {
          display: 'flex',
          fontWeight: 900,
          justifyContent: 'center',

          alignItems: 'center',
          marginTop: -8
        },
        '& h6,p': {
          userSelect: 'none',
          width: '100%'
        },
        '& .svgContainer': {
          width: 118
        },
        flexDirection: 'column',
        background: colord(secondary.main).alpha(0.08).toHex(),
        // paddingBottom: 32,
        '& .pasCaption': {
          textAlign: 'center',
          letterSpacing: 9,
          color: text.secondary
        },
        '& .webDevelopSmallCaption': {
          textAlign: 'center',
          color: text.secondary
        },
        '& path': {
          strokeWidth: '6px'
        }
      },

      '& .hrefsContainer': {
        flexGrow: 4,
        width: '100%',
        '& .item': {
          width: '100%',

          '& p': {
            textAlign: 'center',
            width: '100%',
            margin: 0,
            padding: 10
          },

          color: text.secondary,
          '&:hover': {
            '& .MuiTouchRipple-root': {
              background: colord(primary.main).alpha(0.16).toHex()
            },
            color: primary.main
          }
        }
      },

      // width:200,
      backdropFilter: 'blur(10px)',
      background: colord(secondary.main).alpha(0.08).toHex()
    }
  })
);

const NavLayout: FC<WithWidthProps> = ({ children, width }) => {
  const { navContainer, mainContainer, container, menuButton } = useLocalStyles();
  const { push } = useRouter();
  const id = useSelector(getCurrentSectionId);
  const soundIdx = useSelector(getSoundIdx);
  const dispatch = useDispatch();
  const isSoundPaused = useSelector(getIsSoundPaused);

  const path = [
    'M 483.91167,592.21203 465.90108,576.3689 c -0.77129,0 -5.43481,6.82421 -10.36336,15.16492 -21.68792,36.70298 -40.35133,61.77861 -55.24998,74.23234 -6.66605,5.57213 -7.91311,6.01184 -14.49267,5.11002 -3.95945,-0.54271 -9.6711,-2.01964 -12.69253,-3.28209 -5.48602,-2.29221 -5.49614,-2.31744 -7.40407,-18.47975 -1.05078,-8.90142 -3.05586,-31.30833 -4.45571,-49.79313 -3.64865,-48.17987 -8.04714,-79.9685 -14.53835,-105.07076 -3.1184,-12.05927 -5.50285,-22.09296 -5.29874,-22.29705 0.2041,-0.2041 6.79605,4.17817 14.64877,9.73838 10.05778,7.12153 14.27768,11.10843 14.27768,13.48935 0,4.63614 9.51127,138.55142 10.74418,151.27427 0.54612,5.63561 1.61732,10.24656 2.38042,10.24656 1.90465,0 29.47,-35.00942 40.45934,-51.38543 9.68064,-14.42582 19.71955,-34.4186 24.2145,-48.22389 1.83733,-5.64297 3.46735,-8.22966 4.71991,-7.49007 1.05233,0.62135 18.28887,12.43111 38.30343,26.24391 20.01454,13.81279 36.98285,25.10849 37.70735,25.10155 1.19044,-0.0115 8.69479,-11.84383 8.69479,-13.70941 0,-0.42711 -18.84464,-13.92937 -41.877,-30.00504 l -41.877,-29.22846 0.89243,-5.73808 c 6.59492,-42.40298 8.643,-171.83697 3.57996,-226.24413 -3.16693,-34.03145 -5.48328,-44.76501 -13.32934,-61.76572 -7.04826,-15.27202 -13.74415,-24.86657 -26.07118,-37.35742 -11.17905,-11.32762 -42.79781,-36.95123 -45.5967,-36.95123 -0.99262,0 2.28662,4.28939 7.28721,9.53199 12.0251,12.60705 19.39471,24.41425 28.01866,44.89003 14.90823,35.39647 16.53006,42.31073 16.46079,70.1762 -0.0436,17.57176 -0.79554,24.83529 -3.64866,35.24818 -7.30577,26.66366 -24.31185,55.07913 -48.21683,80.56559 -9.36352,9.98297 -10.48841,11.88699 -10.03282,16.9817 2.93481,32.81902 3.97269,48.0255 3.32228,48.67592 -0.42784,0.42783 -7.29536,-3.60529 -15.26117,-8.96248 l -14.48328,-9.74036 -0.1205,-8.46733 c -0.0662,-4.65704 -0.87155,-9.21832 -1.78941,-10.13618 -1.13217,-1.13217 -7.9474,0.6524 -21.19229,5.54923 -10.73789,3.96994 -30.22085,10.75037 -43.29547,15.0676 -20.92239,6.90854 -24.60726,8.6787 -30.73969,14.76677 -3.83222,3.80449 -6.96767,8.3437 -6.96767,10.08713 0,1.74342 -4.79539,45.74169 -10.65642,97.77391 -5.86104,52.03223 -10.65643,95.3369 -10.65643,96.23259 0,2.17646 -39.5734,2.06283 -49.13792,-0.14115 C 132.55415,661.22421 106.796,635.12901 99.992456,605.05928 97.555404,594.28821 94.972886,489.41664 94.865171,396.8491 l -0.08585,-73.77526 -31.743118,-23.6162 -31.743118,-23.6162 15.001331,-22.65633 c 8.250732,-12.46098 15.453669,-22.6752 16.006528,-22.69827 0.552859,-0.0231 9.979488,6.59784 20.948062,14.71311 10.968577,8.11528 20.511954,14.75506 21.207504,14.75506 0.69555,0 2.96113,-7.56197 5.03462,-16.80437 4.72634,-21.06726 14.92604,-47.37134 23.53515,-60.69499 27.91175,-43.19681 96.91475,-78.24842 154.04075,-78.24842 h 13.03296 l -9.27626,8.47799 c -9.17452,8.385 -18.81346,22.61555 -18.84325,27.81943 -0.0211,3.71126 12.11774,19.87625 32.45266,43.21592 9.42734,10.82037 20.82357,24.83767 25.32495,31.14955 17.20545,24.12574 25.34063,48.48869 23.56619,70.57526 -0.89527,11.1434 -6.69445,33.52984 -8.68587,33.52984 -0.76641,0 -10.85359,-5.67622 -13.38777,-7.53352 -0.30492,-0.22348 1.53946,-3.96857 4.09863,-8.32241 4.09713,-6.97037 4.64181,-9.48301 4.55909,-21.03171 -0.13736,-19.18487 -7.64892,-35.97007 -28.59645,-63.90122 -13.75966,-18.34693 -47.68607,-56.70411 -49.28176,-55.71792 -2.4374,1.5064 -12.60667,35.22732 -16.05005,53.22141 -10.98473,57.40283 -7.17224,113.9393 8.53791,126.61107 5.26996,4.25075 20.22021,3.80366 31.93106,-0.95488 5.22528,-2.12322 14.52689,-7.23235 20.67029,-11.35365 l 11.16982,-7.49326 8.82929,5.86233 8.82929,5.86231 -11.08834,8.02723 c -27.22146,19.70652 -45.55043,24.53531 -67.65052,17.82263 -13.78697,-4.18768 -18.08974,-8.08456 -24.94715,-22.59387 -6.49801,-13.74891 -9.35444,-31.31731 -9.42295,-57.95559 -0.14542,-56.53818 18.44562,-131.54706 38.5159,-155.39923 4.30113,-5.11162 4.30823,-5.16265 0.71721,-5.16265 -5.37363,0 -35.84752,10.52444 -47.76871,16.49737 -43.01865,21.55383 -75.7833,61.35812 -86.28352,104.82194 -11.14539,46.13438 -16.6618,124.77628 -13.6851,195.09458 1.01152,23.89499 2.25673,70.00453 2.76714,102.46564 1.03559,65.8616 1.62253,69.96013 11.99807,83.78029 7.34978,9.78986 22.53585,20.27973 35.06308,24.22004 9.30143,2.92566 27.71348,6.08631 28.93555,4.96714 0.35564,-0.32571 4.93702,-39.52506 10.18083,-87.10967 9.85707,-89.44704 10.95594,-96.68541 16.25496,-107.07234 6.54181,-12.82303 14.8062,-16.95134 57.3167,-28.63139 32.87498,-9.03262 53.21577,-20.07476 74.7306,-40.568 23.39573,-22.28482 39.50341,-48.11354 49.95935,-80.10994 5.49668,-16.82051 5.84682,-23.46814 2.43002,-46.13587 -6.14415,-40.7616 -25.9299,-79.0377 -61.53002,-119.0316 -9.11484,-10.23979 -16.25481,-18.93542 -15.86659,-19.32364 2.04656,-2.04655 32.9562,12.84332 59.33263,28.58185 22.27581,13.29174 33.00447,21.42174 46.72433,35.40691 36.09013,36.78805 45.57325,74.63289 45.85162,182.98257 0.10197,39.67037 -1.63527,97.71558 -4.13091,138.02778 l -0.98364,15.88871 11.62039,7.72704 c 6.3912,4.24987 12.04098,7.30646 12.55503,6.79241 2.41417,-2.41419 4.29719,-41.68169 4.51962,-94.24965 0.13443,-31.7842 0.71752,-57.78998 1.29564,-57.79062 99.51226,84.22409 103.29174,289.65652 -74.65266,286.17689 19.10704,-26.29365 38.02056,-52.58688 55.20535,-80.1587 z M 102.17739,290.9807 l 1.08881,-9.14084 -19.616279,-13.4016 c -10.788953,-7.37088 -20.012425,-13.4016 -20.496603,-13.4016 -0.484178,0 -3.231665,3.41755 -6.105526,7.59457 -4.171449,6.063 -4.765923,7.86336 -2.947799,8.92738 1.252573,0.73305 11.868189,7.95471 23.590258,16.04813 11.722069,8.09343 21.782083,14.22022 22.355589,13.61507 0.5735,-0.60516 1.5327,-5.21365 2.13155,-10.24111 z',
    'm 551.49137,351.51171 c -9.26812,-12.22964 -36.50602,-39.13923 -44.54961,-44.01265 -6.735,-4.08057 -6.76974,-4.15277 -7.88717,-16.3945 -5.57,-61.02106 -20.32317,-93.24236 -56.76519,-123.97666 -26.81015,-22.61102 -40.00744,-31.09238 -71.63884,-46.03935 l -22.45102,-10.60891 22.13258,0.81483 c 32.92301,1.21209 57.86893,9.34375 85.88941,27.99748 47.77627,31.80553 85.56236,90.57382 98.55027,153.27416 3.74302,18.06986 6.28175,50.54742 4.6674,59.70973 l -1.39003,7.88914 z',
    'm 388.51765,482.10051 -0.0758,-12.7987 c -0.0714,-12.05671 0.0964,-12.67451 2.89408,-10.65643 1.63343,1.17826 12.36215,9.1022 23.84159,17.60876 l 20.87171,15.46647 c 3.42082,7.23373 1.00438,18.63418 -2.56726,23.60755 -16.13288,-11.15134 -28.89152,-21.09579 -44.96432,-33.22765 z',
    'm 405.17044,544.10826 -15.16492,-12.36874 v -12.93349 c 0,-7.11342 0.35017,-12.93349 0.77815,-12.93349 1.79313,0 37.24498,25.16223 37.82682,26.84789 0.90398,2.61895 -4.97921,22.89858 -6.77887,23.36707 -0.82295,0.21423 -8.32048,-5.17642 -16.66118,-11.97924 z',
    'm 325.20338,648.65358 c -9.0411,-4.27741 -20.79783,-10.56582 -26.12606,-13.97425 -12.52577,-8.01263 -28.25179,-23.04565 -32.20345,-30.78432 -4.42887,-8.67322 -4.00233,-20.59676 1.20927,-33.80429 12.39737,-31.41811 46.45779,-80.4979 52.42637,-75.54443 5.90203,4.89826 16.69468,49.89639 21.19532,88.37037 2.38234,20.36558 2.95091,60.78754 0.97253,69.14117 l -1.03562,4.37285 z',
    'm 296.77515,278.70443 c -33.37617,-12.85134 -36.22021,-16.36674 -31.93457,-39.47319 2.72726,-14.70436 6.60868,-29.43911 8.21597,-31.18976 1.58585,-1.7273 29.97252,38.82148 36.95957,52.79469 4.37295,8.74537 9.26421,22.98415 8.52302,24.81114 -0.27735,0.68369 -10.07115,-2.4406 -21.76399,-6.94288 z'
  ];

  const hrefsArr = [
    { title: 'Greeting', href: sectionIds.GREETING },
    { title: 'Who I Am', href: sectionIds.WHO_I_AM },
    { title: 'Skills', href: sectionIds.SKILLS },
    { title: 'Experience', href: sectionIds.PROJECTS },
    { title: 'Contact', href: sectionIds.CONTACT }
  ];

  const isMenuHaveDialogView = width === 'sm' || width === 'xs' || width === 'md';
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleChangeMenuOpenStatus = () => {
    setMenuOpen(prev => !prev);
  };

  const handleChangeSoundIdx = (__: any, soundIdx: number | number[]) => {
    dispatch(toChangeSoundIdx({ soundIdx: soundIdx as number }));
  };

  const handleChangeSoundPauseStatus = () => {
    dispatch(toChangeSphereCursorTitle({ sphereCursorTitle: !isSoundPaused ? 'Play' : 'Pause' }));

    dispatch(toChangeStatuses({ newStatuses: { isSoundPaused: !isSoundPaused } }));
  };

  return (
  
        <Grid className={container}>
          <Grid className={menuButton}>
            {isMenuHaveDialogView && (
              <VideoButton onClick={handleChangeMenuOpenStatus}>
                <SvgIcon viewBox={'0 0 24 24'}>
                  <path
                    d={
                      !isMenuOpen
                        ? 'M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z'
                        : 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'
                    }
                  />
                </SvgIcon>
              </VideoButton>
            )}
          </Grid>
          {(isMenuOpen || !isMenuHaveDialogView) && (
            <Grid
              className={navContainer}
              container
              direction={'column'}
              justifyContent={'space-around'}
              alignItems={'center'}
            >
              <Grid container className={'logoContainer'}>
                <Grid container alignItems={'center'} justifyContent={'center'} className={'logoContentContainer'}>
                  <>
                  <CursorContext.Consumer>
      {({ mouseOutEvent, mouseOverEvent, handleToggleCursorVisibility }) => (
                    <Grid
                      id={tipsElementIds.PLAY_OR_PAUSE_SOUND_BUTTON}
                      className={'cursorWrapper'}
                      onClick={handleChangeSoundPauseStatus}
                      onMouseOver={() => {
                        dispatch(toChangeSphereCursorTitle({ sphereCursorTitle: isSoundPaused ? 'Play' : 'Pause' }));
                        mouseOverEvent();
                      }}
                      onMouseOut={() => {
                        dispatch(toChangeSphereCursorTitle({ sphereCursorTitle: 'Open' }));
                        mouseOutEvent();
                      }}
                    />
                    )}
                    </CursorContext.Consumer>
                    <SvgAnimation
                      id={id}
                      pathsArr={Array(4).fill(path)}
                      viewBox={'0 0 600 800'}
                      className={'svgContainer'}
                    >
                      <Grid container>
                        <Typography className={'pasCaption'} variant={'h6'}>
                          P
                          <svg viewBox={'0 1 24 24'} style={{ width: 28, marginLeft: -8 }}>
                            <path
                              fill={'currentColor'}
                              d={isSoundPaused ? 'M14,19H18V5H14M6,19H10V5H6V19Z' : 'M8,5.14V19.14L19,12.14L8,5.14Z'}
                            />
                          </svg>
                          S
                        </Typography>
                        <Typography className={'webDevelopSmallCaption'} variant={'body2'}>
                          Web Developer
                        </Typography>
                      </Grid>
                    </SvgAnimation>
                  </>
                </Grid>
                <CursorContext.Consumer>

                {({ mouseOutEvent, mouseOverEvent, handleToggleCursorVisibility }) => (

                <Box
                  my={1}
                  width={96}
                  id={tipsElementIds.SLIDER_OF_SOUND_IDX}
                  onMouseOver={()=> handleToggleCursorVisibility(true)}
                  onMouseOut={()=> handleToggleCursorVisibility(false)}
                >
                  <Slider value={soundIdx} onChange={handleChangeSoundIdx} step={1} min={1} max={4} />
                </Box>
                    )}
                    </CursorContext.Consumer>
              </Grid>
              <Grid className={'hrefsContainer'} container justifyContent={'center'} alignItems={'center'}>
                <Grid container>
                  {hrefsArr.map(({ href, title }, idx) => {
                    return (
                      <MenuItem
                        onClick={() => {
                          setMenuOpen(false);
                          push(`#${href}`);
                        }}
                        key={`hrefsArr_${idx}`}
                        className={'item'}
                      >
                        <p> {title}</p>
                      </MenuItem>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid className={'navFooterContainer'} container justifyContent={'center'} alignItems={'center'}>
                <IconButton href={'https://github.com/pas8/portfolio'}>
                  <SvgIcon viewBox={'0 0 24 24'}>
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                  </SvgIcon>
                </IconButton>
                <IconButton href={'https://www.linkedin.com/in/anatolii-ponocheniuk-463505216/'}>
                  <SvgIcon viewBox={'0 0 24 24'}>
                    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                  </SvgIcon>
                </IconButton>
                <Grid style={{ marginLeft: 8 }}></Grid>
              </Grid>
            </Grid>
          )}
          {!(isMenuOpen && isMenuHaveDialogView) && <Grid className={mainContainer}>{children}</Grid>}
        </Grid>
  
  );
};

export default withWidth()(NavLayout);
