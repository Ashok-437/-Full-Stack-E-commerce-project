import React from 'react'
import Card from '../card/Card'
import '../newArrivel/NewArrivel.css'

const sectionContainer = ({section, things}) => {
  return (
    <div className='new-arrivel-bg'>
        <h1 className='new-arrivel-headding'>{section}</h1>
        <div className='new-arrivel'>
            <div className='new-arrivel-container'>
                {things && things?.map((thing, index) => <Card key={thing?.title + index} title={thing.title} img = {thing.img}/>)}
            </div>
        </div>
    </div>
  )
}

export default sectionContainer