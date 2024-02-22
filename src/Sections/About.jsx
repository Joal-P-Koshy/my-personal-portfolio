import React from 'react'
import "../Styles/About.css"


function About() {
  return (
    <>
      <section className="about">
        <div className="sec-head" data-aos='fade-up' data-aos-duration="1000">
          <p>About Me</p>
        </div>
        <hr data-aos='zoom-in' data-aos-duration="2000" />

        <div className="ab-wrap">
          <div className="ab-para"  data-aos = 'fade-down-left' data-aos-duration="2000">
            <p>I'm Joal P Koshy from Chettukuzhy, Idukki, Kerala, and I specialize as a MEARN stack developer.
              I particularly enjoy front-end coding over back-end development. 
              I thrive on teamwork and value the collaborative process in achieving shared goals. 
              My lovely family consists of my grandmother, father, mother, and younger sister.
              I'm also a digital artist who creates scribble art and vector art. My major hobby is photography. I enjoy capturing unexpected moments involving the people around me.
              Besides photography, I enjoy traveling, hiking, playing games, and more.
              For me, music is the best medicine for a calm and peaceful mind. It helps me to encourage my thoughts and be more creative.
            </p>
          </div>
          <div className="edu-line" >
            <div className="main-line" data-aos = 'fade-right' data-aos-duration="2000"></div>
            <div className="sub-lines" data-aos = 'fade-left' data-aos-duration="1000">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="qualifications">
              <div className="quali lumi"data-aos = 'fade-down' data-aos-duration="1000">
                <p className="txt1">MEARN Stack Development</p>
                <p className="txt2">Luminar Technolab Ernakulam</p>
                <p className="txt3">2023 - 2024</p>
              </div>
              <div className="quali dipl"data-aos = 'fade-down' data-aos-duration="1500">
                <p className="txt1">Diploma in Computer Engineering</p>
                <p className="txt2">GPTC Nedumkandam</p>
                <p className="txt3">2020 - 2023</p>
              </div>
              <div className="quali hse"data-aos = 'fade-down' data-aos-duration="2000">
                <p className="txt1">HSE Computer Science</p>
                <p className="txt2">MES HSS Vandanmedu</p>
                <p className="txt3">2018 - 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About