import React from 'react'
import Navbar from './sections/Navbar'
import MainPage from './sections/MainPage'
import About from './sections/About'
const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <MainPage />
      <About />
    </main>
  )
}
export default App