import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber';
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
import { makeStyles } from '@material-ui/core';
import { TorusBufferGeometry } from 'three';
import { useMemo, useRef, useState, Suspense, useEffect } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Color } from 'three';
import { useWindowScroll } from 'react-use';

const useStyles = makeStyles(({ palette: { background } }) => ({
  '@global': {
    '*': {
      padding: 0,
      margin: 0
    },
    body: {
      background: background.default
    }
  },
  canvas: {
    minHeight: '100vh',
    minWidth: '100vw',
    bottom: 0,
    '& canvas': {
      position: 'fixed',
      inset: 0,

      height: '100% !important'
    }
  }
}));

const NUM = 3;

interface Positions {
  id: string;
  position: [number, number, number];
}

export default function PerspectiveCameraScene() {
  const classes = useStyles();

  const positions = useMemo(() => {
    const pos: Positions[] = [];
    const half = (NUM - 1) / 2;

    for (let x = 0; x < NUM; x++) {
      for (let y = 0; y < NUM; y++) {
        pos.push({
          id: `${x}-${y}`,
          position: [(x - half) * 4, (y - half) * 4, 0]
        });
      }
    }

    return pos;
  }, []);
  const [depthBuffer, setDepth] = useState();

  return (
    <Canvas className={classes.canvas}>
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 0, 0]} zoom={2} />
        <Stars />

        <Container />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
const H = () => {
  const torusRef = useRef();

  useFrame(() => {
    torusRef.current.rotation.x += 0.01;
    torusRef.current.rotation.y += 0.01;
    torusRef.current.rotation.z += 0.01;
  });

  return (
    <>
      <Octahedron args={[1, 1]} geometry={new TorusBufferGeometry(2, 1, 16, 42)} ref={torusRef}>
        <meshBasicMaterial color={'#f2d230'} wireframe />
      </Octahedron>
    </>
  );
};

const Container = () => {
  const { size, camera } = useThree();
  const marsRef = useRef();
  const randomItemRef = useRef();

  const handleMoveCamera = () => {
    const t = document.body.getBoundingClientRect().top;
    camera.position.z = t * -0.01;
    marsRef.current.position.x = 1 + t * 0.001;
    marsRef.current.position.y = 1 + t * 0.004;
  };

  document.body.onscroll = handleMoveCamera;

  useFrame(() => {
    marsRef.current.rotation.x += 0.004;
    marsRef.current.rotation.y += 0.004;
    marsRef.current.rotation.z += 0.004;
  });

  const normalMars = useTexture('normalMars.png');
  const mars = useTexture('mars.jpeg');

  const gradientMap = useTexture('gradient.jpeg');

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <Billboard
        position={[-20, -2, 0]}
        args={[3, 2]}
        // material-color="red"
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false}
      >
        <meshStandardMaterial displacementScale={0.2} map={mars} />
      </Billboard>

      {/* <mesh position={[0, 0, 0]} ref={randomItemRef}>
        <torusKnotGeometry args={[8, 0.2, 32, 16]} />
        <meshNormalMaterial gradientMap={gradientMap} />
      </mesh> */}

      <mesh position={[1, -1, -1]} ref={marsRef}>
        <sphereGeometry args={[0.4, 32, 16 ]} />
        <meshStandardMaterial map={mars} normalMap={normalMars} />
      </mesh>
    </>
  );
};
