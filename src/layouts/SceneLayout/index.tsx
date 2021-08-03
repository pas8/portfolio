import dynamic from 'next/dynamic';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getIsMain3dSceneHidden } from 'store/modules/App/selectors';

const Scene = dynamic(() => import('components/Scene'), { ssr: false });

const SceneLayout: FC = ({ children }) => {
const isMain3dSceneHidden = useSelector(getIsMain3dSceneHidden)

  return (
    <>
      {children}
   {isMain3dSceneHidden &&    <Scene />}
    </>
  );
};

export default SceneLayout;
