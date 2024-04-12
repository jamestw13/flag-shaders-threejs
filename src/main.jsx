import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas camera={{ fov: 75, near: 0.1, far: 200, position: [0.25, -0.25, 1] }}>
      <App />
      <OrbitControls />
    </Canvas>
  </React.StrictMode>
);
