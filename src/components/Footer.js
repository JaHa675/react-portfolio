import React from 'react';
import '../styles/Footer.css'
import githubIcon from '../assets/pics/github-icon.png';
import linkedinIcon from '../assets/pics/linkedin-icon.png';


function Footer() {
    return (
        <footer className="footer icons">
                <a className='git-link' href='https://github.com/JaHa675' target='_blank'><img src={githubIcon}></img></a>
                <a className='linkedin-link' href='https://www.linkedin.com/in/james-harding-9a355016a/' target='_blank'><img src={linkedinIcon}></img></a>
        </footer>
    );
}

export default Footer;
