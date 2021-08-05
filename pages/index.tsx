import { Grid } from '@material-ui/core';
import { FC } from 'react';
import dynamic from 'next/dynamic';
import { useThree } from '@react-three/fiber';

const Main = dynamic(() => import('components/Main'));

const Index: FC = () => {
  return (
    <>
      <Main />
    </>
  );
};

export default Index;
