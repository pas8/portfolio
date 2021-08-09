import { makeStyles, Zoom, Grid, Typography, SvgIcon } from '@material-ui/core';
import { colord } from 'colord';
import { createContext, FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsTipsLayoutHidden } from 'store/modules/App/selectors';
import { tipsElementIds } from 'models/denotation';
import { useIsomorphicLayoutEffect } from 'react-use';
import { useRef } from 'react';
import { HandleAddTipElementType } from 'models/types';
import { toChangeStatuses } from 'store/modules/App/actions';
import CloseVideoButton from 'components/CloseVideoButton';
import VideoButton from 'components/VideoButton';

export const TipsContext = createContext<{ handleAddTipElement: HandleAddTipElementType }>({
  handleAddTipElement: (__: any) => {}
});

const useStyles = makeStyles(({ palette: { secondary, common,primary }, breakpoints, shape: { borderRadius } }) => ({
  container: () => ({
    position: 'fixed',
    inset: 0,
    zIndex: 10000,
    backdropFilter: 'blur(10px)',
    background: common.black,

'& .backArrowButtonContainer':{

'& button':{
  width:42,
  height:42,

},
zIndex:10000000,

  position: 'fixed',
  top:8,
  left:8

},

    '& .previewContainer': {
      background: colord(secondary.main).alpha(0.16).toHex(),
      borderRadius,
      padding:   10,
      // paddingLeft: 10,
      position: 'fixed'
    },
    '& .contentContainer': {
      padding: 20,
      paddingRight:60,
      position: 'absolute',
      '& button':{

width:42,
height:42,
position: 'absolute',
top:8,
right:8

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
  const dispatch = useDispatch();

  const { container } = useStyles();
  const currentStepElement = tipsElementArr[step];

  const handleAddTipElement: HandleAddTipElementType = newElement => {
    setTipsElementArr(state => [...state, newElement]);
  };

  if (!currentStepElement) {
    return <TipsContext.Provider value={{ handleAddTipElement }}> {children}</TipsContext.Provider>;
  }
  const v = document?.getElementById(currentStepElement?.id)?.getBoundingClientRect();
  //@ts-ignore
  const { width, height:H, x, y } = v;
  // console.log(v)

  const onClose = () => {
    dispatch(toChangeStatuses({ newStatuses: { isTipsLayoutHidden: true } }));
  };
  const height = H < 100 ? 100  : H
const top =  y === 0 ? 10 : y
  return (
    <TipsContext.Provider value={{ handleAddTipElement }}>
      <Zoom in={!isTipsLayoutHidden}>
        <Grid className={container}>
          <CloseVideoButton onClose={onClose} />
      {step !== 0 &&     <Grid className={'backArrowButtonContainer'}> <VideoButton onClick={() => setStep(n => n  - 1 )}>
                  <SvgIcon viewBox={'0 0 24 24'}>
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                  </SvgIcon>
                </VideoButton>
          </Grid>
                
                }

          <Grid container style={{ width, height, left: x, top }} className={'previewContainer'} alignItems={'center'}>
            {currentStepElement.element}
          </Grid>
          <Grid
            container

            className={'tipDenotationContainer'}
            style={{ left: x + width + 42,  top,height}}
          >
            <Grid className={'tringleContainer'} container>
              <Grid className={'contentContainer'} >
                <Typography color={'textSecondary'} component={'i'}>{currentStepElement?.title}</Typography>
                <VideoButton onClick={() => setStep(n => n + 1)}>
                  <SvgIcon viewBox={'0 0 24 24'}>
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                  </SvgIcon>
                </VideoButton>
              </Grid>

              <Grid className={'tringle'} />
            </Grid>
          </Grid>
        </Grid>
      </Zoom>
      {children}
    </TipsContext.Provider>
  );
};

export default TipsLayout;
