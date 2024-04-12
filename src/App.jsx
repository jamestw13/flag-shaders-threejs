import './App.css';
import VertexShader from './shaders/vertex.glsl';
import FragmentShader from './shaders/fragment.glsl';
import { Color, PlaneGeometry, ShaderMaterial, TextureLoader } from 'three';
import { useControls } from 'leva';
import { useFrame, useLoader } from '@react-three/fiber';

function App() {
  const controls = useControls({
    uFrequencyX: { value: 10, min: -20, max: 20, step: 0.5 },
    uFrequencyY: { value: 10, min: -20, max: 20, step: 0.5 },

    // uColor: { value: '#ff0000' },
  });

  const texture = useLoader(TextureLoader, '/flag-french.jpg');
  const planeGeometry = new PlaneGeometry(1, 1, 32, 32);
  const material = new ShaderMaterial({
    vertexShader: VertexShader,
    fragmentShader: FragmentShader,
    transparent: true,
    uniforms: {
      uTime: { value: 0 },
      uFrequencyY: { value: controls.uFrequencyY },
      uFrequencyX: { value: controls.uFrequencyX },
      uColor: { value: new Color('limegreen') },
      uTexture: { value: texture },
    },
  });

  useFrame((state, delta) => {
    material.uniforms.uTime.value = state.clock.getElapsedTime();
  });
  return (
    <>
      <ambientLight />
      <mesh geometry={planeGeometry} material={material} scale={[1.3, 1, 1]}></mesh>
    </>
  );
}

export default App;
