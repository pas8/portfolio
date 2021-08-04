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
import { useMemo, useRef, useState, Suspense, useEffect, MouseEvent } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';
import { useWindowScroll } from 'react-use';
import { usePermission, useWindowSize } from 'react-use';
import { Vector3 } from '@react-three/fiber';

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

const Scene = () => {
  const classes = useStyles();
  const k = useProgress();
  // console.log(k)
  return (
    <Canvas className={classes.canvas}>
      <PerspectiveCamera makeDefault position={[0, 0, 0]} />

      <Suspense fallback={null}>
        <Stars />

        <Container />
      </Suspense>
    </Canvas>
  );
};

const Container = () => {
  const { size, camera ,} = useThree();

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

  const START_Y_OF_MARS_POSITION = -1;
  const START_X_OF_MARS_POSITION = 1;

  const handleMoveCamera = () => {
    const t = document.body.getBoundingClientRect().top;
    // camera.position.y = t * -0.004;
    // marsRef.current.position.x = START_X_OF_MARS_POSITION + t * 0.0028;
    // marsRef.current.position.y = START_Y_OF_MARS_POSITION - t * 0.004;
    // marsRef.current.position.y = 1 + t * 0.004;
  };

  document.body.onscroll = handleMoveCamera;

  const marsRef: any = useRef();
  const sunRef: any = useRef();
  const mercuryRef: any = useRef();
  const venusRef: any = useRef();
  const darkMateriaRef: any = useRef();
  const neptunRef: any = useRef();
  const jupiterRef: any = useRef();
  const earthRef: any = useRef();

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
    neptunMap
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
    'neptunMap.jpeg'
  ]);
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
    MERCURY: 0.622   ,
    VENUS: 0.850,
    EARTH: 1,
    MARS: 0.802,
    JUPITER: 0.434,
    SATURN: 0.323,
    URANUS: 0.228,
    NEPTUNE: 0.182
  };

  useFrame(() => {
    theta += dTheta;
    mercuryRef.current.rotation.x += 0.004;
    mercuryRef.current.rotation.y += 0.004;


    venusRef.current.rotation.x += 0.004;
    venusRef.current.rotation.y += 0.004;

    sunRef.current.rotation.x += 0.004;
    sunRef.current.rotation.y += 0.004;
    
    earthRef.current.rotation.x += 0.004;
    earthRef.current.rotation.y += 0.004;

    mercuryRef.current.position.x = orbitSpeed.MERCURY * Math.cos(theta );
    mercuryRef.current.position.z = -1.07 + r * Math.sin(theta);

    venusRef.current.position.x = orbitSpeed.VENUS * Math.cos(theta);
    venusRef.current.position.z = -1.06 + r * Math.sin(theta);

    earthRef.current.position.x = orbitSpeed.EARTH * Math.cos(theta);
    earthRef.current.position.z = -1.05 + 0.5 * Math.sin(theta);

    // darkMateriaRef.current.rotation.x += 0.004;
    // darkMateriaRef.current.rotation.y += 0.004;
    // neptunRef.current.rotation.x += 0.004;
    // neptunRef.current.rotation.y += 0.004;

    // marsRef.current.rotation.x += 0.004;
    // marsRef.current.rotation.y += 0.004;
    // marsRef.current.rotation.z += 0.004;
  });

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

      <mesh ref={sunRef} position={[0, 0, -0.96]}>
        <sphereGeometry args={[0.16, 32, 16]} />
        <meshStandardMaterial map={sunMap} normalMap={sunNormalMap} />
      </mesh>

      <mesh position={[0, 0, -1]} ref={mercuryRef}>
        <sphereGeometry args={[0.04, 32, 16]} />
        <meshStandardMaterial map={mercuryMap} normalMap={mercuryNormalMap} />
      </mesh>

      <mesh position={[0, 0, -1.01]} ref={venusRef}>
        <sphereGeometry args={[0.02, 32, 16]} />
        <meshStandardMaterial map={venusMap} normalMap={venusNormalMap} />
      </mesh>

      <mesh position={[0, 0, -1.2]} ref={earthRef}>
        <sphereGeometry args={[0.08, 32, 16]} />
        <meshStandardMaterial map={earthMap} normalMap={earthNormalMap} />
      </mesh>

      {/* <mesh position={[START_X_OF_MARS_POSITION, START_Y_OF_MARS_POSITION, -4]} ref={marsRef}>
        <sphereGeometry args={[0.2, 32, 16]} />
        <meshStandardMaterial map={marsMap} normalMap={normalMarsMap} />
      </mesh> */}
      {/* <mesh position={[0, 0, -5]} ref={neptunRef}>
        <sphereGeometry args={[0.2, 32, 16]} />
        <meshStandardMaterial map={neptunMap} normalMap={neptunNormalMap} />
      </mesh>
      <mesh position={[0.5, 0, -3]} ref={jupiterRef}>
        <sphereGeometry args={[0.2, 32, 16]} />
        <meshStandardMaterial map={jupiterMap} normalMap={jupiterNormalMap} />
      </mesh> */}
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
