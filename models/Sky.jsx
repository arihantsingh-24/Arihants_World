import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Sky = ({ isRotating }) => {
  const sky = useGLTF("/3d/sky2.glb");
  const skyRef = useRef();

  useFrame((_, delta) => {
    // if(isRotating)
    skyRef.current.rotation.y += 0.2 * delta;
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;



// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// export function Model(props) {
//   const { nodes, materials } = useGLTF('/free_-_skybox_anime_sky.glb')
//   return (
//     <group {...props} dispose={null}>
//       <group scale={0.01}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Sphere__0.geometry}
//           material={materials['Scene_-_Root']}
//           rotation={[-Math.PI / 2, 0, 0]}
//           scale={50000}
//         />
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/free_-_skybox_anime_sky.glb')
