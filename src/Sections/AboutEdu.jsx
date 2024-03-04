import React from 'react'
import '../Styles/AboutEdu.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function AboutEdu() {
    return (
        <>
            <section className="abt-edu" id='about-edu'>
                <div className="sec-head" data-aos='fade-up' data-aos-duration="1000">
                    <p>About Me</p>
                </div>
                <hr data-aos='zoom-in' data-aos-duration="2000" />

                <div className="ab-para" data-aos='fade-right' data-aos-duration="2000">
                    <p>I'm Joal P Koshy from Chettukuzhy, Idukki, Kerala, and I specialize as a MEARN stack developer.
                        I particularly enjoy front-end coding over back-end development.
                        I thrive on teamwork and value the collaborative process in achieving shared goals.
                        My lovely family consists of my grandmother, father, mother, and younger sister.
                        I'm also a digital artist who creates scribble art and vector art. My major hobby is photography. I enjoy capturing unexpected moments involving the people around me.
                        Besides photography, I enjoy traveling, hiking, playing games, and more.
                        For me, music is the best medicine for a calm and peaceful mind. It helps me to encourage my thoughts and be more creative.
                    </p>
                </div>
                <div className="ae-wrap">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2023 - 2024"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Luminar Technolab, Kochi</h3>
                            <h4 className="vertical-timeline-element-subtitle">MEARN Stack Development</h4>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            date="2020 - 2023"
                            iconStyle={{ background: '#00ffff', color: '#131313' }}
                        // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">GPTC Nedumkandam</h3>
                            <h4 className="vertical-timeline-element-subtitle">Diploma in Computer Engineering</h4>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            date="2018 - 2020"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">MES HSS Vandanmedu</h3>
                            <h4 className="vertical-timeline-element-subtitle"> Computer Science</h4>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </section>
        </>
    )
}

export default AboutEdu