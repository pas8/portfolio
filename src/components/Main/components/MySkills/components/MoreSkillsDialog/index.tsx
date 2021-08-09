import { Dialog, DialogProps, useMediaQuery, useTheme } from '@material-ui/core';
import * as THREE from 'three';
import { Suspense, FC } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Physics, useBox, usePlane, useSphere } from '@react-three/cannon';
import { Texture } from 'three';
import { useSelector } from 'react-redux';

import CloseVideoButton from 'components/CloseVideoButton';
import { getAvatarMap, getSkillsTextureArr } from 'store/modules/App/selectors';

const Plane: FC<any> = ({ color, ...props }) => {
  const [ref] = usePlane(() => ({ ...props }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" color={color} />
    </mesh>
  );
};

const Box: FC<{ avaMap: any }> = ({ avaMap }) => {
  const [ref, api] = useBox(() => ({ mass: 0.42, args: [6, 6, 6], isKinematic: true }));
  useFrame(state => {
    const t = state.clock.getElapsedTime();
    api.position.set(Math.sin(t * 0.42) * 5, Math.cos(t * 0.42) * 5, 3);
    api.rotation.set(Math.sin(t * 1.6), Math.cos(t * 3), 0);
  });

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={[6, 6, 6]} />
      <meshLambertMaterial attach="material" color="white" side={THREE.DoubleSide} map={avaMap} />
    </mesh>
  );
};

const SkillBoxesContainer: FC<{ textureArr: any[] }> = ({ textureArr }) => (
  <>
    {textureArr.map((map, idx) => (
      <InstancedSpheres key={idx} map={map} />
    ))}
  </>
);

const InstancedSpheres: FC<{ map: Texture }> = ({ map }) => {
  const [ref] = useSphere(index => ({
    mass: 2,
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

const MoreSkillsDialog: FC<DialogProps> = ({ open, onClose }) => {
  const { breakpoints } = useTheme();
  const fullScreen = useMediaQuery(breakpoints.down('md'));
  const textureArr = useSelector(getSkillsTextureArr);
  const avaMap = useSelector(getAvatarMap);
  return (
    <Dialog fullScreen={fullScreen} fullWidth maxWidth={'lg'} open={open} onClose={onClose}>
      <CloseVideoButton onClose={onClose} />
      <Canvas
        gl={{ alpha: false }}
        camera={{ position: [0, -8, 16] }}
        style={{ height: fullScreen ? '100vh' : '80vh' }}
      >
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
            <Box avaMap={avaMap} />

            <SkillBoxesContainer textureArr={textureArr} />
          </Physics>
        </Suspense>
      </Canvas>
    </Dialog>
  );
};

export default MoreSkillsDialog;
