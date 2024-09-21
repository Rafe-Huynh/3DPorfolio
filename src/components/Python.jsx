import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

const Python = (props) => {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('/models/python_programming_language.glb');

  useEffect(() => {
    // Create a continuous 360-degree spin on the y-axis for the entire group
    gsap.to(groupRef.current.rotation, {
      y: `+=${Math.PI * 2}`, // 360 degrees in radians
      repeat: -1,            // Infinite repetition
      ease: 'linear',         // Smooth continuous rotation
      duration: 7,            // Adjust the duration for slower or faster spin
    });
  }, []);

  return (
    <group
      ref={groupRef} // Apply the ref to the entire group
      {...props}
      dispose={null}
      position={[-13, -1.5, 0]}
      rotation={[Math.PI / 12, 2, 0]}
      scale={0.4}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material}
        position={[-0.002, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.501}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials['.001']}
        position={[-0.002, 0, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={2.501}
      />
    </group>
  );
};

useGLTF.preload('/models/python_programming_language.glb');
export default Python;
