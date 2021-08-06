import { makeStyles } from '@material-ui/core';
import { FC } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

const useLocalStyles = makeStyles(
  ({ palette: { background, secondary, primary, text }, breakpoints, shape: { borderRadius } }) => ({
    '@global': {
      '*': {
        scrollbarColor: `${secondary.main} #292731`,
        cursor: 'none !important'
        // '&::-webkit-scrollbar-thumb':{
        // background:secondary.main

        // },
        // '&::-webkit-scrollbar-track':{
        //   background:secondary.main

        // }
        // overflowY: 'hidden'
      }
    }
  })
);

const ScrollLayout: FC = ({ children }) => {
  useLocalStyles();

  return <ParallaxProvider>{children}</ParallaxProvider>;
};

export default ScrollLayout;
