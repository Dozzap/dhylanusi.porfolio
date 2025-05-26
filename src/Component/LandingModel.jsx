import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import UsagiModel from './UsagiModel';

function AnimatedUsagiModel() {
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;

    }
  });

  return (
    <Center>
      <UsagiModel ref={modelRef} scale={3} />
    </Center>
  );
}

export default function LandingModel() {
  return (
    <div
      style={{
        // position: 'fixed',
        // top: 0,
        // left: 0,
        width: '300px',
        height: '300px',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 70 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 5]} />
        <AnimatedUsagiModel />
      </Canvas>
    </div>
  );
}
