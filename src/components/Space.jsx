
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Space = (props) => {
  const { nodes, materials } = useGLTF('/models/need_some_space.glb')
  return (
    <group {...props} dispose={null}>
      <points
        geometry={nodes.Object_2.geometry}
        material={materials['Scene_-_Root']}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[-10, -18 ,2]}
        scale={0.3}
      />
    </group>
  )
}

useGLTF.preload('/need_some_space.glb')
export default Space