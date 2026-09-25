'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { RefreshCw } from 'lucide-react';

function DishMesh() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <cylinderGeometry args={[2, 1.5, 0.6, 32]} />
      <meshStandardMaterial color="#D4AF37" metalness={0.6} roughness={0.2} />
    </mesh>
  );
}

export default function Canvas3D() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />
      
      <Suspense fallback={
        <Html center>
          <div className="text-xs text-amber-400 font-mono flex items-center gap-2 bg-slate-900/90 px-3 py-1.5 rounded-full border border-white/10">
            <RefreshCw className="w-4 h-4 animate-spin" /> Chargement 3D...
          </div>
        </Html>
      }>
        <DishMesh />
      </Suspense>

      <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={true} />
    </Canvas>
  );
}