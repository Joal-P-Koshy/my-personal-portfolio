import React from 'react'
import "../Styles/Home.css"
import FullImg from '../assets/Joal.png'
import CircleImg from '../assets/Joal circcle.png'
import resume from './resume.pdf'

function Home() {

    return (
        <>
            <section className='home' id='home'>
                <div className="container">
                    <div className="texts">
                        <p data-aos='fade-right' data-aos-duration="400">Hey there</p>
                        <h2 data-aos='fade-right' data-aos-duration="800">I'm <span id='my-name'>Joal P Koshy</span></h2>
                        <h3 data-aos='fade-right' data-aos-duration="1200">MEARN Stack Developer</h3>
                        <p className='para' data-aos='fade-right' data-aos-duration="1400">As a web developer, I am dedicated to crafting elegant and efficient digital solutions that seamlessly merge creativity with functionality, propelling user experiences to new heights.</p>
                        <div className="cv-btn" data-aos='fade-right' data-aos-duration="1600">
                            <a href={resume} download='resume'>
                                <button id='resume-btn'>Download Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className="myImg" >
                        <img data-aos='fade-up' data-aos-duration="2000" src={FullImg} alt="Picture of me" className='fullImg' />
                        <img data-aos='fade-left' data-aos-duration="2000" src={CircleImg} alt="Picture of me" className="circleImg" width={"200px"} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home