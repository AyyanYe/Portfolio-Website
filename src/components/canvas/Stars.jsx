import { useRef, Suspense, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const PARTICLE_COUNT = 2500;

const Stars = memo((props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(PARTICLE_COUNT), { radius: 1.2 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
      state.invalidate();
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#F272C8"
          size={0.0018}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
});

// Set a display name for the component
Stars.displayName = "Stars";

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas frameloop="demand" camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
