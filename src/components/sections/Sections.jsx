import React from 'react'
import jeans from '../../assets/jeans.png'
import sare from '../../assets/sare.png'
import shirt from '../../assets/shirt.png'
import short from '../../assets/short.png'
import tshirt from '../../assets/tshirt.png'
import SectionContainer from '../sectionContainer/SectionContainer'

const Sections = () => {

    const items = [
        {
            "section" : "Men Section",
            "things" :[
                {
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
                }
            ]
        },
        {
            "section" : "Women Section",
            "things" :[
                {
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
                }
            ]
        },
        {
            "section" : "Kids Section",
            "things" :[
                {
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
                }
            ]
        }
    ]
  return (
    <div>
        {items && items?.map((item, index)=><SectionContainer key ={item?.section+index} section = {item.section} things={item.things}></SectionContainer>)}
    </div>
  )
}

export default Sections