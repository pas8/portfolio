import { FC, useEffect } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Sphere from './components/Sphere';

const useStyles = makeStyles(({ palette: { background } }) => ({
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2
  }
}));

const Main: FC = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.container} justify={'center'} alignItems={'center'}> 
        <Sphere />
      </Grid>
    </>
  );
};

export default Main;
