import { makeStyles, ButtonBase, Grid } from '@material-ui/core';
import { FC } from 'react';
import { colord } from 'colord';

const useLocalStyles = makeStyles(
  ({ palette: { background, secondary, text, primary }, breakpoints, shape: { borderRadius } }) => ({
    button: {
      overflow: 'hidden',
      position: 'relative',
      borderRadius,
      color: text.primary,

      '&:hover': {
        '& .content': {
          background: secondary.main
        }
      },
      '& .content': {
      background: colord(secondary.main).alpha(0.42).toHex(),

        position: 'absolute',
        inset: 0
      }
    }
  })
);
const VideoButton: FC<{ onClick: () => void }> = ({ onClick, children }) => {
  const { button } = useLocalStyles();

  return (
    <ButtonBase onClick={onClick} className={button}>
      <video src="https://cdn.lost.show/mf/video/button-gradient.mp4" muted="" loop autoplay="" playsinline=""></video>

      <Grid container justifyContent={'center'} alignItems={'center'} className={'content'}>
        {children}
      </Grid>
    </ButtonBase>
  );
};

export default VideoButton;
