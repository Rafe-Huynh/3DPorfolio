import React from 'react'
import Navbar from './sections/Navbar'
import MainPage from './sections/MainPage'
import About from './sections/About'
import Projects from './sections/projects'
import Contact from './sections/Contact'
const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <MainPage />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
export default App