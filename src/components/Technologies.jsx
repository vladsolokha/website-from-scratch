import React from 'react'
import './Technologies.css'
import { ReactJs, Javascript, Python, Html5, Csswizardry, Netlify, Amazonaws } from '@icons-pack/react-simple-icons'


export default function Technologies() {
    const icons = [
        {ReactJs}, {Javascript}, {Python}, {Html5}, {Csswizardry}, {Netlify}, {Amazonaws}
    ]
    const iconSize = 24

    return (
        <div className='technologies-container'>
            {icons.map((Item) => 
                (<Item key={Item} size={iconSize} />)
            )}
        </div>
  )
}

