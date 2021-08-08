import { makeStyles } from '@material-ui/core';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { sectionIds } from 'models/denotation';
import { FC } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

const useLocalStyles = makeStyles(
  ({ palette: { background, secondary, primary, text }, breakpoints, shape: { borderRadius } }) => ({
    '@global': {
      '*': {
        scrollbarColor: `${secondary.main} #292731`,
        cursor: 'none !important',
        scrollBehavior: 'smooth'
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

  useScrollAnimation(Object.values(sectionIds));

  return <ParallaxProvider>{children}</ParallaxProvider>;
};

export default ScrollLayout;
