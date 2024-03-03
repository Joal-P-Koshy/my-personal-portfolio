import React from 'react'
import Header from './Sections/Header'
import Home from './Sections/Home'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'
import Drawings from './Sections/Drawings'
import Footer from './Sections/Footer'
import NavHead from './Sections/NavHead'
import AboutEdu from './Sections/AboutEdu'

function Portfolio() {
  return (
    <>
        {/* <NavHead/> */}
                {/* <Header /> */}
                <Home />
                <AboutEdu/>
                <Skills />
                <Projects />
                <Drawings />
                <Contact />
                <Footer />
        </>
  )
}

export default Portfolio