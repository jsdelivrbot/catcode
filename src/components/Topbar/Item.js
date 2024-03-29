import React from 'react'
import './Item.css'

const Item = ({name, image}) => (
   <div>
    <span>{ name }</span>
    <img className="item-img" src={ image } alt="img"/>
   </div>
 )

export default Item
