import React from 'react';
import './experience.css';
import {HiOutlineCheckCircle} from 'react-icons/hi';

const Experience = () => {
  return (
    <section id='experience'>
      <h2>Languages & Tools</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Languages & Frameworks</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Typescript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Solidity</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>React Native</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>NextJS</h4>
              </div>
            </article>
          </div>
        </div>
{/* END OF FRONTEND */}
        <div className="experience__backend">
        <h3>Tools & DB</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Git</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>thirdweb</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Truffle</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>MetaMask</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Remix IDE</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>ethers.js & web3.js</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Firebase & MongoDB</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>SQLite & PostgresQL</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Prisma ORM</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Google O-Auth</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>JWT Authentication</h4>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
};

export default Experience;