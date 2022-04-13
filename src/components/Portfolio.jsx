import React from 'react'
import './Portfolio.css'
import gitHubSearch from '../assets/githubusersearch.PNG'
import proAudioService from '../assets/pasohio.PNG'
import playCode from '../assets/playCode.PNG'


function Portfolio() {

  return (
    <div className='portfolio-container'>
      <span className='tech-header'>
        I Made This
      </span>
      
      <div className='project-card-container'>
        <div className='project-card'>
          <h3>GitHub User Search App</h3>
          <a
            title = 'GitHub User Search App'
            target='_blank'
            rel="noreferrer"
            href='https://searchuserongithub.netlify.app'
          >
            <img src={gitHubSearch} alt='GitHub User Search'/>
          </a>
          <a
            title= 'View GitHub User Search Code on GitHub'
            target='_blank'
            rel="noreferrer"
            href='https://github.com/vladsolokha/github-search-user'
          >
            View code on GitHub
          </a>
          <div className='project-description'>
            <br/>Look up your GitHub profile! View pages of users, no login required. Sort your search by followers, repositories, or date created. The most challenging part of this app was creating a simple way to page through the results. I implemented a custom pagination hook, but ended up not using it because I wanted something simpler.
          </div>
        </div>
        <div className='project-card'>
          <h3>Pro Audio Service LLC</h3>
          <a
            title = 'Pro Audio Service LLC Website'
            target='_blank'
            rel="noreferrer"
            href='https://pas-ohio.netlify.app/'
          >
            <img src={proAudioService} alt='Pro Audio Service LLC Website'/>
          </a>
          <a
            title= 'View PAS Website Code on GitHub'
            target='_blank'
            rel="noreferrer"
            href='https://github.com/vladsolokha/pas-website'
          >
            View code on GitHub
          </a>
          <div className='project-description'>
            <br/>Pro Audio Service LLC is an Elecronics Repair and Service business. They specialize in reparing all kinds of electronics. They seriously needed an update to their website to bring in more customers. The most challenging part was making the website flow from one section to another. Next iteration will connect a contact form to their email through AWS services so they can recive contact emails and questions directly in their inbox.
          </div>
        </div>
        <div className='project-card'>
          <h3>Playcode</h3>
          <a
            title = 'GitHub Repository with Small Code Programs'
            target='_blank'
            rel="noreferrer"
            href='https://github.com/vladsolokha/playcode'
          >
            <img src={playCode} alt='GitHub Repository with Small Code Programs'/>
          </a>
          <a
            title= 'View Playcode on GitHub'
            target='_blank'
            rel="noreferrer"
            href='https://github.com/vladsolokha/playcode'
          >
            View code on GitHub
          </a>
          <div className='project-description'>Try out the Bounce Game or the Stickman Game. Look at interesting solutions to coding problems in python. This repo contains some works that I've started, but may not have finished due to time or motivation constraints.</div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
