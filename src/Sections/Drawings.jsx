import React from 'react'
import "../Styles/Drawings.css"
import dq from '../assets/digitalArt/dq.jpg'
import surya from '../assets/digitalArt/surya.jpg'
import maltec from '../assets/digitalArt/maltec.jpg'
import seractr from '../assets/digitalArt/seractr.jpg'
import nikhila from '../assets/digitalArt/nikhila.jpg'
import noorin from '../assets/digitalArt/noorin.jpg'
import lakshmi from '../assets/digitalArt/lakshmi.jpg'
import bramastra from '../assets/digitalArt/bramastra.jpg'


function Drawings() {
    return (
        <>
            <section className="drawing">
                <div className="sec-head" data-aos = 'fade-up' data-aos-duration="1000">
                    <p>Digital Art</p>
                </div>
                <hr data-aos = 'zoom-in' data-aos-duration="2000"/>
                <div className="arts" data-aos = 'fade-up' data-aos-duration="2000">

                    <div className="">
                        <img src={dq} alt="Scribble art of dq" />
                    </div>
                    <div className="">
                        <img src={surya} alt="Scribble art of surya" />
                    </div>
                    <div className="">
                        <img src={maltec} alt="Scribble art of maltec" />
                    </div>
                    <div className="">
                        <img src={seractr} alt="Scribble art of dq" />
                    </div>
                    <div className="">
                        <img src={nikhila} alt="Scribble art of dq" />
                    </div>
                    <div className="">
                        <img src={noorin} alt="Scribble art of dq" />
                    </div>
                    <div className="">
                        <img src={lakshmi} alt="Scribble art of dq" />
                    </div>
                    <div className="">
                        <img src={bramastra} alt="Scribble art of dq" />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Drawings