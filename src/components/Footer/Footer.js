import React from 'react';
import './Footer.css';
import githubLogo from './github-yellow.svg'

const Footer = () => {
    return (
      <footer className="Footer">
        <a href="https://github.com/Korka13/insta-hashtag-generator"><img src={githubLogo} alt="Chech it on GitHub" /></a>
      </footer>
    )
  }

export default Footer;