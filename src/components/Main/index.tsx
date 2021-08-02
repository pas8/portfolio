import { FC, useEffect } from 'react';
import { useWindowScroll } from 'react-use';

import { makeStyles, Grid } from '@material-ui/core';
import MySkills from './components/MySkills';
import WhoIAm from './components/WhoIAm';
import Greeting from './components/Greeting/index';



const useStyles = makeStyles(({ palette: { background },breakpoints }) => ({
  container: {
[breakpoints.down('xl')]:{

  left: 320,
  right: 320,
},

[breakpoints.down('lg')]:{

  left: 200,
  right: 200,
},

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
      <Grid  className={classes.container} >
        <Greeting />
        <WhoIAm/>
        <MySkills />
      </Grid>
    </>
  );
};

export default Main;
