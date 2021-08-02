import { FC } from 'react';
import { makeStyles, Grid, Typography, Dialog } from '@material-ui/core';
import { ResumeDialogPropsType } from './types';
import { Document, Page } from 'react-pdf';

const ResumeDialog: FC<ResumeDialogPropsType> = ({onClose,open}) => {
  return  <Dialog open={open} onClose={onClose}>
  <Document file="../ResumeDialog/ANATOLII_PONOCHENIUK_REACT_TYPESCRIPT_JUNIOR.pdf" />
</Dialog>
};

export default ResumeDialog;