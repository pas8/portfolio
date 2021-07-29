import { Grid } from '@material-ui/core';
import { FC } from 'react';
import dynamic from 'next/dynamic';
import { useThree } from '@react-three/fiber';

const Scene = dynamic(() => import('components/Scene'), { ssr: false });

const Index: FC = () => {
  return (
    <>
      <Scene />
    </>
  );
};

export default Index;
