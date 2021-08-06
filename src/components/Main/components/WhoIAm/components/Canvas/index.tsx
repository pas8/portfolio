import { FC, useRef, Suspense } from 'react';
import { Icosahedron, useTexture } from '@react-three/drei';
import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber';
import { useBreakpointNames } from 'hooks/useBreakpointNames.hook';
import { useSelector } from 'react-redux';
import { getAvatarMap } from 'store/modules/App/selectors';

const CanvasWithPas: FC = () => {
  const { isSizeIsLg, isSizeIsMd, isSizeIsSm, isSizeIsXl, isSizeIsXs } = useBreakpointNames();
  const width = isSizeIsXl
    ? 'calc(25vw)'
    : isSizeIsLg
    ? 'calc(25vw)'
    : isSizeIsMd
    ? 'calc(40vw)'
    : isSizeIsSm
    ? 'calc(48vw)'
    : 'calc(100vw - 42px)';
  const avaMap = useSelector(getAvatarMap);

  return (
    <Canvas style={{ width, height: width, marginLeft: isSizeIsXs ? '-8%' : '-10%' }}>
      <Suspense fallback={null}>
        <hemisphereLight intensity={0.42} />
        <spotLight
          color={'#a409ff'}
          position={[42, 0, 92]}
          angle={0.8}
          penumbra={1}
          intensity={2}
          castShadow
          shadow-mapSize-width={256}
          shadow-mapSize-height={256}
        />
        <Box avaMap={avaMap} />
      </Suspense>
    </Canvas>
  );
};

export default CanvasWithPas;

const Box: FC<{ avaMap: any }> = ({ avaMap }) => {
  const avaRef: any = useRef();

  useFrame(() => {
    avaRef.current.rotation.y += 0.004;
  });

  return (
    <mesh ref={avaRef}>
      <boxBufferGeometry attach="geometry" args={[3.7, 3.7, 3.7]} />
      <meshLambertMaterial map={avaMap} />
    </mesh>
  );
};
