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
import { useDispatch } from 'react-redux';
import { toChangeLoadingProperyies, toChangeTextureMaps } from 'store/modules/App/actions';
import { FC } from 'react';

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
  const { active, progress,  ...props} = useProgress();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toChangeLoadingProperyies({ loadingProperyies: { isLoading: active, percent: progress } }));
  }, [active, progress]);

  return (
    <Canvas className={classes.canvas}>
      <PerspectiveCamera makeDefault position={[0, 0, 0]} />

      <Suspense fallback={null}>
        <Stars />

        <Container dispatch={dispatch} />
      </Suspense>
    </Canvas>
  );
};

const Container: FC<{ dispatch: Dispatch<any> }> = ({ dispatch }) => {
  const { size, camera } = useThree();

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
    avaMap,
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
    'ava3.jpg',
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
    dispatch(toChangeTextureMaps({ textureMaps: { avatar: avaMap, skillsTextureArr } }));
  }, [avaMap]);

  // const planetsArr = [
  //   {
  //     map: sunMap,
  //     normalMap: sunNormalMap,
  //     size:0.2,
  //     ref:sunRef,
  //     position: [ 35,0,0]
  //   },

  //   {
  //     map: mercuryMap,
  //     ref:mercuryRef,
  //     normalMap: mercuryNormalMap,
  //     size:0.1,
  //     position: [ 35,0,0]
  //   },

  // ] as {
  //   size:number;
  //   ref:any;
  //   map: Texture;
  //   position: Vector3;
  //   normalMap: Texture;
  // }[];

  const groupRef: any = useRef();

  var r = 0.5;
  var theta = 0;
  var dTheta = (2 * Math.PI) / 1000;

  const orbitSpeed = {
    MERCURY: 0.622,
    VENUS: 0.85,
    EARTH: 1,
    MARS: 0.802,
    JUPITER: 0.434,
    SATURN: 0.323,
    URANUS: 0.228,
    NEPTUNE: 0.182
  };

  useFrame(() => {
    theta += dTheta;
    mercuryRef.current.rotation.x += 0.008;
    mercuryRef.current.rotation.y += 0.008;

    venusRef.current.rotation.x += 0.01;
    venusRef.current.rotation.y += 0.01;

    sunRef.current.rotation.x += 0.004;
    sunRef.current.rotation.y += 0.004;

    earthRef.current.rotation.x += 0.004;
    earthRef.current.rotation.y += 0.004;

    marsRef.current.rotation.x += 0.004;
    marsRef.current.rotation.y += 0.004;
    marsRef.current.rotation.z += 0.004;

    neptunRef.current.rotation.x += 0.02;
    neptunRef.current.rotation.y += 0.02;
    neptunRef.current.rotation.z += 0.02;

    jupiterRef.current.rotation.x += 0.003;
    jupiterRef.current.rotation.y += 0.003;
    jupiterRef.current.rotation.z += 0.003;

    saturnRef.current.rotation.x += 0.005;
    saturnRef.current.rotation.y += 0.005;
    saturnRef.current.rotation.z += 0.005;

    uranusRef.current.rotation.x += 0.01;
    uranusRef.current.rotation.y += 0.01;
    uranusRef.current.rotation.z += 0.01;
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

    saturnRef.current.position.x = positions.saturn.X - t * 0.001;
    saturnRef.current.position.y = positions.saturn.Y - t * 0.0016;
    saturnRef.current.position.z = -1 - t * 0.0004;

    uranusRef.current.position.x = positions.uranus.X + t * 0.0006;
    uranusRef.current.position.y = positions.uranus.Y - t * 0.0014;
    uranusRef.current.position.z = -1 - t * 0.0004;

    neptunRef.current.position.y = positions.neptun.Y + t * 0.0006;
    neptunRef.current.position.z = -1 - t * 0.0004;

    // sunRef.current.rotation.x += 0.004;
    // sunRef.current.rotation.y += 0.004;

    // marsRef.current.position.y = 1 + t * 0.004;
  };

  document.body.onscroll = handleMoveCamera;

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
        {/* <meshStandardMaterial displacementScale={0.2} map={mars} /> */}
      </Billboard>
      <pointLight args={[0x6549b8, 2]} position={[2, 0.8, -4]} />
      <pointLight args={[0x30b47f, 2]} position={[2, 0.4, -2]} />
      <pointLight args={[0x401d2a, 4]} position={[0.2, 0.8, -4]} />
      {/* <mesh position={[1, 0.6, -4]} ref={darkMateriaRef}>
        <sphereGeometry args={[0.2, 32, 16]} />
        <meshStandardMaterial normalMap={darkMateriaNormalMap} metalness={0.6} roughness={0.4} color={0x292929} />
      </mesh> */}

      <pointLight args={[0xcf3626, 0.2]} position={[0, 0.4, -2]} />

      <mesh ref={sunRef} position={[positions.sun.X, positions.sun.Y, - 1]}>
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
    </>
  );
};

// var videoTexture= new THREEx.VideoTexture('videos/sintel.ogv')
// updateFcts.push(function(delta, now){
//     // to update the texture are every frame
//     videoTexture.update(delta, now)
// })

// const videoRef = useRef<HTMLVideoElement>();

// var video = document.createElement('video');
// video.loop = true;
// video.crossOrigin = 'anonymous';
// video.preload = 'auto';
// video.src = 'https://cdn.lost.show/mf/video/button-gradient.mp4';
// video.play();

// var texture = new THREE.VideoTexture(video);
// texture.minFilter = THREE.NearestFilter;
// texture.magFilter = THREE.LinearFilter;
// texture.format = THREE.RGBFormat;

export default Scene;
