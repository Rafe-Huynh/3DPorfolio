import React, { Suspense } from 'react'
import {Canvas} from "@react-three/fiber"
import { PerspectiveCamera, Ring } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constant';
import Target from '../components/target';
import ReactLogo from '../components/ReactLogo';
import Rings from '../components/Rings';
import Cube from '../components/Cube';
import MainpageCamera from '../components/MainpageCamera';
const MainPage = () => {
  // const x = useControls('HackerRoom', {positionX: {
  //   value: 2.5,
  //   min: -10,
  //   max: 10
  // }, positionY: {
  //   value: 2.5,
  //   min: -10,
  //   max: 10
  // },positionZ: {
  //   value: 2.5,
  //   min: -10,
  //   max: 10
  // },rotationX: {
  //   value: 2.5,
  //   min: -10,
  //   max: 10
  // }, rotationY: {
  //   value: 2.5,
  //   min: -10,
  //   max: 10
  // },rotationZ: {
  //   value: 2.5,
  //   min: -10,
  //   max: 10
  // },scale:{
  //   value:1,
  //   min:0.1,
  //   max:10
  // }
  
// })
const isSmall = useMediaQuery({maxWidth: 440})
const isMobile = useMediaQuery({maxWidth: 768})
const isTablet = useMediaQuery({maxWidth: 1024})
const sizes = calculateSizes(isSmall, isMobile, isTablet )
  return (
    <section className='min-h-screen w-full flex flex-col relative'>
        <div className='w-full mx-auto flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-2xl mb-5 font-medium text-white text-center font-generalsans'>
          Hi, This is Rafe Huynh
        </p>
        <p className='hero_tag text-gray_gradient' >
        I'm a software engineer.<br/> 
        I understand the importance of staying ahead in tech. <br/>
        I'm committed to continuous learning, 
        eager to add more tools to my developer's arsenal.
        </p>
        </div>
        <div className='w-full h-full absolute inset-0'>
        
          <Canvas className='w-full h-full'>
            <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera makeDefault position={[0,0,20]} />
            <MainpageCamera isMobile={isMobile}>
            <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0,-Math.PI,0]}/>
            </MainpageCamera>
            
            <group>
              <Target position={sizes.targetPosition}/>
              <ReactLogo position={sizes.reactLogoPosition}/>
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>
            <ambientLight intensity={1}/>
            <directionalLight position={[10,10,10]} intensity={0.5}/>
            </Suspense>
          
          </Canvas>
        </div>
    </section>
  )
}

export default MainPage