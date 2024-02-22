import React from 'react'
import "../Styles/Projects.css"
import mediaplayer from '../assets/mediaplayer.png'
import ekart from '../assets/ekart.png'
import resto from '../assets/restaurant.png'
import Counter from '../assets/counter.png'
import simpleinteret from '../assets/simpleinterest.png'
import todo from '../assets/todo.png'
import { Link } from 'react-router-dom'


function Projects() {
    return (
        <>
            <section className="project">
                <div className="sec-head" data-aos = 'fade-up' data-aos-duration="1000">
                    <p>Projects</p>
                </div>
                <hr data-aos = 'zoom-in' data-aos-duration="2000"/>
                <div className="main-wrap" data-aos = 'fade-right' data-aos-duration="2000">
                    
                    <div className="prj-wrap" data-aos = 'fade-right' data-aos-duration="600">
                        <div className="Prjt-img">
                            <img src={mediaplayer} alt="media player img" className="image" />
                        </div>
                        <div className="">
                            <p className="prjt-name">Media Player</p>
                            {/* <p className="description text-secondary">Created using React & json server for backend</p> */}
                        </div>
                        <div className="icons">
                            <Link to={"https://github.com/Joal-P-Koshy/-Media-Player-front-end.git"} target='_blank'>
                            <button className="icon">GitHub<i class="fa-brands fa-github"></i></button>
                            </Link>
                            <Link to={"https://media-player-front-end-rosy.vercel.app"} target='_blank'>
                            <button className="icon">Visit<i class="fa-solid fa-link"></i></button>
                            </Link>
                        </div>
                    </div>

                    <div className="prj-wrap" data-aos = 'fade-right' data-aos-duration="600">
                        <div className="Prjt-img">
                            <img src={todo} alt="todo img" className="image" />
                        </div>
                        <div className="">
                            <p className="prjt-name">Todo List</p>
                            {/* <p className="description text-secondary">Created using React & json server for backend</p> */}
                        </div>
                        <div className="icons">
                            <Link to={"https://github.com/Joal-P-Koshy/todo-list.git"} target='_blank'>
                            <button className="icon">GitHub<i class="fa-brands fa-github"></i></button>
                            </Link>
                            <Link to={"https://todo-list-mu-dun.vercel.app"} target='_blank'>
                            <button className="icon">Visit<i class="fa-solid fa-link"></i></button>
                            </Link>
                        </div>
                    </div>

                    <div className="prj-wrap" data-aos = 'fade-right' data-aos-duration="600">
                        <div className="Prjt-img">
                            <img src={ekart} alt="ekart img" className="image" />
                        </div>
                        <div className="">
                            <p className="prjt-name">E Kart</p>
                            {/* <p className="description text-secondary">Created using React & json server for backend</p> */}
                        </div>
                        <div className="icons">
                            <Link to={"https://github.com/Joal-P-Koshy/E-kart.git"} target='_blank'>
                            <button className="icon">GitHub<i class="fa-brands fa-github"></i></button>
                            </Link>
                            <Link to={"https://e-kart-chi.vercel.app"} target='_blank'>
                            <button className="icon">Visit<i class="fa-solid fa-link"></i></button>
                            </Link>
                        </div>
                    </div>

                    <div className="prj-wrap" data-aos = 'fade-right' data-aos-duration="600">
                        <div className="Prjt-img">
                            <img src={resto} alt="restaurant img" className="image" />
                        </div>
                        <div className="">
                            <p className="prjt-name">Restaurant</p>
                            {/* <p className="description text-secondary">Created using React & json server for backend</p> */}
                        </div>
                        <div className="icons">
                            <Link to={"https://github.com/Joal-P-Koshy/Restaurant.git"} target='_blank'>
                            <button className="icon">GitHub<i class="fa-brands fa-github"></i></button>
                            </Link>
                            <Link to={"https://restaurant-red-two.vercel.app"} target='_blank'>
                            <button className="icon">Visit<i class="fa-solid fa-link"></i></button>
                            </Link>
                        </div>
                    </div>
                    <div className="prj-wrap" data-aos = 'fade-right' data-aos-duration="600">
                        <div className="Prjt-img">
                            <img src={Counter} alt="counter img" className="image" />
                        </div>
                        <div className="">
                            <p className="prjt-name">Counter</p>
                            {/* <p className="description text-secondary">Created using React & json server for backend</p> */}
                        </div>
                        <div className="icons">
                            <Link to={"https://github.com/Joal-P-Koshy/Counter.git"} target='_blank'>
                            <button className="icon">GitHub<i class="fa-brands fa-github"></i></button>
                            </Link>
                            <Link to={"https://counter-topaz-sigma.vercel.app"} target='_blank'>
                            <button className="icon">Visit<i class="fa-solid fa-link"></i></button>
                            </Link>
                        </div>
                    </div>
                    <div className="prj-wrap" data-aos = 'fade-right' data-aos-duration="600">
                        <div className="Prjt-img">
                            <img src={simpleinteret} alt="simple interest img" className="image" />
                        </div>
                        <div className="">
                            <p className="prjt-name">Simple Interest</p>
                            {/* <p className="description text-secondary">Created using React & json server for backend</p> */}
                        </div>
                        <div className="icons">
                            <Link to={"https://github.com/Joal-P-Koshy/Simple_Interest.git"} target='_blank'>
                            <button className="icon">GitHub<i class="fa-brands fa-github"></i></button>
                            </Link>
                            <Link to={"https://simple-interest-brown.vercel.app"} target='_blank'>
                            <button className="icon">Visit<i class="fa-solid fa-link"></i></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects