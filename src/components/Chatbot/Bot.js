import React from 'react'

import Message from './Message'
import store from '../../store'
import { toggleChat } from '../../actions'
import tg from '../../assets/tg.png'
import { messages } from '../../env'
import './Bot.css'

class Bot extends React.Component {
  state = {
    text: '',
    messages: messages
  }

  handleChangeInput = e => this.setState({ text: (e.target.value)})

  addMessage = sender => {
    if(this.state.text !== '') {
      this.setState({
        messages: this.state.messages.concat([{
          text: this.state.text,
          sender: sender
        }]),
        text: ''
      })
    }
  }

  render() {
    return (
    <div className="box">
      <div className="box-title"
        onClick={ () => store.dispatch(toggleChat(false)) } >
        <span> Contact </span>
      </div>
      <div className="messages">
        { this.state.messages.map( (msg, i) =>
          <Message key={i} text={ msg.text } sender={ msg.sender }/> )
        }
      </div>
      <div className="box-txt">
          <input className="msg"
          value={ this.state.text }
          onChange={this.handleChangeInput} />
        <img src={ tg } className="send" alt="b" onClick={ () => this.addMessage('user-msg') }/>
      </div>
    </div>)
  }
}

export default Bot
