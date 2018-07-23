import React from 'react'

import catcode from '../../assets/catcode.png'
import Item from './Item.js'
import './Topbar.css'

const Topbar = () => {
    return (
      <div className="topbar">
        <div className="bar">
          <Item name={ 'About' } />
          <Item name={ 'Work' } />
        </div>
        <img className="logo" src={ catcode } alt="logo"/>
        <div className="bar">
          <Item name={ 'Medium' } />
          <Item name={ 'Github' } />
        </div>
      </div>
    )
}

export default Topbar
