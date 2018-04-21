import React, { Component } from 'react'

import catcode from './catcode.png'
import './Topbar.css'

const Topbar = () => {
    return (
      <div className="topbar">
        <div className="bar">
          <span> About </span>
          <span> Works </span>
          <span> Skill </span>
        </div>
        <img className="logo" src={catcode} alt="logo"/>
        <div className="bar">
          <span> Medium </span>
          <span> Github </span>
        </div>
      </div>
    )
}

export default Topbar
