"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import Pizza3D from "./Pizza3D";

export default function PizzaCanvas() {
  return (
    <>
      <div className="w-full text-center pt-10">
        <h1 className="text-2xl font-roboto font-bold">
          This pizza spins to burn calories—sadly, not the ones I just added!
        </h1>
      </div>

      <div className="w-full h-[75vh] flex items-center justify-center">
        <Canvas
          shadows
          dpr={[1, 1.75]}                  // a bit lighter on mobile
          camera={{ position: [0, 2.2, 3], fov: 50 }}
        >
          {/* Lights */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 5, 2]} intensity={0.9} castShadow />
          <pointLight position={[-3, 2, -2]} intensity={0.4} />

          {/* Controls */}
          <OrbitControls
            enableDamping
            autoRotate
            autoRotateSpeed={0.8}
            enablePan={false}
            minDistance={2.2}
            maxDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={(Math.PI / 2) * 0.95}
          />

          {/* Model */}
          <Pizza3D />

          {/* Ground */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.12, 0]} receiveShadow>
            <circleGeometry args={[6, 64]} />
            <meshStandardMaterial color="#0b1220" />
          </mesh>

          {/* Small perf helpers */}
          <Preload all />
        </Canvas>
      </div>
    </>
  );
}
