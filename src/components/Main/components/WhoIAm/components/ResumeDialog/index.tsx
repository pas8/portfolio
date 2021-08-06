import { FC } from 'react';
import { makeStyles, Grid, Typography, Dialog } from '@material-ui/core';
import { ResumeDialogPropsType } from './types';

const ResumeDialog: FC<ResumeDialogPropsType> = ({ onClose, open }) => {
  return (
    <Dialog open={open} onClose={onClose}>

    </Dialog>
  );
};

export default ResumeDialog;
