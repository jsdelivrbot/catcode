import React from 'react'

import tg  from './tg.png'
import './Botbutton.css'
import store from '../containers/store'
import { toggleChat } from '../containers/actions'

const Botbutton = () => (
  <div className="bot" onClick={ () => store.dispatch(toggleChat(true)) } >
    <img src={ tg } alt="bot" />
  </div>
)

export default Botbutton
