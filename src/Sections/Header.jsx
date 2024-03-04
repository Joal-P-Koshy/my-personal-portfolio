import React, { useState } from 'react'
import "../Styles/Header.css"
import { Link } from 'react-scroll'
import menuicon from '../assets/menu.png'

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className='sec-nav'>
        <Link to={'/'} className='logo'>Portfolio</Link>
          <ul className="nav-links">
            <Link to='home' className='link' spy={true} smooth={true} offset={-80}>Home</Link>
            <Link to='about-edu' className='link' smooth={true} offset={-80}>About</Link>
            <Link to='skill' className='link' smooth={true} offset={-150} >Skills</Link>
            <Link to='project' className='link' smooth={true} offset={-80}>Projects</Link>
            <Link to='drawing' className='link' smooth={true} offset={-80}>Arts</Link>
            <Link to='contact' className='link' smooth={true} offset={-80}>Contact</Link>
          </ul>
          <img src={menuicon} alt="" className='bar' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="mobile"  style={{display:showMenu?'flex':'none'}}>
          <Link to='home'  spy={true} smooth={true} offset={-80} onClick={()=>setShowMenu(false)}>Home</Link>
          <Link to='about-edu'  smooth={true} offset={-80} onClick={()=>setShowMenu(false)}>About</Link>
          <Link to='skill'  smooth={true} offset={-80}  onClick={()=>setShowMenu(false)}>Skills</Link>
          <Link to='project'  smooth={true} offset={-80} onClick={()=>setShowMenu(false)}>Projects</Link>
          <Link to='drawing'  smooth={true} offset={-80} onClick={()=>setShowMenu(false)}>Arts</Link>
          <Link to='contact'  smooth={true} offset={-80} onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
      </nav>
    </>
  )
}

export default Header