import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/c0nn3ct3dgif.gif';
import IMG2 from '../../assets/SoulboundGif.gif';
import IMG3 from '../../assets/OffGridGif.gif';
import IMG4 from '../../assets/CybroPunkGif.gif';
import IMG5 from '../../assets/BlockPulse.JPG';
import IMG6 from '../../assets/EASGif.gif';

// CHANGE IMAGES ABOVE FOR PRODUCTION
// CHANGE GITHUB LINKS WHEN NEEDED
const data = [
  {
    id: 4,
    image: IMG1,
    title: 'c0nn3ct3d - web3 Social Media',
    github: 'https://github.com/brodyamcfarland/c0nn3ct3d',
    demo: 'https://brodyamcfarland.github.io/c0nn3ct3d/'
  },
  {
    id: 1,
    image: IMG2,
    title: 'SOULBOUND - web3 SBT Minting Site',
    github: 'https://github.com/brodyamcfarland/Soulbound',
    demo: 'https://brodyamcfarland.github.io/Soulbound/'
  },
  {
    id: 5,
    image: IMG6,
    title: 'Ethereum Ad Service - Ethereum & IPFS Advertisments',
    github: 'https://github.com/brodyamcfarland/EthereumAdService/',
    demo: 'https://brodyamcfarland.github.io/EthereumAdService/'
  },
  {
    id: 2,
    image: IMG4,
    title: 'CYBROPUNKS - NFT Minting Website',
    github: 'https://github.com/brodyamcfarland/cybropunks',
    demo: 'https://brodyamcfarland.github.io/cybropunks/'
  },
  {
    id: 3,
    image: IMG5,
    title: 'BLOCK PULSE - Cypto API Project',
    github: 'https://github.com/brodyamcfarland/BlockPulse',
    demo: 'https://brodyamcfarland.github.io/BlockPulse/'
  },
  {
    id: 6,
    image: IMG3,
    title: 'OFFGRID - web3 Smart Contract Airbnb',
    github: 'https://github.com/brodyamcfarland/Offgrid',
    demo: 'https://brodyamcfarland.github.io/Offgrid/'
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