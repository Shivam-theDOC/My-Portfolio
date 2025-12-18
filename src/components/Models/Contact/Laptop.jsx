import * as THREE from "three";
import React, { useEffect } from "react";

import { useGLTF, useAnimations } from "@react-three/drei";

export function Laptop(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF("/models/laptop.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (animations.length) {
      Object.values(actions).forEach((action) => {
        action.play();
        action.setLoop(THREE.LoopRepeat, Infinity);
      });
    }
  }, [actions, animations]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Cube025"
          geometry={nodes.Cube025.geometry}
          material={materials["1"]}
          position={[-3.382, 0, 0]}
        >
          <group
            name="Cube028"
            position={[0, 0.057, -0.736]}
            rotation={[1.081, 0, 0]}
          >
            <mesh
              name="Cube014"
              geometry={nodes.Cube014.geometry}
              material={materials["2"]}
            />
            <mesh
              name="Cube014_1"
              geometry={nodes.Cube014_1.geometry}
              material={materials["1"]}
            />
            <mesh
              name="animation1001"
              geometry={nodes.animation1001.geometry}
              material={materials["5"]}
              position={[-0.994, 0.04, -1.288]}
            >
              <mesh
                name="Circle006"
                geometry={nodes.Circle006.geometry}
                material={materials["4"]}
                position={[0.134, 0.043, 0.379]}
                scale={0.078}
              />
              <mesh
                name="Cube055"
                geometry={nodes.Cube055.geometry}
                material={materials["4"]}
                position={[0.571, 0.026, 0.12]}
                scale={[-1.564, -0.761, -1.564]}
              />
            </mesh>
            <group name="Cube033" position={[-0.613, 0.04, -1.481]}>
              <mesh
                name="Cube019"
                geometry={nodes.Cube019.geometry}
                material={materials["5"]}
              />
              <mesh
                name="Cube019_1"
                geometry={nodes.Cube019_1.geometry}
                material={materials["4"]}
              />
            </group>
            <mesh
              name="Cube034"
              geometry={nodes.Cube034.geometry}
              material={materials["5"]}
              position={[0.462, 0.04, -1.481]}
            />
            <mesh
              name="Cube036"
              geometry={nodes.Cube036.geometry}
              material={materials["5"]}
              position={[0.869, 0.04, -1.291]}
              rotation={[0, 1.571, 0]}
              scale={[1, 1, 1.24]}
            >
              <mesh
                name="Cube047"
                geometry={nodes.Cube047.geometry}
                material={materials["4"]}
                position={[-0.246, 0.013, 0]}
                scale={[1, 1, 0.806]}
              />
              <mesh
                name="Cube048"
                geometry={nodes.Cube048.geometry}
                material={materials["8"]}
                position={[-0.124, 0.05, -0.016]}
                rotation={[0, -1.571, 0]}
                scale={[0.083, 0.262, 0.746]}
              />
            </mesh>
            <mesh
              name="Cube046"
              geometry={nodes.Cube046.geometry}
              material={materials["6"]}
              position={[0.523, 0.04, -1.197]}
              scale={[1, 1, 0.583]}
            />
            <mesh
              name="Cube049"
              geometry={nodes.Cube049.geometry}
              material={materials["5"]}
              position={[0.439, 0.04, -0.647]}
              scale={[0.724, 1, 1]}
            >
              <mesh
                name="Circle007"
                geometry={nodes.Circle007.geometry}
                material={materials["4"]}
                position={[0.571, 0.043, 0.107]}
                scale={[0.09, 0.065, 0.065]}
              />
            </mesh>
            <mesh
              name="Cube050"
              geometry={nodes.Cube050.geometry}
              material={materials["6"]}
              position={[-0.991, 0.04, -0.617]}
              scale={[0.414, 1, 0.282]}
            />
            <mesh
              name="Cube051"
              geometry={nodes.Cube051.geometry}
              material={materials["6"]}
              position={[-0.779, 0.04, -0.617]}
              scale={[0.414, 1, 0.282]}
            />
            <mesh
              name="Cube052"
              geometry={nodes.Cube052.geometry}
              material={materials["6"]}
              position={[-0.568, 0.04, -0.617]}
              scale={[0.414, 1, 0.282]}
            />
            <mesh
              name="Cube053"
              geometry={nodes.Cube053.geometry}
              material={materials["6"]}
              position={[-0.356, 0.04, -0.617]}
              scale={[0.414, 1, 0.282]}
            />
            <mesh
              name="Cube054"
              geometry={nodes.Cube054.geometry}
              material={materials["5"]}
              position={[-0.989, 0.04, -0.537]}
              scale={[0.546, 1, 0.569]}
            />
            <mesh
              name="Cube056"
              geometry={nodes.Cube056.geometry}
              material={materials["5"]}
              position={[-0.919, 0.396, -2.052]}
              scale={[2.175, 1, 0.274]}
            >
              <mesh
                name="Circle008"
                geometry={nodes.Circle008.geometry}
                material={materials["4"]}
                position={[0.042, 0.04, 0.276]}
                scale={[0.02, 0.065, 0.156]}
              />
            </mesh>
            <mesh
              name="Curve007"
              geometry={nodes.Curve007.geometry}
              material={materials["4.1"]}
              position={[0, -0.003, -0.893]}
              rotation={[0, 0, Math.PI]}
              scale={1.742}
            />
            <mesh
              name="Curve009"
              geometry={nodes.Curve009.geometry}
              material={materials["4"]}
              position={[-0.05, 0.062, -0.363]}
            />
          </group>
          <mesh
            name="Cube031"
            geometry={nodes.Cube031.geometry}
            material={materials["3"]}
            position={[0.45, 0.038, -0.043]}
          />
          <mesh
            name="Curve008"
            geometry={nodes.Curve008.geometry}
            material={materials["1.1"]}
            position={[0.856, 0.021, 0.611]}
            scale={0.985}
          />
        </mesh>
        <mesh
          name="Circle009"
          geometry={nodes.Circle009.geometry}
          material={materials["5"]}
          position={[-4.881, 0.457, -0.801]}
          rotation={[1.08, 0, 0]}
          scale={0.797}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/laptop.glb");
