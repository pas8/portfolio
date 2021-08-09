import { FC } from 'react';
import { Dialog, DialogProps, useMediaQuery, useTheme, SvgIcon, makeStyles, Grid } from '@material-ui/core';
import VideoButton from 'components/VideoButton';
import { FCCloseVideoButtonType } from 'models/types';

const useStyles = makeStyles(({ palette: { background, secondary, primary }, breakpoints }) => ({
  closeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 10000000,
    '& button': {
      width: 42,
      height: 42
    }
  }
}));

const CloseVideoButton: FCCloseVideoButtonType = ({ onClose }) => {
  const { closeButton } = useStyles();

  return (
    <Grid className={closeButton}>
      <VideoButton onClick={onClose}>
        <SvgIcon viewBox={'0 0 24 24'}>
          <path
            d={
              'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'
            }
          />
        </SvgIcon>
      </VideoButton>
    </Grid>
  );
};

export default CloseVideoButton;
