import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Center } from '@react-three/drei';

function MyModel() {
  const gltf = useGLTF('/usagi_chiikawa.glb');
  const modelRef = useRef();
  const boostRef = useRef(0); // track current boost for smooth decay
  const [scrollBoost, setScrollBoost] = useState(0);
  
  useEffect(() => {
    let decayInterval = null;
    let decayTimeout = null;
    const decayRate = 0.005; // how fast the boost decays (tweak this)

    const handleScroll = () => {
      const scrollY = window.scrollY || 0;
      const maxBoost = 0.15;
      const newBoost = Math.min(scrollY * 0.0004, maxBoost);
      boostRef.current = newBoost;
      setScrollBoost(newBoost);

      // Clear any decay timers since we just scrolled
      if (decayTimeout) clearTimeout(decayTimeout);
      if (decayInterval) {
        clearInterval(decayInterval);
        decayInterval = null;
      }

      // Start decay after 150ms of no scrolling
      decayTimeout = setTimeout(() => {
        decayInterval = setInterval(() => {
          if (boostRef.current <= 0) {
            boostRef.current = 0;
            setScrollBoost(0);
            clearInterval(decayInterval);
            decayInterval = null;
            return;
          }
          boostRef.current -= decayRate;
          if (boostRef.current < 0) boostRef.current = 0;
          setScrollBoost(boostRef.current);
        }, 16); // about 60fps
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (decayTimeout) clearTimeout(decayTimeout);
      if (decayInterval) clearInterval(decayInterval);
    };
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      const baseSpeed = 0.03;
      modelRef.current.rotation.y += baseSpeed + scrollBoost;
    }
  });

  return (
    <Center>
      <primitive ref={modelRef} object={gltf.scene} scale={1.5} />
    </Center>
  );
}

useGLTF.preload('/usagi_chiikawa.glb');

export default function SpinningModelViewer() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '200px',
        height: '200px',
        zIndex: 100,
        pointerEvents: 'none',
      }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 70 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 5]} />
        <MyModel />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
