import React from 'react'
import './Footer.css'
import hoodie from '../assets/blackhoodie-avatar-dao.png'
import { Linkedin, Github, Gmail } from '@icons-pack/react-simple-icons'
function Footer() {
  const linkedIn = <Linkedin title='LinkedIn Icon' size={42} color='black'/>
  const github =  <Github  title='Github Icon' size={42} color='black'/>
  const mail =  <Gmail  title='Gmail Icon' size={42} color='black'/>

  return (
    <div className='footer-container'>
      <span className='tech-header'>
        Contact Info
      </span>
      <div className='footer-items'>
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
        <img src={hoodie} alt='My DAO avatar' />
        <div className='copyright'>
            Copyright &copy; 2022 Vlad Solokha All rights reserved.
        </div>
      </div> 
    </div>
  )
}

export default Footer
