import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Center } from '@react-three/drei';

function MyModel() {
  const gltf = useGLTF('/usagi_chiikawa.glb');
  const modelRef = useRef();
  const boostRef = useRef(0);
  const [scrollBoost, setScrollBoost] = useState(0);
  
  useEffect(() => {
    let decayInterval = null;
    let decayTimeout = null;
    const decayRate = 0.001;

    const handleScroll = () => {
      const scrollY = window.scrollY || 0;
      const maxBoost = 0.15;
      const newBoost = Math.min(scrollY * 0.0004, maxBoost);
      boostRef.current = newBoost;
      setScrollBoost(newBoost);

      if (decayTimeout) clearTimeout(decayTimeout);
      if (decayInterval) {
        clearInterval(decayInterval);
        decayInterval = null;
      }

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
        }, 16);
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
      <primitive ref={modelRef} object={gltf.scene} scale={3} />
    </Center>
  );
}

useGLTF.preload('/usagi_chiikawa.glb');

export default function SpinningModelViewer() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const style = {
    position: 'fixed',
    bottom: '2rem',
    right: isSmallScreen ? '0' : '2rem',
    width: isSmallScreen ? '120px' : '200px',
    height: isSmallScreen ? '120px' : '200px',
    zIndex: 100,
    pointerEvents: 'none',
  };

  return (
    <div style={style}>
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
