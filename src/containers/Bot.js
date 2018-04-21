import React, { Component } from 'react'
import tg from './tg.png'

import './Bot.css'

const Bot  = () =>{
    return (
      <div className="box">
        <div className="box-title"></div>
        <div className="box-msg"></div>
        <div className="box-txt">
          <input className="msg"/>
          <img src={ tg } className="send" alt="b" />
        </div>
      </div>
    )
}

export default Bot
