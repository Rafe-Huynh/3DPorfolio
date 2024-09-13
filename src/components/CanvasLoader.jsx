import React from 'react'
import { Html, useProgress } from '@react-three/drei'
const CanvasLoader = () => {
    const {progess} = useProgress()
  return (
    <Html as="div" center style={{display: flex, justifyContent: center, alignItems: center, flexDirection: 'column'}}>
        <span className='canvas-loader'/>
        <p style={{fontSize: 14, color: "#F1F1F1", fontWeight: 800, marginTop: 40}}>
            {
                progess !== 0 ? `${progess.tofixed(2)}%` : "Loading..." 
            }
        </p>
        </Html>
  )
}

export default CanvasLoader