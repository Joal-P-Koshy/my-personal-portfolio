import React from 'react'
import "../Styles/Contact.css"


function Contact() {
  return (
    <>
      <section className="contact" id='contact' data-aos='fade-up' data-aos-duration="1000">
        <div className="sec-head" >
          <p>Contact</p>
        </div>
        <hr data-aos='zoom-in' data-aos-duration="2000" />

          <div className="contact-form" data-aos='fade-up' data-aos-duration="2000">
            <form action="">
              <fieldset className='form-wrap'>
                <legend>Fill the form for enquires</legend>
                <div className="inputs">
                  <label htmlFor="">UserName</label>
                  <input type="text" placeholder='Enter your Name :' />
                </div>
                <div className="inputs">
                  <label htmlFor="">Email</label>
                  <input type="email" placeholder='Enter your Email :' />
                </div>
                <div className="inputs">
                  <label htmlFor="">Description</label>
                  <textarea name="" id="" placeholder='How can we help you?'></textarea>
                </div>
                <div>
                  <button className="form-btn">Submit</button>
                </div>
              </fieldset>
            </form>
          </div>

        <div className="contact-icons" id='ci'>
          <a href="https://wa.me/9778342389" target='_blank' data-aos='zoom-in' data-aos-duration="2000">
            <i class="fa-brands fa-whatsapp whatsapp"></i>
          </a>
          <a href="https://github.com/Joal-P-Koshy" target='_blank' data-aos='zoom-in' data-aos-duration="4000">
            <i class="fa-brands fa-github git"></i>
          </a>
          <a href="www.linkedin.com/in/joal-p-koshy-a82110297" target='_blank' data-aos='zoom-in' data-aos-duration="6000">
            <i class="fa-brands fa-linkedin linkedin"></i>
          </a>
          <a href="https://www.instagram.com/mr_spydo?igsh=cHIxODF5MG1oY3lq" target='_blank' data-aos='zoom-in' data-aos-duration="8000">
            <i class="fa-brands fa-instagram insta"></i>
          </a>
        </div>
      </section>
    </>
  )
}

export default Contact