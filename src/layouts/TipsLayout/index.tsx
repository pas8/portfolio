import { makeStyles, Zoom, Grid, Typography, SvgIcon, Slide } from '@material-ui/core';
import { colord } from 'colord';
import { createContext, FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsTipsLayoutHidden } from 'store/modules/App/selectors';
import { isMobile } from 'react-device-detect';
import { tipsElementIds } from 'models/denotation';
import { useIsomorphicLayoutEffect } from 'react-use';
import { useRef, useEffect } from 'react';
import Confetti from 'react-dom-confetti';

import { HandleAddTipElementType } from 'models/types';
import { toChangeStatuses } from 'store/modules/App/actions';
import CloseVideoButton from 'components/CloseVideoButton';
import VideoButton from 'components/VideoButton';
import CursorButton from 'components/CursorButton';

import clsx from 'clsx';
import { useSample } from 'hooks/useSample';
import { useGetColorsArr } from 'hooks/useGetColorsArr.hook';

export const TipsContext = createContext<{ handleAddTipElement: HandleAddTipElementType }>({
  handleAddTipElement: (__: any) => {}
});

const useStyles = makeStyles(({ palette: { secondary, common, primary }, breakpoints, shape: { borderRadius } }) => ({
  '@global': {
    '@keyframes blur': {
      '0%': {
        opacity: 0,
        filter: 'blur(10px)'
      },

      '100%': {
        opacity: 1,
        filter: 'blur(0px)'
      }
    }
  },

  container: () => ({
    position: 'fixed',
    inset: 0,
    zIndex: 10000,
    backdropFilter: 'blur(10px)',
    background: common.black,
    '& .instructionSvgContainer': {
      height: '100%',
      '& .svg': {
        width: '80%',
        marginBottom: 42,
        // margin:'2% 10%',
        '& path': {
          fill: 'transparent',
          stroke: secondary.main,
          strokeWidth: 4
        }
      }
    },

    '& .notActiveInstructionSvgContainer': {
      opacity: 0.6,
      filter: 'blur(2px)'
    },

    '& .succssesSvgContainer': {
      position: 'fixed',
      inset: 0,
      animation: '8s blur linear',
      '& svg': {
        width: '60%',
        '& path': {
          fill: secondary.main
        }
      }
    },

    '& .backArrowButtonContainer': {
      '& button': {
        width: 42,
        height: 42
      },
      zIndex: 10000000,

      position: 'fixed',
      top: 16,
      left: 16
    },

    '& .previewContainer': {
      background: colord(secondary.main).alpha(0.16).toHex(),
      borderRadius,
      padding: 10,
      // paddingLeft: 10,
      position: 'fixed'
    },
    '& .confitiContainer': {
      position: 'fixed',
      inset: 0,
      '& > div': {
        width: '100%',
        marginLeft: '40%',
        height: '100%',
        zIndex: 10000000
      }
    },

    '& .contentContainer': {
      padding: 20,
      paddingRight: 60,
      position: 'absolute',
      '& button': {
        width: 42,
        height: 42,
        position: 'absolute',
        top: 8,
        right: 8
      }
    },

    '& .tipDenotationContainer': {
      width: 400,
      position: 'fixed',
      backdropFilter: 'blur(10px)',
      background: colord(secondary.main).alpha(0.16).toHex(),
      borderRadius,
      '& .tringleContainer': {
        height: '100%',
        position: 'relative',

        '& .tringle': {
          top: '50%',
          transform: 'translateY(-50%)',
          position: 'absolute',
          marginLeft: -20,
          borderTop: '20px solid transparent',
          borderBottom: '20px solid transparent',
          backdropFilter: 'blur(10px)',
          borderRight: `20px solid ${colord(secondary.main).alpha(0.16).toHex()}`
        }
      }
      // clipPath: 'polygon(0 38%, 16% 38%, 16% 0, 100% 0, 100% 100%, 16% 100%, 16% 67%)'
    }
  })
}));

