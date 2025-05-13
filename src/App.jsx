import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
// import HorizontalSlider from './components/slide'
import Trying from './components/slider'
import Feature from './components/feature'
import ImageCarousel from './components/another'
import Muneem from './components/muneem'
import BlogSection from './components/downward'
import Footer from './components/footer'
function App() {

  return (
    <>
     <Navbar/>
     {/* <HorizontalSlider/> */}
     <Trying/>
     <Feature/>
     <Muneem/>
     <ImageCarousel/>
     <BlogSection/>
     <Footer/>
    </>
  )
}

export default App
