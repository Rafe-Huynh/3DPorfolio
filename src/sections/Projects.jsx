import React, { Suspense, useState } from 'react'
import { myProjects } from '../constant'
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'
import DemoComputer from '../components/DemoComputer'
import Button from '../components/Button'
const Projects = () => {
    const [selectIndex, setSelectIndex] = useState(0)
    const currentProject = myProjects[selectIndex]
    const projectLength = myProjects.length
    const handleNavigation = (direction) => {
        setSelectIndex((prevIndex) => {
            if (direction === "previous"){
                return prevIndex === 0 ? projectLength - 1 : prevIndex -1
            } else {
                return prevIndex === projectLength - 1 ? 0 : prevIndex + 1
            }
        })
    }
    const isBeam = () => {
        <span className='relative flex h-3 w-3'>
                    <span className='btn-ping'/>
                    <span className='btn-ping_dot'/>
                </span>
    }
  return (
    <section className='c-space my-20'>
        <p className='head-text'>
            Projects
        </p>
        <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
            <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 '>
                <div className='absolute top-0 right-0'>
                    <img src={currentProject.spotlight} alt='spotlight' className='w-full h-96 object-cover rounded-xl'/>
                </div>
                <div className='p-3 backdrop-filter backdrop:-blur-3xl w-fit rounded-lg ' style={myProjects[0].logoStyle}>
                    <img src={currentProject.logo} alt="logo" className='w-10 h-10 shadow-sm' />
                </div>
                <div className='flex flex-col gap-3 text-white-600 my-5'>
                    <p className='text-white text-2xl font-semibold animatedText'>{currentProject.title}</p>
                    <p className='animtedText'>
                            {currentProject.desc}
                    </p>
                    <p className='animtedText'>
                            {currentProject.subdesc}
                    </p>
                </div>
                <div className='flex items-center justify-between flex-wrap gap-5'>
                    <div className='flex items-center gap-3'>
                        {currentProject.tags.map((tag,index) => (
                            <div key={index} className='tech-logo'>
                                <img src={tag.path} alt={tag.name}/>
                                </div>
                        ))}
                    </div>
                    <a className='flex items-center cursor-pointer text-white-600' href={currentProject.github} target='_blank' rel="noreferrer">
                        <p> Github</p>
                        <img src="/assets/arrow-up.png" className='ml-2 w-3 h-3' alt="arrow"/>
                    </a>
                    <span className='relative flex h-3 w-3 ml-10'>
                    <span className='btn-ping'/>
                    <span className='btn-ping_dot'/>
                </span>
                    <a className='flex items-center cursor-pointer text-white-600' href={currentProject.href} target='_blank' rel="noreferrer">
                        <p> Live site</p>
                        <img src="/assets/arrow-up.png" className='ml-2 w-3 h-3' alt="arrow"/>
                    </a>
                </div>
                <div className='flex justify-between items-center mt-7'>
                        <button className='arrow-btn' onClick={() => handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="left" className='w-4 h-4'/>
                        </button>
                        
                        <button className='arrow-btn' onClick={() => handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="left" className='w-4 h-4'/>
                        </button>
                </div>
            </div>
            <div className='border border-black-300 bg-black-200 rounded-lg h-96 md:h-full'>
                        <Canvas>
                            <ambientLight intensity={Math.PI} />
                            <directionalLight position={[10,10,5]} />
                            <Center>
                                <Suspense fallback={<CanvasLoader/>}>
                                <group scale={2} position={[0,-3,0]} rotation={[0,-0.1,0]}>
                                    <DemoComputer texture = {currentProject.texture}/>
                                </group>
                                </Suspense>
                                </Center>
                                <OrbitControls maxPolarAngle={Math.PI /2} enableZoom={false}/>
                        </Canvas>
            </div>
        </div>
        </section>
  )
}

export default Projects