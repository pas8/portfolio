import { Dialog, DialogProps, useMediaQuery, useTheme, SvgIcon, makeStyles, Grid } from '@material-ui/core';
import * as THREE from 'three';
import { Suspense, FC } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Physics, useBox, usePlane, useSphere } from '@react-three/cannon';
import { useTexture } from '@react-three/drei';
import { Texture } from 'three';

import VideoButton from 'components/VideoButton';

const Plane: FC<any> = ({ color, ...props }) => {
  const [ref] = usePlane(() => ({ ...props }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" color={color} />
    </mesh>
  );
};

const Box = () => {
  const [ref, api] = useBox(() => ({ mass: 0.42, args: [6, 6, 6], isKinematic: true }));
  useFrame(state => {
    const t = state.clock.getElapsedTime();
    api.position.set(Math.sin(t * 0.42) * 5, Math.cos(t * 0.42) * 5, 3);
    api.rotation.set(Math.sin(t * 1.6), Math.cos(t * 3), 0);
  });
  const avaMap = useTexture('ava3.jpg');

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={[6, 6, 6]} />
      <meshLambertMaterial attach="material" color="white" side={THREE.DoubleSide} map={avaMap} />
    </mesh>
  );
};

const SkillBoxesContainer: FC = () => {
  const textureArr = useTexture([
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

  return (
    <>
      {textureArr.map((map, idx) => (
        <InstancedSpheres key={idx} map={map} />
      ))}
    </>
  );
};

const InstancedSpheres: FC<{ map: Texture }> = ({ map }) => {
  const [ref] = useSphere(index => ({
    mass: 1,
    position: [Math.random() - 0.5, Math.random() - 0.5, index * 2],
    args: 1
  }));

  return (
    <>
      <mesh position={[1, -1, -1]} ref={ref}>
        <boxBufferGeometry args={[3, 3, 3]} attach="geometry" />
        <meshStandardMaterial map={map} />
      </mesh>
    </>
  );
};

const useStyles = makeStyles(({ palette: { background, secondary, primary }, breakpoints }) => ({
  closeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 1000000000000000,
    '& button': {
      width: 42,
      height: 42
    }
  },

}));

const MoreSkillsDialog: FC<DialogProps> = ({ open, onClose }) => {
  const { breakpoints } = useTheme();
  const fullScreen = useMediaQuery(breakpoints.down('md'));
  const { closeButton,  } = useStyles();

  return (
    <Dialog fullScreen={fullScreen} fullWidth maxWidth={'lg'} open={open} onClose={onClose}>
      <Grid className={closeButton}>
        <VideoButton onClick={onClose}>
          <SvgIcon viewBox={'0 0 24 24'}>
            <path
              d={
                'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'
              }
            />
          </SvgIcon>
        </VideoButton>
      </Grid>
      <Canvas gl={{ alpha: false }} camera={{ position: [0, -8, 16] }}  style={{height:fullScreen ? '100vh' : '80vh'}}>
        <Suspense fallback={null}>
          <hemisphereLight intensity={0.42} />
          <spotLight
            color={'rgb(244, 17, 103)'}
            position={[42, 0, 92]}
            angle={0.3}
            penumbra={1}
            intensity={2.42}
            castShadow
            shadow-mapSize-width={256}
            shadow-mapSize-height={256}
          />
          <pointLight position={[-30, 0, -30]} intensity={0.5} />
          <Physics gravity={[0, 0, -30]}>
            <Plane color={'hsl(220,20%,16%))'} />
            <Plane color={'hsl(200,20%,16%)'} position={[-6, 0, 0]} rotation={[0, 0.9, 0]} />
            <Plane color={'hsl(260,20%,16%)'} position={[6, 0, 0]} rotation={[0, -0.9, 0]} />
            <Plane color={'hsl(200,20%,16%)'} position={[0, 6, 0]} rotation={[0.9, 0, 0]} />
            <Plane color={'hsl(300,20%,16%)'} position={[0, -6, 0]} rotation={[-0.9, 0, 0]} />
            <Box />

            <SkillBoxesContainer />
          </Physics>
        </Suspense>
      </Canvas>
    </Dialog>
  );
};

export default MoreSkillsDialog;
