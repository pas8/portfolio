import { makeStyles, Zoom, Grid,Typography } from '@material-ui/core';
import { colord } from 'colord';
import { createContext, FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsTipsLayoutHidden } from 'store/modules/App/selectors';
import { tipsElementIds } from 'models/denotation';
import { useIsomorphicLayoutEffect } from 'react-use';
import { useRef } from 'react';
import { HandleAddTipElementType } from 'models/types';

export const TipsContext = createContext<{ handleAddTipElement: HandleAddTipElementType }>({
  handleAddTipElement: (__: any) => {}
});

const useStyles = makeStyles(({ palette: { secondary, common }, breakpoints, shape: { borderRadius } }) => ({
  container: () => ({
    position: 'fixed',
    inset: 0,
    zIndex: 10000,
    backdropFilter: 'blur(10px)',
    background: common.black,
    '& .previewContainer': {
      background: colord(secondary.main).alpha(0.42).toHex(),
      borderRadius,
      paddingRight: 10,
      paddingLeft: 20,
      position: 'fixed'
    },
'& .contentContainer':{
padding:20,
position:'absolute',


},

    '& .tipDenotationContainer': {
      width: 400,
      height: 200,
      position: 'fixed',
      background: colord(secondary.main).alpha(0.16).toHex(),
      borderRadius,
      '& .tringleContainer':{
        height:'100%',
position:'relative',


      '& .tringle': {
        position:'absolute',
        marginLeft:-20,
        borderTop: '20px solid transparent',
        borderBottom: '20px solid transparent',
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
  const [step, setStep] = useState(1);

  const { container } = useStyles();
  const currentStepElement = tipsElementArr[step - 0];

  const handleAddTipElement: HandleAddTipElementType = newElement => {
    setTipsElementArr(state => [...state, newElement]);
  };

  if (!currentStepElement) {
    return <TipsContext.Provider value={{ handleAddTipElement }}> {children}</TipsContext.Provider>;
  }
  const v = document?.getElementById(currentStepElement?.id)?.getBoundingClientRect();
  //@ts-ignore
  const { width, height, x, y } = v;
  // console.log(v)
  return (
    <TipsContext.Provider value={{ handleAddTipElement }}>
      <Zoom in={!isTipsLayoutHidden}>
        <Grid className={container}>
          <Grid container style={{ width, height, left: x, top: y }} className={'previewContainer'}>
            {currentStepElement.element}
          </Grid>
          <Grid
            container
            className={'tipDenotationContainer'}
            style={{ left: x + width + 42, top: y - 242 / 2 + height }}
          >

<Grid className={'tringleContainer'} container alignItems={'center'}>
<Grid className={'contentContainer'}>
  <Typography color={'textSecondary'}>
    {currentStepElement?.title}
  </Typography>
  </Grid>
{/* <VideoButton> */}
<Grid className={'tringle'}/>

          </Grid>
          </Grid>
        </Grid>
      </Zoom>
      {children}
    </TipsContext.Provider>
  );
};

export default TipsLayout;
