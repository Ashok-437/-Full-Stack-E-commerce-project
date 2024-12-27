import React from 'react'
import './NewArrivel.css'
import jeans from '../../assets/jeans.png'
import sare from '../../assets/sare.png'
import shirt from '../../assets/shirt.png'
import short from '../../assets/short.png'
import tshirt from '../../assets/tshirt.png'
import Card from '../card/Card'

const items = [{
  "title" : "Jeans",
  img : jeans
},{
  "title" : "Sare",
  img : sare
},{
  "title" : "Shirt",
  img : shirt
},{
  "title" : "Short",
  img : short
},{
  "title" : "T-Shirt",
  img : tshirt
},{
  "title" : "Jeans",
  img : jeans
},{
  "title" : "Sare",
  img : sare
},{
  "title" : "Shirt",
  img : shirt
},{
  "title" : "Short",
  img : short
},{
  "title" : "T-Shirt",
  img : tshirt
}]


const NewArrivel = () => {
  return (
    <div className='new-arrivel-bg'>
      <h1 className='new-arrivel-headding'>Products</h1>
      <div className='new-arrivel'>
        <div className='new-arrivel-container'>
          {items && items?.map((item, index) => <Card key={item?.title + index} title={item.title} img = {item.img}/>)}
        </div>
    </div>
    </div>
  )
}

export default NewArrivel