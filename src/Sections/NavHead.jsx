import React from 'react'
import '../Styles/NavHead.css'
import { Link } from 'react-scroll'

function NavHead() {
  return (
    <>
      <section className='nav-Head'>
        <div className="navbar">
          <div className="nav-logo">Portfolio</div>
          <div className="nav-links">
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Skill</Link>
            <Link>Project</Link>
            <Link>Art</Link>
            <Link>Contact</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default NavHead