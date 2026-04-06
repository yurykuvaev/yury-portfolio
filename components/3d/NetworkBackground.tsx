// src/components/3d/NetworkBackground.tsx
"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import * as THREE from "three";

function ParticleNetwork() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate a sphere of points representing data nodes
  const sphere = useMemo(() => random.inSphere(new Float32Array(3000), { radius: 1.5 }), []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Subtle rotation mimicking a breathing network/cluster
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
}

export default function NetworkBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleNetwork />
      </Canvas>
      {/* Vignette overlay for a cinematic deep space feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)]" />
    </div>
  );
}