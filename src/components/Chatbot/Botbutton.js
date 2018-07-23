import React from 'react'

import store from '../../store'
import { toggleChat } from '../../actions'
import tg  from '../../assets/tg.png'
import './Botbutton.css'

const Botbutton = () => (
  <div className="bot" onClick={ () => store.dispatch(toggleChat(true)) } >
    <img src={ tg } alt="bot" />
  </div>
)

export default Botbutton
