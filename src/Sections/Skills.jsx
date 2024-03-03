import React from 'react'
import "../Styles/Skills.css"
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";


function Skills() {
  return (
    <>
        <div className="sec-head" data-aos = 'fade-up' data-aos-duration="1000">
            <p>Skills</p>
        </div>
        <hr data-aos = 'zoom-in' data-aos-duration="2000"/>

    <section className="sec-skill">
        <div className="skill-wrap">
            <div className="skill" data-aos = 'fade-up' data-aos-duration="1000"><TiHtml5 /> </div>
            <div className="skill" data-aos = 'fade-up' data-aos-duration="1000"><IoLogoCss3 /></div>
            <div className="skill" data-aos = 'fade-up' data-aos-duration="1000"><IoLogoJavascript /></div>
            <div className="skill" data-aos = 'fade-up' data-aos-duration="2000"><FaReact/></div>
            <div className="skill" data-aos = 'fade-up' data-aos-duration="2000"><FaAngular/></div>
            <div className="skill" data-aos = 'fade-up' data-aos-duration="2000"><FaNode/></div>
            <div className="skill" data-aos = 'fade-up' data-aos-duration="3000"><SiMongodb/></div>
            <div className="skill" data-aos = 'fade-up' data-aos-duration="3000"><SiPostman/></div>
            <div className="skill" data-aos = 'fade-up' data-aos-duration="3000"><FaBootstrap/></div>
        </div>
    </section>
    </>
  )
}

export default Skills