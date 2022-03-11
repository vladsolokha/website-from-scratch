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
        {name: 'JavaScript', component: Javascript}, 
        {name: 'Python', component: Python}, 
        {name: 'React JS', component: ReactJs},
        {name: 'Node JS', component: Nodedotjs}, 
        {name: 'HTML5', component: Html5}, 
        {name: 'CSS', component: Csswizardry},
        {name: 'SASS', component: Sass},
        {name: 'Express Server', component: Express},
        {name: 'Mongo DB', component: Mongodb},
        {name: 'PostGre SQL', component: Postgresql},
        {name: 'React Router', component: Reactrouter},
        {name: 'Netlify', component: Netlify}, 
        {name: 'Docker', component: Docker},
        {name: 'Amazon AWS', component: Amazonaws},
        {name: 'Google Cloud', component: Googlecloud},
        {name: 'Git', component: Git},
        {name: 'Apple', component: Apple},
        {name: 'Linux', component: Linux}
            
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
                    <Icon.component size={iconSize} title={`${Icon.name}`} />  
                </a>  
            </div>
        ))
    )
        

    return ( 
        <div className='all-icons'>
            <TechnologyIcons /> 
        </div>        
    )
}

