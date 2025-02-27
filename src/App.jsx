import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import RoomCarousel from './pages/RoomCarousel'
import Locations from './pages/Locations'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <RoomCarousel/>
      <Locations/>
    </div>
  )
}

export default App