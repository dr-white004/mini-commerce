import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
// import HorizontalSlider from './components/slide'
import Trying from './components/slider'
import Feature from './components/feature'
import ImageCarousel from './components/another'
function App() {

  return (
    <>
     <Navbar/>
     {/* <HorizontalSlider/> */}
     <Trying/>
     <Feature/>
     <ImageCarousel/>
    </>
  )
}

export default App
