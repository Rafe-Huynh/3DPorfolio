import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Target = (props) => {
    const targetRef = useRef()
    const {scene} = useGLTF('/models/game_bar_target_arrow.glb')
    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true
        })
    })
  return (
    <mesh {...props} ref = {targetRef} rotation={[-Math.PI / 2, -1, 0]} scale={2}>
        <primitive object={scene}/>
    </mesh> 
  )
}

export default Target