import React from 'react'
import "../Styles/Contact.css"
import { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ef73aqs', 'template_b4afpsn', form.current, {
        publicKey: 'u5e4bvDgQjQzCORK_',
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        }
      );
  };
  return (
    <>
      <section className="contact" id='contact' data-aos='fade-up' data-aos-duration="1000">
        <div className="sec-head" >
          <p>Contact</p>
        </div>
        <hr data-aos='zoom-in' data-aos-duration="2000" />

          <div className="contact-form" data-aos='fade-up' data-aos-duration="2000">
            <form action="" ref={form} onSubmit={sendEmail}>
              <fieldset className='form-wrap'>
                <legend>Fill the form for enquires</legend>
                <div className="inputs">
                  <label htmlFor="">UserName</label>
                  <input type="text" placeholder='Enter your Name :' name='from_name'/>
                </div>
                <div className="inputs">
                  <label htmlFor="">Email</label>
                  <input type="email" placeholder='Enter your Email :' name='from_name'/>
                </div>
                <div className="inputs">
                  <label htmlFor="">Description</label>
                  <textarea name="message" id="" placeholder='How can we help you?'></textarea>
                </div>
                <div>
                  <button className="form-btn" type='submit' value={send}>Submit</button>
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