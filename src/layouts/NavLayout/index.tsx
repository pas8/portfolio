import {
  makeStyles,
  Grid,
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
import { FC, useState, Fragment } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrentSectionId, getIsSoundPaused, getSoundIdx } from 'store/modules/App/selectors';
import { CursorContext } from 'layouts/CursorLayout';
import VideoButton from 'components/VideoButton';
import TipElementWrapper from 'components/TipElementWrapper';
import { sectionIds, tipsElementIds } from 'models/denotation';
import { toChangeSoundIdx, toChangeSphereCursorTitle, toChangeStatuses } from 'store/modules/App/actions';
import PasLogoSvg from 'components/PasLogoSvg';

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
  const soundIdx = useSelector(getSoundIdx);
  const dispatch = useDispatch();
  const isSoundPaused = useSelector(getIsSoundPaused);

  const hrefsArr = [
    { title: 'Greeting', href: sectionIds.GREETING },
    { title: 'Who I Am', href: sectionIds.WHO_I_AM },
    { title: 'Skills', href: sectionIds.SKILLS },
    { title: 'Experience', href: sectionIds.PROJECTS },
    { title: 'Contact', href: sectionIds.CONTACT },
    { title: 'Blog', href: sectionIds.BLOG },
  ];

  const isMenuHaveDialogView = width === 'sm' || width === 'xs' || width === 'md';
  const [isMenuOpen, setMenuOpen] = useState(true);

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
              <CursorContext.Consumer>
                {({ mouseOutEvent, mouseOverEvent, handleToggleCursorVisibility }) => (
                  <Grid
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
              <TipElementWrapper
                title={'Click to button to start animation or to pause.'}
                id={tipsElementIds.PLAY_OR_PAUSE_SOUND_BUTTON}
              >
                <PasLogoSvg onClick={handleChangeSoundPauseStatus} />
              </TipElementWrapper>
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
            </Grid>
            <CursorContext.Consumer>
              {({ handleToggleCursorVisibility }) => (
                <TipElementWrapper
                  id={tipsElementIds.SLIDER_OF_SOUND_IDX}
                  title={'You can easily change speed and voice from this changing value of this slider.'}
                >
                  <Box
                    my={1}
                    width={96}
                    onMouseOver={() => handleToggleCursorVisibility(true)}
                    onMouseOut={() => handleToggleCursorVisibility(false)}
                  >
                    <Slider value={soundIdx} onChange={handleChangeSoundIdx} step={1} min={1} max={4} />
                  </Box>
                </TipElementWrapper>
              )}
            </CursorContext.Consumer>
          </Grid>
          <Grid className={'hrefsContainer'} container justifyContent={'center'} alignItems={'center'}>
            <CursorContext.Consumer>
              {({ handleToggleCursorVisibility }) => (
                <Grid
                  container
                  onMouseOver={() => handleToggleCursorVisibility(true)}
                  onMouseOut={() => handleToggleCursorVisibility(false)}
                >
 <MenuItem
                        onClick={() => {
                          setMenuOpen(false)
    dispatch(toChangeStatuses({ newStatuses: { isTipsLayoutHidden: false } }));
                       
                        }}
                        className={'item'}
                      >
                        <p> {'Instruction'}</p>
                      </MenuItem>

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
              )}
            </CursorContext.Consumer>
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
