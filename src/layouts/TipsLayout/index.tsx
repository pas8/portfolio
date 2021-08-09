import { makeStyles, Zoom, Grid } from '@material-ui/core';
import { colord } from 'colord';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getIsTipsLayoutHidden } from 'store/modules/App/selectors';
import { tipsElementIds } from 'models/denotation';

const useStyles = makeStyles(({ palette: { secondary }, breakpoints, shape: { borderRadius } }) => ({
  container: {
    backdropFilter: 'blur(10px)',
    background: colord(secondary.main).alpha(0.08).toHex()
  }
}));

const TipsLayout: FC = ({ children }) => {
  const isTipsLayoutHidden = useSelector(getIsTipsLayoutHidden);

  const tipsArr = [
    {
      title: 'CLick to button to start animation or to pause.',
      id: tipsElementIds.PLAY_OR_PAUSE_SOUND_BUTTON
    },
    {
      title: 'U can easyly change spped and voice from this changing value of this slider.',
      id: tipsElementIds.SLIDER_OF_SOUND_IDX
    }
  ];

  const { container } = useStyles();

  return (
    <>
      {/* <Zoom in={!isTipsLayoutHidden}>
        <Grid className={container}>



        </Grid>
      </Zoom> */}
      {children}
    </>
  );
};

export default TipsLayout;
