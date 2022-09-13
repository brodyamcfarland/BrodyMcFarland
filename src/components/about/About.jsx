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
              <small>React, React Native, NextJS Front End</small><br/>
              <small>Firebase, SQL, SQLite, Postgres, Prisma Databases</small><br/>
              <small>Deployment on Heroku, Vercel, GH Pages.</small>
            </article>

            <article className='about__card'>
              <RiWindowFill className='about__icon'/>
              <h5>Current Stack</h5>
              <small>NextJS, Typescript, Tailwind, Prisma, Postgres, Solidity, thirdweb</small>
            </article>

            <article className='about__card'>
              <FaEthereum className='about__icon'/>
              <h5>Crypto Knowledge</h5>
              <small>3+ years investing & experience</small><br/>
              <small>Experienced in TA and Macro Analysis</small><br/>
              <small>Write & Integrate Smart Contract functionality</small>
            </article>
          </div>
            <p className='about__shpiel'>
              I specialize in Web3 decentrailized applications and EVM-compatible smart-contract development.
              I also make full stack web applications from front end to backend.<br/><br/>
            </p>
        </div>
      </div>
    </section>
  )
};

export default About;