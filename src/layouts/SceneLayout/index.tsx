import dynamic from 'next/dynamic';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getIsMain3dSceneHidden } from 'store/modules/App/selectors';

const Scene = dynamic(() => import('components/Scene'), { ssr: false });

const SceneLayout: FC = ({ children }) => {
  const isMain3dSceneHidden = useSelector(getIsMain3dSceneHidden);

  // const isSceneHidden = isMain3dSceneHidden || navigator.userAgent.indexOf('Firefox') != -1;
  const isSceneHidden = false;

  return (
    <>
      {children}
      {!isSceneHidden && <Scene />}
    </>
  );
};

export default SceneLayout;
