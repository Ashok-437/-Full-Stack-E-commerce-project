import React from 'react'
import './Card.css'

const Card = ({title, img}) => {
  return (
    <div className='card'>
        <img className='image' src={img} alt={title} />
        <p className='title'>{title}</p>
    </div>
  )
}

export default Card