// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei'; // useGLTF do ładowania modeli
// import { Suspense } from 'react';

// // Funkcja do ładowania modelu 3D
// function Model() {
//     const { scene } = useGLTF('../public/3dModels/Printer.glb');  // Ścieżka do pliku modelu

//     return <primitive object={scene} />;
// }

// function App() {
//     return (
//         <div style={{ height: '100vh' }}>
//             <Canvas>
//                 <OrbitControls />
//                 <ambientLight intensity={0.5} />
//                 <directionalLight position={[5, 5, 5]} />
//                 <Suspense fallback={null}>
//                     <Model />
//                 </Suspense>
//             </Canvas>
//         </div>
//     );
// }

// export default App;
