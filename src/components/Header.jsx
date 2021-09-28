import React from 'react'
import './Header.css'
import Icon from '../assets/vs-myemoji-head.png'
import {FaLinkedin, FaGitSquare} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

function Header() {
  return (
    <div className="header">
        <div className="icon-name-container">
            <div className="icon">
                <img src={Icon} alt='head icon'/>
            </div>

            <div className="title">
              <h1>Vlad Solokha</h1>
            </div>
        </div>
        
        <div className="sub-title">
          <h2>Software Developer</h2>
        </div>
        
        <div className="fa-links">
          <a 
            href="https://linkedin.com/in/vlad-solokha"
            target="_blank"
            rel="noreferrer"
            className="fa-linkedin">
            <FaLinkedin /> 
          </a>
          <a 
            href="https://github.com/vladsolokha"
            target="_blank"
            rel="noreferrer"
            className="fa-github">
            <FaGitSquare /> 
          </a>
          <a 
            href="emailto:vsolokha@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="fa-email">
            <HiOutlineMail /> 
          </a>
        </div>

    </div>
  );
}

export default Header