const TipsLayout: FC = ({ children }) => {
  const isTipsLayoutHidden = useSelector(getIsTipsLayoutHidden);
  const [tipsElementArr, setTipsElementArr] = useState<any[]>([]);
  const [step, setStep] = useState(0);
  const [isInAnimation, setIsInAnimation] = useState(true);
  const dispatch = useDispatch();
  const colorsArr = useGetColorsArr();
  const { container } = useStyles();

  const currentStepElement = tipsElementArr[step - 1];
  const isLastStep = step !== 0 && step === tipsElementArr.length + 1;
  // console.log(isLastStep)
  const handleAddTipElement: HandleAddTipElementType = newElement => {
    setTipsElementArr(state => [...state, newElement]);
  };
  useEffect(() => {
    if (isLastStep)
      setTimeout(() => {
        onClose();
      }, 8000);
  }, [isLastStep]);
  if (!tipsElementArr.length || isMobile) {
    return <TipsContext.Provider value={{ handleAddTipElement }}> {children}</TipsContext.Provider>;
  }

  const boundingClientRect = document?.getElementById(currentStepElement?.id)?.getBoundingClientRect();

  const width = boundingClientRect?.width || 0
  const H = boundingClientRect?.height || 0;
  const x = boundingClientRect?.x || 0
  const y = boundingClientRect?.y || 0

  const onClose = () => {
    dispatch(toChangeStatuses({ newStatuses: { isTipsLayoutHidden: true } }));
  };

  const toogleSlideAnimation = () => {
    setIsInAnimation(false);
    setTimeout(() => {
      setIsInAnimation(true);
    }, 800);
  };
  const toPreviuosStep = () => {
    toogleSlideAnimation();
    setStep(n => n - 1);
  };

  const toNextStep = () => {
    toogleSlideAnimation();
    setStep(n => n + 1);
  };

  const height = H < 100 ? 100 : H;
  const top = y === 0 ? 10 : y;

  const confityConfig = {
    angle: 0,
    spread: 360,
    startVelocity: 96,
    elementCount: 200,
    dragFriction: 0.15,
    duration: 8000,
    stagger: 4,
    width: '24px',
    height: '24px',
    perspective: '1000px',
    colors: colorsArr
  };
  return (
    <TipsContext.Provider value={{ handleAddTipElement }}>
      <Zoom in={!isTipsLayoutHidden}>
        <Grid className={container}>
          <Grid className={'confitiContainer'}>
            <Confetti active={isLastStep} config={confityConfig} />
          </Grid>
          <CloseVideoButton onClose={onClose} />
          {!isLastStep && (
            <Grid
              container
              alignItems={'center'}
              justifyContent={'center'}
              className={clsx('instructionSvgContainer', step !== 0 && 'notActiveInstructionSvgContainer')}
            >
              <Grid container direction={'column'} alignItems={'center'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={'0 0 1478 165.1'} className={'svg'}>
                  <path d="M0 110l1-54 24-1h25v110H0zM0 26V6h50v40H0zM76 98l1-66 22 35 20 34v64H76zM169 160L98 44 77 7h42l26 41 25 41V48l1-42h43v159h-42zM266 89l-28-28V9l54 53 53 54-9 1-27 1h-16l-27-29zM238 146v-20h55c49 0 55 1 56 3v36H238zM270 28L249 6h99l1 4v38h-22l-29 1h-6zM414 109V54l-20-8-20-8V6h127v33l-20 7-19 8-1 56v55h-47zM521 122V79h62l-28-33-31-36-4-4 28 1h28l31 32 32 33v27h-34l16 25 23 33 5 8h-28l-27-1-15-27-16-27c-1-1-1 11-1 27v28h-41zM688 148l-28-18V6h43v53l1 53 6-8 7-8 7 8 6 9V7h22l22-1v124l-28 18-29 17-29-17zM853 126l-59-40c0-2 115-76 120-78l1 23-1 27c-1 4-4 6-19 16l-19 12 18 14c16 11 19 14 20 17 2 6 2 48 0 48l-61-39zM977 109V54l-20-8-19-8-1-16V6h127v33l-20 7-19 8-1 56v55h-47zM1094 110V55h48v110h-48zM1094 26V6h50l-1 20v20h-49zM1185 98l-17-18 39-41 38-39 17 17 18 18-39 40-39 40-17-17zM1228 146l-17-19c0-1 17-19 39-40l39-39 11 11 17 18 6 7-23 23-39 41-17 16zM1342 98l1-67 21 35 20 34v65h-42zM1411 122L1344 7l21-1h20l25 42 25 41V48l-1-42h44v159h-41z" />
                </svg>
                {step === 0 && <CursorButton title={'Start'} onClick={toNextStep} />}
              </Grid>
            </Grid>
          )}
          {isLastStep && (
            <Grid
              container
              alignItems={'center'}
              justifyContent={'center'}
              className={isLastStep && 'succssesSvgContainer'}
            >
              <svg viewBox="0 0 24 24">
                <path d="M19.77 5.03l1.4 1.4L8.43 19.17l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 5.03m0-2.83L8.43 13.54l-4.2-4.2L0 13.57 8.43 22 24 6.43 19.77 2.2z"></path>
              </svg>
            </Grid>
          )}
          {/* <Slide direction={'left'} in={isInAnimation} mountOnEnter unmountOnExit> */}

          {step !== 0 && (
            <Grid className={'backArrowButtonContainer'}>
              <VideoButton onClick={toPreviuosStep}>
                <SvgIcon viewBox={'0 0 24 24'}>
                  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                </SvgIcon>
              </VideoButton>
            </Grid>
          )}

          {!isLastStep && step !== 0 && (
            <>
              <Grid
                container
                style={{ width, height, left: x, top }}
                className={'previewContainer'}
                alignItems={'center'}
              >
                {currentStepElement?.element}
              </Grid>
              <Grid container className={'tipDenotationContainer'} style={{ left: x + width + 42, top, height }}>
                <Grid className={'tringleContainer'} container>
                  <Grid className={'contentContainer'}>
                    <Typography color={'textSecondary'} component={'i'}>
                      {currentStepElement?.title}
                    </Typography>
                    <VideoButton onClick={toNextStep}>
                      <SvgIcon viewBox={'0 0 24 24'}>
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                      </SvgIcon>
                    </VideoButton>
                  </Grid>

                  <Grid className={'tringle'} />
                </Grid>
              </Grid>
            </>
          )}
          {/* </Slide> */}
        </Grid>
      </Zoom>
      {children}
    </TipsContext.Provider>
  );
};

export default TipsLayout;
