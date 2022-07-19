import React from 'react';
import './about.css';
import {BiAward} from 'react-icons/bi';
import {RiWindowFill} from 'react-icons/ri';
import {FaEthereum} from 'react-icons/fa';

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div className="container about__container">
        

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
              <h5>Current Stack</h5>
              <small>TypeScript, React Native, Solidity, Tailwind, ethers.js</small>
            </article>

            <article className='about__card'>
              <FaEthereum className='about__icon'/>
              <h5>Crypto Knowledge</h5>
              <small>3+ years investing & experience</small><br/>
              <small>Experienced in TA and Macro Analysis</small>
            </article>
          </div>
            <p className='about__shpiel'>
              I specialize in Web3 decentrailized applications and EVM-compatible smart-contract development.
              I graduated with a Bachelors Degree in Business, but have been learning to code on the side for many years, which has slowly become a passion.<br/><br/>
              My hobbies include skateboarding, snowboarding, golfing, and music production.
            </p>
        </div>
      </div>
    </section>
  )
};

export default About;