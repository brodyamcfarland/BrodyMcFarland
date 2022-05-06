import React from 'react';
import './footer.css';
import {FiTwitter} from 'react-icons/fi';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Brody McFarland</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/brodyamcfarland"><FaGithub/></a>
        <a href="https://twitter.com/off2eth"><FiTwitter/></a>
        <a href="https://www.linkedin.com/in/brody-mcfarland-93a91b106/"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Brody McFarland 2022. All rights reserved.</small>
      </div>
    </footer>
  )
};

export default Footer;