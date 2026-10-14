import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const [darkMode, setDarkMode] = useState(true)
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:false,
      offset:100
    });
    document.documentElement.classList.add('dark')
  },[])
  useEffect(()=>{
    AOS.refresh()
  },[darkMode])

  const toggleDarkMode=()=>{
    const newMode= !darkMode;
    setDarkMode(newMode);
     document.documentElement.classList.toggle('dark')
  }
  return (
    <div className={
        darkMode?`min-h-screen bg-linear-to-br from-gray-900 via-[#2e0d10] to-red-950`:`min-h-screen bg-linear-to-br from-gray-50 to-red-50`
      }>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Hero/>
      <About/>
      <Skills/>
      <Certificates/>
      <Projects/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App