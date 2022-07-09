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
                <h4>HTML</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
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
                <h4>TypeScript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Tailwind</h4>
              </div>
            </article>
          </div>
        </div>
{/* END OF FRONTEND */}
        <div className="experience__backend">
        <h3>Tools</h3>
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
                <h4>VS Code</h4>
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
                <h4>Remix</h4>
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
          </div>

        </div>
      </div>
    </section>
  )
};

export default Experience;