import { Dialog, DialogProps, useMediaQuery, useTheme } from '@material-ui/core';
import * as THREE from 'three';
import { Suspense, useMemo, FC } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Physics, useBox, usePlane, useSphere } from '@react-three/cannon';




const Plane = ({ color, ...props }) => {
  const [ref] = usePlane(() => ({ ...props }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" color={color} />
    </mesh>
  );
};

const Box = () => {
  const [ref, api] = useBox(() => ({ mass: 1, args: [4, 4, 4], isKinematic: true }));
  useFrame(state => {
    const t = state.clock.getElapsedTime();
    api.position.set(Math.sin(t * 1) * 5, Math.cos(t * 1) * 5, 3);
    api.rotation.set(Math.sin(t * 3), Math.cos(t * 3), 0);
  });
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={[4, 4, 4]} />
      <meshLambertMaterial attach="material" color="white" side={THREE.DoubleSide} />
    </mesh>
  );
};

function InstancedSpheres({ number = 100 }) {
  // const map = useLoader(THREE.TextureLoader, '/carbon_normal.jpg');
  const [ref] = useSphere(index => ({
    mass: 1,
    position: [Math.random() - 0.5, Math.random() - 0.5, index * 2],
    args: 1
  }));
  const colors = useMemo(() => {
    const array = new Float32Array(number * 3);
    const color = new THREE.Color();
    for (let i = 0; i < number; i++)
      color
        .set('red')
        .convertSRGBToLinear()
        .toArray(array, i * 3);
    return array;
  }, [number]);
  return (
    <instancedMesh ref={ref} castShadow receiveShadow args={[undefined, undefined, number]}>
      <sphereBufferGeometry attach="geometry" args={[1, 16, 16]}>
        <instancedBufferAttribute attachObject={['attributes', 'color']} args={[colors, 3]} />
      </sphereBufferGeometry>
      <meshPhongMaterial
        attach="material"
        // vertexColors={THREE.VertexColors}
        // normalMap={map}
        normalScale={[1, 1]}
        normalMap-wrapS={THREE.RepeatWrapping}
        normalMap-wrapT={THREE.RepeatWrapping}
        normalMap-repeat={[10, 10]}
      />
    </instancedMesh>
  );
}

const MoreSkillsDialog: FC<DialogProps> = ({ open, onClose }) => {
  const { breakpoints } = useTheme();
  const fullScreen = useMediaQuery(breakpoints.down('md'));

  return (
    <Dialog fullScreen={fullScreen} fullWidth maxWidth={'lg'} open={open} onClose={onClose}>
      <Canvas   sRGB gl={{ alpha: false }} camera={{ position: [0, -12, 16] }}>
      <Suspense fallback={null}>

        <hemisphereLight intensity={0.42} />
        <spotLight
          position={[30, 0, 30]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
          shadow-mapSize-width={256}
          shadow-mapSize-height={256}
        />
        <pointLight position={[-30, 0, -30]} intensity={0.5} />
        <Physics gravity={[0, 0, -30]}>
          <Plane color={'#2d2d2d'} /> 
          <Plane color={'#303030'} position={[-6, 0, 0]} rotation={[0, 0.9, 0]} />
          <Plane color={'#424242'} position={[6, 0, 0]} rotation={[0, -0.9, 0]} />
          <Plane color={'#606060'} position={[0, 6, 0]} rotation={[0.9, 0, 0]} />
          <Plane color={'#808080'} position={[0, -6, 0]} rotation={[-0.9, 0, 0]} />
          <Box />
            {/* <InstancedSpheres number={100} /> */}
        </Physics>
        </Suspense>
      </Canvas>
      
    </Dialog>
  );
};

export default MoreSkillsDialog;
