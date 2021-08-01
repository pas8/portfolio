import { FC, useEffect } from 'react';
import { useWindowScroll } from 'react-use';

import { makeStyles, Grid } from '@material-ui/core';
import MySkills from './components/MySkills';
import WhoIAm from './components/WhoIAm';
import Greeting from './components/Greeting/index';
const useStyles = makeStyles(({ palette: { background } }) => ({
  container: {
    position: 'absolute',
    top: 0,
    padding: 42,
    left: 0,
    right: 0,
    zIndex: 2
  }
}));

const Main: FC = () => {
  const classes = useStyles();


  return (
    <>
      <Grid container className={classes.container} justify={'center'} alignItems={'center'}  >
        <Greeting />
        <WhoIAm/>
        <MySkills />
      </Grid>
    </>
  );
};

export default Main;
