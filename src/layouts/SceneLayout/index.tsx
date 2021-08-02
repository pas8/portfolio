import dynamic from 'next/dynamic';
import { FC } from 'react';

const Scene = dynamic(() => import('components/Scene'), { ssr: false });

const SceneLayout: FC = ({ children }) => {
  return (
    <>
      {children}
      <Scene />
    </>
  );
};

export default SceneLayout;
