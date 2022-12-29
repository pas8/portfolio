import { FC, useEffect } from 'react';
import { useWindowScroll } from 'react-use';

import { makeStyles, Grid } from '@material-ui/core';
import MySkills from './components/MySkills';
import WhoIAm from './components/WhoIAm';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Greeting from './components/Greeting/index';
import Inspired from './components/Inspired/index';
import Blog from './components/Blog/index';
import { BlogDataType } from 'models/types';

const useStyles = makeStyles(({ palette: { background }, breakpoints }) => ({
  container: {
    // perspective: 960,
    display: 'flex',
    height:100000,
    flexDirection: 'column',
    [breakpoints.down('xl')]: {
      left: 280 + 142,
      right: 280,
      gap: 116
    },

    [breakpoints.down('lg')]: {
      left: 240,
      right: 100,
      gap: 100
    },
    [breakpoints.down('md')]: {
      left: 42,
      right: 42,
      gap: 92
    },
    [breakpoints.down('sm')]: {
      left: 16,
      right: 16,
      gap: 80
    },

    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2
  }
}));

const Main: FC<{
  blogArr: BlogDataType;
}> = ({ blogArr }) => {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.container}>
        {/* <Greeting />
        <WhoIAm />
        <MySkills />
        <Experience />
        <Contact />
        <Blog blogArr={blogArr} />
        <Inspired /> */}
      </Grid>
    </>
  );
};

export default Main;
