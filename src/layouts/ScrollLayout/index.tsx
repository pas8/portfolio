import { makeStyles } from '@material-ui/core';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { sectionIds } from 'models/denotation';
import { FC } from 'react';

const useLocalStyles = makeStyles(
  ({ palette: { background, secondary, primary, text }, breakpoints, shape: { borderRadius } }) => ({
    '@global': {
      body: {
        '&::-webkit-scrollbar-thumb': {
          background: secondary.main
        },
        '&::-webkit-scrollbar-track': {
          background: ' #292731'
        },
        '&::-webkit-scrollbar': {
          width: 8
        }
      },
      '*': {
        scrollbarColor: `${secondary.main} #292731`,
        cursor: 'none !important',
        scrollBehavior: 'smooth'

        // overflowY: 'hidden'
      }
    }
  })
);

const ScrollLayout: FC = ({ children }) => {
  useLocalStyles();
  useScrollAnimation(Object.values(sectionIds));

  return <>{children}</>;
};

export default ScrollLayout;
