import React, { Component } from 'react'

import store from '../../store'
import Bot from './Bot'
import Botbutton from './Botbutton'


class Chatbot extends Component {
  constructor(){
    super()
    this.state = { show: false }
    store.subscribe(() => { this.setState({ show: store.getState().chat }) })
  }

  render() {
    return (
      <div>
        { this.state.show ? <Bot/> : <Botbutton /> }
      </div>
    )
  }
}

export default Chatbot
