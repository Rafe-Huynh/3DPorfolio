import React from 'react'
import Navbar from './sections/Navbar'
import MainPage from './sections/MainPage'
import About from './sections/About'
import Projects from './sections/projects'
const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <MainPage />
      <About />
      <Projects />
    </main>
  )
}
export default App