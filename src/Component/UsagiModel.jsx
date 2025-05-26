// src/components/UsagiModel.jsx
import { useGLTF } from '@react-three/drei';
import React from 'react';

export default function UsagiModel({ scale = 1, position = [0, 0, 0], ...props }) {
  const { scene } = useGLTF('/usagi_chiikawa.glb');
  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
      {...props}
    />
  );
}

useGLTF.preload('/usagi_chiikawa.glb');
