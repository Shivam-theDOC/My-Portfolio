import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { Laptop } from "./Laptop";

const ContactExperience = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 30 }} dpr={[1, 1.5]}>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
        <group position={[1.9, -1.1, .5]} scale={0.7} rotation={[0.6, -0.5, 0]}>
          <Laptop />
        </group>
        <Environment preset="city" />
        <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
      </Suspense>
    </Canvas>
  );
};

export default ContactExperience;
