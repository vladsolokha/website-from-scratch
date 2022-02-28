import React from 'react'
import './Header.css'
import MyEmoji from '../assets/vs-myemoji-head.gif'
import { Linkedin, Github, Gmail } from '@icons-pack/react-simple-icons'

function Header() {
  const linkedIn = <Linkedin title='LinkedIn Icon' size={24} />
  const github =  <Github  title='Github Icon' size={24} />
  const mail =  <Gmail  title='Gmail Icon' size={24} />
  
  return (
    <div className="header">
        <div className="icon-name-container">
            <div className="icon">
                <img src={MyEmoji} alt='head icon my emoji'/>
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
            {linkedIn}
          </a>
          <a 
            href="https://github.com/vladsolokha"
            target="_blank"
            rel="noreferrer"
            className="fa-github">
            {github} 
          </a>
          <a 
            href="emailto:vsolokha@gmail.com"
            className="fa-email">
            {mail}
          </a>
        </div>

    </div>
  );
}

export default Header

