import React from 'react';
import './about.css';
import ME from '../../assets/ME.png';
import {BiAward} from 'react-icons/bi';
import {RiWindowFill} from 'react-icons/ri';
import {FaEthereum} from 'react-icons/fa';

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <BiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Self-taught CS</small><br/>
              <small>B.S. Business Administration</small><br/>
              <small>Real Estate/Loan Industry Experience</small>
            </article>

            <article className='about__card'>
              <RiWindowFill className='about__icon'/>
              <h5>Full-stack</h5>
              <small>HTML, CSS, JS, Python, React.js, Node.js, Solidity, TypeScript</small>
            </article>

            <article className='about__card'>
              <FaEthereum className='about__icon'/>
              <h5>Crypto Knowledge</h5>
              <small>3+ years investing & experience</small><br/>
              <small>Experienced in TA and Strategy</small>
            </article>
          </div>
            <p>
              I specialize in front-end applications and EVM-compatible smart-contract development. I have a background in Real Estate, Loan Servicing, Auction Platforms, Music Production, and have been self-teaching myself software development in recent years.<br/>My hobbies include skateboarding, snowboarding, hiking, and music production.
            </p>
        
          <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
};

export default About;