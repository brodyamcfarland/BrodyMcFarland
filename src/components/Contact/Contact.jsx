import React from 'react';
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {FiTwitter} from 'react-icons/fi';
import {BsLinkedin} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
//EMAIL SERVICE ID/TEMPLATE ID/PUBLIC KEY//
    emailjs.sendForm('service_0c71djv', 'template_cp60wnt', form.current, 'BSUNYhMZHsmmwV3zg')
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>brodyamcfarland@gmail.com</h5>
            <a href="mailto: brodyamcfarland@gmail.com" target="_blank">Send an Email</a>
          </article>
          <article className="contact__option">
            <FiTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>@off2eth</h5>
            <a href="https://twitter.com/off2eth" target="_blank">Send a DM</a>
          </article>
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Brody McFarland</h5>
            <a href="https://www.linkedin.com/in/brody-mcfarland-93a91b106/" target="_blank">Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
};

export default Contact;