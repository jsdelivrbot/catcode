import React from 'react'

import catcode from '../../assets/catcode.png'
import Item from './Item.js'
import code from '../../assets/code.png'
import gh from '../../assets/github.png'
import md from '../../assets/medium.png'
import './Topbar.css'

const Topbar = () => {
    return (
      <div className="topbar">
        <div className="bar">
          <Item name={ 'About' } />
          <Item name={ 'Work' } image={ code } />
        </div>
        <img className="logo" src={ catcode } alt="logo"/>
        <div className="bar">
          <Item name={ 'Contact' } image={ gh } />
          <Item name={ 'Medium' } image={ md }/>
          <Item name={ 'Github' } image={ gh } />
        </div>
      </div>
    )
}

export default Topbar
