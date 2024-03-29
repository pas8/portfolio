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
  useProgress,
  Stars,
  Billboard,
  shaderMaterial,
  useTexture
} from '@react-three/drei';
import { makeStyles } from '@material-ui/core';
import { TorusBufferGeometry } from 'three';
import { useMemo, useRef, useState, Suspense, useEffect, MouseEvent, Dispatch } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';
import { useWindowScroll } from 'react-use';
import { usePermission, useWindowSize } from 'react-use';
import { Vector3 } from '@react-three/fiber';
import { useDispatch, useSelector } from 'react-redux';
import { toChangeLoadingProperties, toChangeTextureMaps } from 'store/modules/App/actions';
import { FC } from 'react';
import { getIsSoundPaused, getSoundIdx } from 'store/modules/App/selectors';

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

const Scene: FC = () => {
  const classes = useStyles();
  const { active, progress, } = useProgress();
  const dispatch = useDispatch();
  const soundIdx = useSelector(getSoundIdx);
  const isSoundPaused = useSelector(getIsSoundPaused);

  useEffect(() => {
    dispatch(toChangeLoadingProperties({ loadingProperties: { isLoading: active, percent: progress } }));
  }, [active, progress]);

  return (
    <Canvas className={classes.canvas}>
      <PerspectiveCamera makeDefault position={[0, 0, 0]} />

      <Suspense fallback={null}>
        <Stars />

        <Container dispatch={dispatch} soundIdx={soundIdx**Math.cbrt(soundIdx)} isSoundPaused={isSoundPaused} />
      </Suspense>
    </Canvas>
  );
};

