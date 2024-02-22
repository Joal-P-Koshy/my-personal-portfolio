import React from 'react'
import "../Styles/Home.css"
import FullImg from '../assets/Joal.png'
import CircleImg from '../assets/Joal circcle.png'

function Home() {

    return (
        <>
            <section className='home'>
                <div className="container">
                    <div className="texts">
                        <p data-aos = 'fade-right' data-aos-duration="400">Hey there</p>
                        <h1 data-aos = 'fade-right' data-aos-duration="800">I'm <span>Joal P Koshy</span></h1>
                        <h2 data-aos = 'fade-right' data-aos-duration="1200">Web Developer</h2>
                        <p className='para' data-aos = 'fade-right' data-aos-duration="1400">As a web developer, I am dedicated to crafting elegant and efficient digital solutions that seamlessly merge creativity with functionality, propelling user experiences to new heights.</p>
                        <div className="cv-btn" data-aos = 'fade-right' data-aos-duration="1600">
                            <button className='dnld'>Download Resume</button>
                        </div>
                    </div>
                    <div className="myImg" >
                        <img data-aos = 'fade-up' data-aos-duration="2000" src={FullImg} alt="Picture of me" className='fullImg' />
                        <img data-aos = 'fade-left' data-aos-duration="2000" src={CircleImg} alt="Picture of me" className="circleImg" width={"200px"} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home