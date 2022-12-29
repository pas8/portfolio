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

type CoordinateType = 'X' | 'Y' | 'Z'

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

        <Container dispatch={dispatch} soundIdx={soundIdx ** Math.cbrt(soundIdx)} isSoundPaused={isSoundPaused} />
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

    // marsRef.current.rotation.x += 0.002 * soundIdx;
    // marsRef.current.rotation.y += 0.002 * soundIdx;
    // marsRef.current.rotation.z += 0.002 * soundIdx;


    mercuryRef.current.rotation.x += 0.0042 * soundIdx;
    mercuryRef.current.rotation.y += 0.0042 * soundIdx;

    // venusRef.current.rotation.x += 0.0042 * soundIdx;
    // venusRef.current.rotation.y += 0.0042 * soundIdx;

    // sunRef.current.rotation.x += 0.0032 * soundIdx;
    // sunRef.current.rotation.y += 0.0032 * soundIdx;

    // earthRef.current.rotation.x += 0.0036 * soundIdx;
    // earthRef.current.rotation.y += 0.0036 * soundIdx;


    // neptunRef.current.rotation.x += 0.012 * soundIdx;
    // neptunRef.current.rotation.y += 0.012 * soundIdx;
    // neptunRef.current.rotation.z += 0.012 * soundIdx;

    // jupiterRef.current.rotation.x += 0.0016 * soundIdx;
    // jupiterRef.current.rotation.y += 0.0016 * soundIdx;
    // jupiterRef.current.rotation.z += 0.0016 * soundIdx;

    // saturnRef.current.rotation.x += 0.002 * soundIdx;
    // saturnRef.current.rotation.y += 0.002 * soundIdx;
    // saturnRef.current.rotation.z += 0.002 * soundIdx;

    // uranusRef.current.rotation.x += 0.06 * soundIdx;
    // uranusRef.current.rotation.y += 0.06 * soundIdx;
    // uranusRef.current.rotation.z += 0.06 * soundIdx;

    // moonRef.current.rotation.x += 0.008 * soundIdx;
    // moonRef.current.rotation.y += 0.008 * soundIdx;
    // moonRef.current.rotation.z += 0.008 * soundIdx;

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




  // const getSunPosition = (TOP: number) => ({
  //     x: (getStartPosition('sun') > TOP ? 5 : positions.sun.X) + TOP * 0.0016,
  //     y: positions.sun.Y + TOP * 0.0002,
  //     z: (getStartPosition('sun') > TOP ? -2 : -1) - TOP * 0.0004,
  //   })


  const defaultPositions = {
    // mars: {
    //   X: [4, 1],
    //   Y: [-2, -0.8],
    //   Z: [-3, -1],
    //   startCoefficient: -1.5,
    //   rotationCoefficients: [0.0016, -0.001, -0.001],
    //   sizes: [0.08, 32, 16],
    //   ref: marsRef,
    //   map: marsMap,
    //   normalMap: marsNormalMap
    // },
    // sun: {
    //   X: 0.8,
    //   Y: 0.4,
    //   startCoefficient: -1.5
    // },
    mercury: {
      X: [-5, -0.8],
      Y: [2.7, 0.5],
      Z: [-2, -1],
      rotationCoefficients: [-0.0016, 0.0008, -0.0004],
      ref: mercuryRef,
      map: mercuryMap,
      sizes: [0.1, 32, 16],
      normalMap: mercuryNormalMap,
      circles: {
        count: 0,
        value: 0
      }
    },

    // venus: {
    //   X: -0.4,
    //   Y: -0.8,
    //   startCoefficient: -1.8
    // },
    // earth: {
    //   X: -0.4,
    //   Y: -0.6,
    //   startCoefficient: -2.2
    // },
    // jupiter: {
    //   X: 0.8,
    //   Y: -2,
    //   startCoefficient: -1.5
    // },
    // saturn: {
    //   X: -1.6,
    //   Y: -2.4,
    //   startCoefficient: -2.5
    // },
    // uranus: {
    //   X: 1.6,
    //   Y: -3.6,
    //   startCoefficient: 0
    // },
    // neptun: {
    //   X: 0.6,
    //   Y: 0.2,
    //   startCoefficient: 0
    // },
    // moon: {
    //   X: -0.5,
    //   Y: -0.2,
    //   startCoefficient: -2.7
    // }
  };

  const [positions, setPositions] = useState(defaultPositions)

  const getIndexFromCoordinate = (coordinate: CoordinateType) => {
    switch (coordinate) {
      case 'X':
        return 0

      case 'Y':
        return 1

      case 'Z':
        return 2
    }
  }

  const getCoordinate = (coordinate: CoordinateType, planetProps: any) => {
    //     const value = -(((planetProps.TOP / window.outerHeight)) / planetProps.startCoefficient.value)
    // const current = positions[planetProps.key].startCoefficient.current

    // if(value > current) {
    //   positions[planetProps.key].startCoefficient.current = value
    // }
    // if (d) {
    // positions[planetProps.key].startCoefficient.current = value
    // }
    // console.log(-(planetProps.TOP / current) === window.outerHeight * planetProps.startCoefficient.value, planetProps.TOP)

    // const isBeganWithStart = planetProps.startCoefficient * window.outerHeight > planetProps.TOP
    const START_VALUE = planetProps[coordinate][0]
    const f = positions[planetProps.key].circles.count * positions[planetProps.key].circles.value
    const newTop = (f === 0 ? planetProps.TOP : planetProps.TOP - f)
    const rotationCoefficient = planetProps.rotationCoefficients[getIndexFromCoordinate(coordinate)]
    const ROTATION_VALUE = newTop * rotationCoefficient

    return  START_VALUE +ROTATION_VALUE;
  }

  const getCoordinates = (planetProps) => {
    const X = getCoordinate('X', planetProps)
    const Y = getCoordinate('Y', planetProps)
    const Z = getCoordinate('Z', planetProps)

    const coordinates = { X, Y, Z }

    console.log(coordinates)
    for (const [key, value] of Object.entries(coordinates)) {
      if (value === planetProps[key][0]) {
        break
      }

      if ((planetProps[key][0] < 0 && value > 1) || (planetProps[key][0] > 0 && value < -1) &&
        positions[planetProps.key].circles.count * planetProps.TOP < positions[planetProps.key].circles.value && positions[planetProps.key].circles.count !== 0
      ) {

        setPositions(state => ({ ...state, [planetProps.key]: { ...state[planetProps.key], circles: {
          count: state[planetProps.key].circles.count + 1,
          value:planetProps.TOP - state[planetProps.key].circles.count * state[planetProps.key].circles.value
        } } }))
        // positions[planetProps.key].circles.count = positions[planetProps.key].circles.count + 1
        // positions[planetProps.key].circles.value = planetProps.TOP

        return {
          X: planetProps.X[0],
          Y: planetProps.Y[0],
          Z: planetProps.Z[0],
        }
      }
    }

    return coordinates
  }

  const handleSetPositions = ({ ref, ...planetProps }: any) => {
    const { X, Y, Z } = getCoordinates(planetProps)
    // console.log('new',X, Y, Z)

    ref.current.position.x = X
    ref.current.position.y = Y
    ref.current.position.z = Z
  }

  const handleMoveCamera = (e: any) => {
    const TOP = document.body.getBoundingClientRect().top;

    for (const [key, planetProps] of Object.entries(positions)) {
      handleSetPositions({ ...planetProps, key, TOP })
    }

    // positions.mars.setPosition()
    // sunRef.current.position = getSunPosition(t)

    // mercuryRef.current.position.x = (getStartPosition('mercury') > t ? -5 : positions.mercury.X) - t * 0.0016;
    // mercuryRef.current.position.y = (-2400 > t ? 2.68 : positions.mercury.Y) + t * 0.0008;
    // mercuryRef.current.position.z = (-2400 > t ? -2 : -1) - t * 0.0004;

    // venusRef.current.position.x = (-2000 > t ? -2 : positions.venus.X) - t * 0.0008;
    // venusRef.current.position.y = positions.venus.Y - t * 0.0004;
    // venusRef.current.position.z = -1 - t * 0.0004;

    // earthRef.current.position.y = (-2600 > t ? -1.2 : positions.earth.Y) - t * 0.0004;
    // earthRef.current.position.x = (-2600 > t ? -1.6 : positions.earth.X) - t * 0.0004;
    // earthRef.current.position.z = (-2600 > t ? -1.6 : -1) - t * 0.0004;

    // jupiterRef.current.position.x = (-1800 > t ? 3 : positions.jupiter.X) + t * 0.0008;
    // jupiterRef.current.position.y = (-1800 > t ? -5 : positions.jupiter.Y) - t * 0.0016;
    // jupiterRef.current.position.z = (-1800 > t ? -2 : -1) - t * 0.0004;

    // saturnRef.current.position.x = -3000 > t ? 4 + t * 0.0012 : positions.saturn.X - t * 0.001;
    // saturnRef.current.position.y = -3000 > t ? -1.6 - t * 0.0004 : positions.saturn.Y - t * 0.0016;
    // saturnRef.current.position.z = -3000 > t ? -4 - t * 0.0008 : -1 - t * 0.0004;

    // uranusRef.current.position.x = positions.uranus.X + t * 0.0006;
    // uranusRef.current.position.y = positions.uranus.Y - t * 0.0014;
    // uranusRef.current.position.z = -1.4 - t * 0.0002;

    // neptunRef.current.position.y = positions.neptun.Y + t * 0.0006;
    // neptunRef.current.position.z = -1 - t * 0.0004;


    // // let  moonSt

    // moonRef.current.position.x = -3200 > t ? 3 + t * 0.0008 : positions.moon.X +  t * 0.0004
    // moonRef.current.position.y = -3200 > t ? 4.4 + t * 0.0012 : positions.moon.Y +  t * 0.0004
    // moonRef.current.position.z = -3200 > t ? -2 - t * 0.0004 : -1;



    // marsRef.current.position = getMarsPosition(t)

    // marsRef.current.position.x = (-4000 > t ? 4 : positions.mars.X) + t * 0.0016;
    // marsRef.current.position.y = (-4000 > t ? -2 : positions.mars.Y) - t * 0.001;
    // marsRef.current.position.z = (-4000 > t ? -3 : -1) - t * 0.001;


    // if (moonRef.current.position.x < 0 &&  moonRef.current.position.y) {
    //   console.log(moonRef.current.position)

    // }

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



      {Object.values(positions).map(({ map, normalMap, sizes, ref, X, Y }) => (
        <mesh position={[X[1], Y[1] - 1]} ref={ref}>
          <sphereGeometry args={sizes} />
          <meshStandardMaterial map={marsMap} normalMap={normalMap} />
        </mesh>))}

      {/* 
      <mesh ref={sunRef} position={[positions.sun.X, positions.sun.Y, -1]}>
        <sphereGeometry args={[0.16, 32, 16]} />
        <meshStandardMaterial map={sunMap} normalMap={sunNormalMap} />
      </mesh>


      <mesh position={[positions.venus.X, positions.venus.Y, -1]} ref={venusRef}>
        <sphereGeometry args={[0.1, 32, 16]} />
        <meshStandardMaterial map={venusMap} normalMap={venusNormalMap} />
      </mesh>

      <mesh position={[positions.venus.X, positions.venus.Y, -1]} ref={earthRef}>
        <sphereGeometry args={[0.08, 32, 16]} />
        <meshStandardMaterial map={earthMap} normalMap={earthNormalMap} />
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
      </mesh> */}
    </>
  );
};

export default Scene;
