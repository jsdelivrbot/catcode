import React, { Component } from 'react'

import store from '../containers/store'
import Bot from './Bot'
import Botbutton from './Botbutton'


class Chat extends Component {
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

export default Chat
