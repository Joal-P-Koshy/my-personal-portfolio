import React from 'react'
import './Opening.css'
import pic from "../assets/Joal.png"
import { Link } from 'react-router-dom'

function Opening() {
  return (
    <>
      <div className="wrap">
        <div className="img-txt">
          <div className="o-pic" data-aos = 'fade-right' data-aos-duration="2000">
            <img src={pic} alt="my pic" data-aos = 'fade-left' data-aos-duration="2500"/>
          </div>
          <div className="txt-btn">
            <div className="txt">
              <p className="t1" data-aos = 'fade-right' data-aos-duration="400">I'm <span>Joal P Koshy</span></p>
              <p className="t2" data-aos = 'fade-right' data-aos-duration="800">Welcome to my</p>
              <p className="t3" data-aos = 'fade-right' data-aos-duration="1200"><span>Portfolio</span> Website</p>
            </div>
            <div className="btn" data-aos = 'fade-right' data-aos-duration="1600">
              <Link to={'/portfolio'}>
                <button id='exp-btn'>Explore More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Opening