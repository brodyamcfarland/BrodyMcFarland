import React from 'react';
import './experience.css';
import {HiOutlineCheckCircle} from 'react-icons/hi';

const Experience = () => {
  return (
    <section id='experience'>
      <h2>Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Languages</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Solidity</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Intermediate</small>
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
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Git</h4>
                <small className='text-light'>Version Control</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>VS Code</h4>
                <small className='text-light'>Editor of choice</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Truffle</h4>
                <small className='text-light'>Ethereum Test Environment</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>MetaMask</h4>
                <small className='text-light'>Wallet of choice</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Remix</h4>
                <small className='text-light'>For Smart-contract debugging</small>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
};

export default Experience;