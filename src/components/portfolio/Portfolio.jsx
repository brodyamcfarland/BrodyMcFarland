import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/EthereumPic.jpg';
import IMG2 from '../../assets/PhotoCode.jpg';
import IMG3 from '../../assets/offgrid.JPG';
import IMG4 from '../../assets/cybropunks.JPG';
import IMG5 from '../../assets/BlockPulse.JPG';
import IMG6 from '../../assets/TSTracker.JPG';

// CHANGE IMAGES ABOVE FOR PRODUCTION
// CHANGE GITHUB LINKS WHEN NEEDED
const data = [
  {
    id: 1,
    image: IMG3,
    title: 'OFFGRID (Desktop Only)',
    github: 'https://github.com/brodyamcfarland/Offgrid',
    demo: 'https://brodyamcfarland.github.io/Offgrid/'
  },
  {
    id: 2,
    image: IMG4,
    title: 'CYBROPUNKS (Desktop Only)',
    github: 'https://github.com/brodyamcfarland/cybropunks',
    demo: 'https://brodyamcfarland.github.io/cybropunks/'
  },
  {
    id: 3,
    image: IMG5,
    title: 'BLOCK PULSE (Mobile Responsive)',
    github: 'https://github.com/brodyamcfarland/BlockPulse',
    demo: 'https://brodyamcfarland.github.io/BlockPulse/'
  },
  {
    id: 4,
    image: IMG6,
    title: 'TypeScript Tracker (Mobile Responsive)',
    github: 'https://github.com/brodyamcfarland/TS-Tracker',
    demo: 'https://brodyamcfarland.github.io/TS-Tracker/'
  },
  {
    id: 5,
    image: IMG1,
    title: 'Coming Soon',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 6,
    image: IMG2,
    title: 'Coming Soon',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
];


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                    <a href={github} className='btn' target="_blank">Github</a>
                    <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;