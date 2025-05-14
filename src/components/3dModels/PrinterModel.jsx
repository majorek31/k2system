import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Model() {
  const ref = useRef();
  const { scene } = useGLTF("/3dModels/Printer.glb");

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002; // obrót w osi Y
    }
  });

  return <primitive ref={ref} object={scene} scale={0.8} />;
}

function App() {
  return (
    <div style={{ width: "600px", height: "1200px" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-10, 100, -10]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
