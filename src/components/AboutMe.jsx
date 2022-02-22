import React, { useState } from 'react'
import {IoCaretDownCircleSharp, IoCaretUpCircleSharp} from 'react-icons/io5'
import './AboutMe.css'

export default function AboutMe() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className='main'>
      <div className='story'>
        I'm a long time software enthusiast. I tried to quit and do something else like music or carpentry, but felt empty inside. Even though I still have a passion for making amazing music and even though there's a special place in my heart for home-made wood items, I ultimately needed to keep developing software for people. I couldn't let it go. I'm a self-starter and self-learner who devotes themselves to learn everything they can about React and its corresponding technologies to make web apps and websites. 
        <br/>
      </div>
      {isOpen ? (
        <div className='more' onClick={() => {setIsOpen(!isOpen)}}>
          <div><br/>See more about me</div>
          <IoCaretDownCircleSharp />
        </div>
      ) : (
        <div children='less'>
          <div className='more-story'>
            <br/>
            <u>More about Vlad</u>:
            <br/>
            He obtained his Bachelor of Chemistry degree in 2014 and Master of Teaching degree in science education in 2016. He started teaching high school chemistry and physics in 2014. In 2018, through much collaboration and management experience, he founded a computer science curriculum that introduced students to the world of technology and computer science, programming, game design, software development, and website creation. Presently, he still teaches web development, engineering, and computer science at the high school level, but is pursuing web-based app development as his next career. Vlad loves solving technical problems and challenges through mentoring, tutoring, and discussions. He hopes to start many software and technology-based businesses in his lifetime.
            <br/>
            <br/>
            <u>My hobbies and interests include</u>: 
            being a great father and husband, building things with my hands and wood, renovating homes, relaxing in the hot tub and sauna, drinking coffee and tea with sweets, visiting small coffee shops, hiking and snowboarding, riding dirt bikes and 4 wheelers, producing music, audio engineering, playing guitar and drums, video games. 
            

            <div className='close-more' onClick={() => {setIsOpen(!isOpen)}}>
              <div><br/>Close</div>
              <IoCaretUpCircleSharp />
            </div>

          </div>
        </div>
      )}
    </div>
  )
}