const Container: FC<{ dispatch: Dispatch<any>; isSoundPaused: boolean; soundIdx: number }> = ({
  dispatch,
  isSoundPaused,
  soundIdx
}) => {
  const { camera } = useThree();

  const handleMoveCameraOnMouseMove = (e: any) => {
    camera.position.x = e.clientX * 0.0001;
    camera.position.z = e.clientX * 0.0004;
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMoveCameraOnMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMoveCameraOnMouseMove);
    };
  }, []);

  const marsRef: any = useRef();
  const sunRef: any = useRef();
  const mercuryRef: any = useRef();
  const venusRef: any = useRef();
  const moonRef: any = useRef();
  const darkMateriaRef: any = useRef();
  const neptunRef: any = useRef();
  const jupiterRef: any = useRef();
  const earthRef: any = useRef();
  const saturnRef: any = useRef();
  const uranusRef: any = useRef();

  const [
    sunNormalMap,
    sunMap,
    mercuryNormalMap,
    mercuryMap,
    venusNormalMap,
    venusMap,
    earthNormalMap,
    earthMap,
    marsNormalMap,
    marsMap,
    jupiterNormalMap,
    jupiterMap,
    saturnNormalMap,
    saturnMap,
    uranusNormalMap,
    uranusMap,
    neptunNormalMap,
    neptunMap,
    moonMap,
    moonNormalMap,
    avatarMap,
    ...skillsTextureArr
  ] = useTexture([
    'sunNormalMap.png',
    'sunMap.jpeg',
    'mercuryNormalMap.png',
    'mercuryMap.jpeg',
    'venusNormalMap.png',
    'venusMap.jpeg',
    'earthNormalMap.png',
    'earthMap.jpeg',
    'marsNormalMap.png',
    'marsMap.png',
    'jupiterNormalMap.png',
    'jupiterMap.jpg',
    'saturnNormalMap.png',
    'saturnMap.jpeg',
    'uranusNormalMap.png',
    'uranusMap.jpeg',
    'neptunNormalMap.png',
    'neptunMap.jpeg',
    'moonMap.jpg',
    'moonNormalMap.png',
    'avatar.JPG',
    'next.png',
    '_lodash.png',
    'firebase.png',
    'git.png',
    'gitHub.png',
    'html.png',
    'js.png',
    'materialUi.png',
    'npm.png',
    'redux.png',
    'scss.png',
    'ts.png'
  ]);

  useEffect(() => {
    dispatch(toChangeTextureMaps({ textureMaps: { avatar: avatarMap, skillsTextureArr } }));
  }, [avatarMap]);

  useFrame(() => {
    if (isSoundPaused) return;
    mercuryRef.current.rotation.x += 0.0042 * soundIdx;
    mercuryRef.current.rotation.y += 0.0042 * soundIdx;

    venusRef.current.rotation.x += 0.0042 * soundIdx;
    venusRef.current.rotation.y += 0.0042 * soundIdx;

    sunRef.current.rotation.x += 0.0032 * soundIdx;
    sunRef.current.rotation.y += 0.0032 * soundIdx;

    earthRef.current.rotation.x += 0.0036 * soundIdx;
    earthRef.current.rotation.y += 0.0036 * soundIdx;

    marsRef.current.rotation.x += 0.002 * soundIdx;
    marsRef.current.rotation.y += 0.002 * soundIdx;
    marsRef.current.rotation.z += 0.002 * soundIdx;

    neptunRef.current.rotation.x += 0.012 * soundIdx;
    neptunRef.current.rotation.y += 0.012 * soundIdx;
    neptunRef.current.rotation.z += 0.012 * soundIdx;

    jupiterRef.current.rotation.x += 0.0016 * soundIdx;
    jupiterRef.current.rotation.y += 0.0016 * soundIdx;
    jupiterRef.current.rotation.z += 0.0016 * soundIdx;

    saturnRef.current.rotation.x += 0.002 * soundIdx;
    saturnRef.current.rotation.y += 0.002 * soundIdx;
    saturnRef.current.rotation.z += 0.002 * soundIdx;

    uranusRef.current.rotation.x += 0.06 * soundIdx;
    uranusRef.current.rotation.y += 0.06 * soundIdx;
    uranusRef.current.rotation.z += 0.06 * soundIdx;

    moonRef.current.rotation.x += 0.008 * soundIdx;
    moonRef.current.rotation.y += 0.008 * soundIdx;
    moonRef.current.rotation.z += 0.008 * soundIdx;

    // mercuryRef.current.position.x = orbitSpeed.MERCURY * Math.cos(theta);
    // mercuryRef.current.position.z = -1.07 + r * Math.sin(theta);

    // venusRef.current.position.x = orbitSpeed.VENUS * Math.cos(theta);
    // venusRef.current.position.z = -1.06 + r * Math.sin(theta);

    // earthRef.current.position.x = orbitSpeed.EARTH * Math.cos(theta);
    // earthRef.current.position.z = -1.05 + 0.5 * Math.sin(theta);

    // darkMateriaRef.current.rotation.x += 0.004;
    // darkMateriaRef.current.rotation.y += 0.004;
    // neptunRef.current.rotation.x += 0.004;
    // neptunRef.current.rotation.y += 0.004;
  });

  const positions = {
    mars: {
      X: 1,
      Y: -0.8
    },
    sun: {
      X: 0.8,
      Y: 0.4
    },
    mercury: {
      X: -0.82,
      Y: 0.48
    },

    venus: {
      X: -0.4,
      Y: -0.8
    },
    earth: {
      X: -0.4,
      Y: -0.6
    },

    jupiter: {
      X: 0.8,
      Y: -2
    },
    saturn: {
      X: -1.6,
      Y: -2.4
    },
    uranus: {
      X: 1.6,
      Y: -3.6
    },
    neptun: {
      X: 0.6,
      Y: 0.2
    },
    moon: {
      X: -0.5,
      Y: -0.2
    }
  };

  const handleMoveCamera = (e: any) => {
    const t = document.body.getBoundingClientRect().top;

    marsRef.current.position.x = (-1800 > t ? 4 : positions.mars.X) + t * 0.0016;
    marsRef.current.position.y = (-1800 > t ? -2 : positions.mars.Y) - t * 0.001;
    marsRef.current.position.z = (-1800 > t ? -3 : -1) - t * 0.001;

    sunRef.current.position.x = (-1800 > t ? 5 : positions.sun.X) + t * 0.0016;
    sunRef.current.position.y = positions.sun.Y + t * 0.0002;
    sunRef.current.position.z = (-1800 > t ? -2 : -1) - t * 0.0004;

    mercuryRef.current.position.x = (-2400 > t ? -5 : positions.mercury.X) - t * 0.0016;
    mercuryRef.current.position.y = (-2400 > t ? 2.68 : positions.mercury.Y) + t * 0.0008;
    mercuryRef.current.position.z = (-2400 > t ? -2 : -1) - t * 0.0004;

    venusRef.current.position.x = (-2000 > t ? -2 : positions.venus.X) - t * 0.0008;
    venusRef.current.position.y = positions.venus.Y - t * 0.0004;
    venusRef.current.position.z = -1 - t * 0.0004;
    earthRef.current.position.y = (-2600 > t ? -1.2 : positions.earth.Y) - t * 0.0004;
    earthRef.current.position.x = (-2600 > t ? -1.6 : positions.earth.X) - t * 0.0004;
    earthRef.current.position.z = (-2600 > t ? -1.6 : -1) - t * 0.0004;

    jupiterRef.current.position.x = (-1800 > t ? 3 : positions.jupiter.X) + t * 0.0008;
    jupiterRef.current.position.y = (-1800 > t ? -5 : positions.jupiter.Y) - t * 0.0016;
    jupiterRef.current.position.z = (-1800 > t ? -2 : -1) - t * 0.0004;

    saturnRef.current.position.x = -3000 > t ?4 + t * 0.0012 : positions.saturn.X - t * 0.001;
    saturnRef.current.position.y = -3000 > t ? -1.6 - t * 0.0004 : positions.saturn.Y - t * 0.0016;
    saturnRef.current.position.z = -3000 > t ? -4 - t * 0.0008 : -1 - t * 0.0004;

    uranusRef.current.position.x = positions.uranus.X + t * 0.0006;
    uranusRef.current.position.y = positions.uranus.Y - t * 0.0014;
    uranusRef.current.position.z = -1.4 - t * 0.0002;

    neptunRef.current.position.y = positions.neptun.Y + t * 0.0006;
    neptunRef.current.position.z = -1 - t * 0.0004;

    moonRef.current.position.x = -3200 > t ?3 + t * 0.0008 : positions.moon.X +  t * 0.0004
    moonRef.current.position.y = -3200 > t ? 4.4 + t * 0.0012 : positions.moon.Y +  t * 0.0004
    moonRef.current.position.z = -3200 > t ? -2 - t * 0.0004 : -1;

  };

  document.body.onscroll = handleMoveCamera;

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <Billboard
        position={[-20, -2, 0]}
        args={[3, 2]}
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false}
      >
      </Billboard>
      <pointLight args={[0x6549b8, 2]} position={[2, 0.8, -4]} />
      <pointLight args={[0x30b47f, 2]} position={[2, 0.4, -2]} />
      <pointLight args={[0x401d2a, 4]} position={[0.2, 0.8, -4]} />

      <pointLight args={[0xcf3626, 0.2]} position={[0, 0.4, -2]} />

      <mesh ref={sunRef} position={[positions.sun.X, positions.sun.Y, -1]}>
        <sphereGeometry args={[0.16, 32, 16]} />
        <meshStandardMaterial map={sunMap} normalMap={sunNormalMap} />
      </mesh>

      <mesh position={[positions.mercury.X, positions.mercury.Y, -1]} ref={mercuryRef}>
        <sphereGeometry args={[0.1, 32, 16]} />
        <meshStandardMaterial map={mercuryMap} normalMap={mercuryNormalMap} />
      </mesh>

      <mesh position={[positions.venus.X, positions.venus.Y, -1]} ref={venusRef}>
        <sphereGeometry args={[0.1, 32, 16]} />
        <meshStandardMaterial map={venusMap} normalMap={venusNormalMap} />
      </mesh>

      <mesh position={[positions.venus.X, positions.venus.Y, -1]} ref={earthRef}>
        <sphereGeometry args={[0.08, 32, 16]} />
        <meshStandardMaterial map={earthMap} normalMap={earthNormalMap} />
      </mesh>

      <mesh position={[positions.mars.X, positions.mars.Y, -1]} ref={marsRef}>
        <sphereGeometry args={[0.08, 32, 16]} />
        <meshStandardMaterial map={marsMap} normalMap={marsNormalMap} />
      </mesh>

      <mesh position={[positions.jupiter.X, positions.jupiter.Y, -1]} ref={jupiterRef}>
        <sphereGeometry args={[0.1, 32, 16]} />
        <meshStandardMaterial map={jupiterMap} normalMap={jupiterNormalMap} />
      </mesh>

      <mesh position={[positions.saturn.X, positions.saturn.Y, -1]} ref={saturnRef}>
        <sphereGeometry args={[0.12, 32, 16]} />
        <meshStandardMaterial map={saturnMap} normalMap={saturnNormalMap} />
      </mesh>

      <mesh position={[positions.uranus.X, positions.uranus.Y, -1]} ref={uranusRef}>
        <sphereGeometry args={[0.042, 32, 16]} />
        <meshStandardMaterial map={uranusMap} normalMap={uranusNormalMap} />
      </mesh>

      <mesh position={[positions.neptun.X, positions.neptun.Y, -1]} ref={neptunRef}>
        <sphereGeometry args={[0.036, 32, 16]} />
        <meshStandardMaterial map={neptunMap} normalMap={neptunNormalMap} />
      </mesh>
      <mesh position={[positions.moon.X, positions.moon.Y, -1]} ref={moonRef}>
        <sphereGeometry args={[0.08, 32, 16]} />
        <meshStandardMaterial map={moonMap} normalMap={moonNormalMap} />
      </mesh>
    </>
  );
};

export default Scene;
