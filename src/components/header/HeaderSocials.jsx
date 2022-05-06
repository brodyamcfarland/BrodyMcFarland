import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/brody-mcfarland-93a91b106/" target="_blank" id="Linkedinbtn"><BsLinkedin /></a>
        <a href="https://github.com/brodyamcfarland" target="_blank" id="Githubbtn"><FaGithub /></a>
        <a href="https://twitter.com/off2eth" target="_blank" id="Twitterbtn"><FiTwitter/></a>
    </div>
  )
}

export default HeaderSocials;