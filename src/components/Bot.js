import React from 'react'

import Message from './Message'
import './Bot.css'
import tg from './tg.png'
import store from '../containers/store'
import { toggleChat } from '../containers/actions'

class Bot extends React.Component {
  state = {
    text: '',
    messages: []
  }

  handleChangeInput = (e) => this.setState({ text: (e.target.value)})

  addMessage = sender => {
    if(this.state.message !== '')
      this.setState({
        messages: this.state.messages.concat([{
          text: this.state.text,
          sender: sender
        }]),
        text: ''
      })
  }

  render() {
    return (
    <div className="box">
      <div className="box-title" onClick={ () => store.dispatch(toggleChat(false)) } >
        <span> Bot diy </span>
      </div>
      <div className="messages">
        { this.state.messages.map( (msg, i) => <Message key={i} text={ msg.text } sender={ msg.sender }/> )}
      </div>
      <div className="box-txt">
        <input className="msg" value={ this.state.text } onChange={this.handleChangeInput} />
        <img src={ tg } className="send" alt="b" onClick={ () => this.addMessage('user') }/>
      </div>
    </div>)
  }
}

export default Bot
