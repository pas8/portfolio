import { FC, useRef,Suspense } from 'react';
import {
  Icosahedron,
  PerspectiveCamera,
  OrthographicCamera,
  OrbitControls,
  useSimplification,
  // Box,
  DepthBuffer,
  Plane,
  Octahedron,
  SpotLight,
  Polyhedron,
  Stars,
  Billboard,
  shaderMaterial,
  useTexture
} from '@react-three/drei';

import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber';
import { makeStyles } from '@material-ui/core';

const useLocalStyles = makeStyles(({ palette: { background } }) => ({
  canvasContainer: {
    inset: 0,
    height: 400,
    position: 'fixed',
    '& canvas': {
      height: '100% !important',
      width:'100% !important'
    },
    width: 400
  }
}));

const CanvasWithPas: FC = () => {
  const { canvasContainer } = useLocalStyles();

  return (
    <Canvas className={canvasContainer}>
      <Suspense fallback={null}>

      <Box />
      </Suspense>

    </Canvas>
  );
};

export default CanvasWithPas;

const Box = () => {
  const normalMap = useTexture('ava2.jpg');
  const ref = useRef();
  // useFrame(() => {
  //   ref.current.rotation.x += 0.01;
  //   // ref.current.rotation.y += 0.01;
  //   // ref.current.rotation.z += 0.01;
  // });
  return (
    <>
      {/* <ambientLight intensity={0.1} /> */}
      {/* <directionalLight /> */}
      <mesh position={[-10, 10, 10]} ref={ref}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial map={normalMap} />
      </mesh>
    </>
  );
};
