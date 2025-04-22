import React from "react";


import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Plane = ({ position, planeWidth, planeDepth }) => {
    const meshRef = React.useRef(null);
    const [hovered, setHovered] = React.useState(false);
    const opacityRef = React.useRef(0);
  
    useFrame(() => {
      if (meshRef.current) {
        const targetOpacity = hovered ? .8 : 0;
        const lerpFactor = hovered ? 0.1 : 0.02; // Adjust the lerp factor based on hover state
        opacityRef.current = THREE.MathUtils.lerp(opacityRef.current, targetOpacity, lerpFactor);
        meshRef.current.material.opacity = opacityRef.current;
        meshRef.current.material.emissiveIntensity = hovered ? 1.5 : 0.1;
      }
    });
  
    return (
      <mesh
        position={position}
        ref={meshRef}
        rotation={[-Math.PI / 2, 0, 0]}
        raycast={THREE.Mesh.raycast}
        onPointerOver={(e) => {e.stopPropagation() ;setHovered(true)}}
        onPointerOut={() => setHovered(false)}
      >
        <planeGeometry args={[planeDepth, planeWidth]} />
        <meshStandardMaterial
          attach="material"
          color="#CFFF04"
          emissive="white"
          transparent
          opacity={1}
          side={THREE.DoubleSide}
        />
      </mesh>
    );
  };
  
const Grid = ({ row, col, planeWidth, planeDepth, spacing }) => {
  const gridWidth = col * (planeWidth + spacing) - spacing;
  const gridDepth = col * (planeDepth + spacing) - spacing;
  const startX = planeWidth / 2 - gridWidth / 2 ;
  const startZ = planeDepth / 2 - gridDepth / 2 ;
  const planes = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const x = startX + j * (planeWidth + spacing);
      const z = startZ + i * (planeDepth + spacing);
      planes.push(
        <Plane
          key={`plane-${i}-${j}`}
          position={[x, -1, z]}
          planeDepth={planeDepth}
          planeWidth={planeWidth}
        ></Plane>
      );
    }
  }
  return (
    <>
      <group>{planes}</group>
    </>
  );
};

export default Grid;