// Component displays icons of my technology knowledge.
// On hover user should see tooltip
// On click user get new tab with google search of name of technology

import React from 'react'
import './Technologies.css'
import { 
    Javascript, 
    Python, 
    ReactJs,
    Nodedotjs, 
    Html5, 
    Csswizardry,
    Sass,
    Express,
    Mongodb,
    Postgresql,
    Reactrouter,
    Netlify, 
    Docker,
    Amazonaws,
    Googlecloud,
    Git,
    Apple,
    Linux
} from '@icons-pack/react-simple-icons'



export default function Technologies() {
    const iconList = [
        {name: 'JavaScript', Component: Javascript}, 
        {name: 'Python', Component: Python}, 
        {name: 'React JS', Component: ReactJs},
        {name: 'Node JS', Component: Nodedotjs}, 
        {name: 'HTML5', Component: Html5}, 
        {name: 'CSS', Component: Csswizardry},
        {name: 'SASS', Component: Sass},
        {name: 'Express Server', Component: Express},
        {name: 'Mongo DB', Component: Mongodb},
        {name: 'PostGre SQL', Component: Postgresql},
        {name: 'React Router', Component: Reactrouter},
        {name: 'Netlify', Component: Netlify}, 
        {name: 'Docker', Component: Docker},
        {name: 'Amazon AWS', Component: Amazonaws},
        {name: 'Google Cloud', Component: Googlecloud},
        {name: 'Git', Component: Git},
        {name: 'Apple', Component: Apple},
        {name: 'Linux', Component: Linux}
            
    ]
    const iconSize = 36
    
    const TechnologyIcons = () => (
        iconList.map((Icon, index) => (
            <div className='icon' key={index}>
                <a 
                target='_blank'
                rel="noreferrer"
                title={`${Icon.name} Icon`}
                href={`https://www.google.com/search?q=${Icon.name}`}>          
                    <Icon.Component size={iconSize} title={`${Icon.name}`} />  
                </a>  
            </div>
        ))
    )
        

    return ( 
        <div className='technologies-container'>
            <span className='tech-header'>
                Technologies I Use
            </span>
            
            <div className='all-icons'>
                <TechnologyIcons /> 
            </div>  
        </div>      
    )
}

