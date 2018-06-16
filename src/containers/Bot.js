import React from 'react'

import Message from '../components/Message'
import './Bot.css'
import tg from './tg.png'


class Bot extends React.Component {
  state = {
    message: '',
    messages: []
  }

  handleChangeInput = (e) => this.setState({ message: (e.target.value)})

  addMessage = () => {
    if(this.state.message !== '')
      this.setState({
        messages: this.state.messages.concat([this.state.message]),
        message: ''
      })
  }

  render() {
    return (
    <div className="box">
      <div className="box-title">
        <span> Bot diy </span>
      </div>
      <div className="messages">
        { this.state.messages.map( (msg, i) => <Message key={i} text={ msg } /> )}
      </div>
      <div className="box-txt">
        <input className="msg" value={ this.state.message } onChange={this.handleChangeInput} />
        <img src={ tg } className="send" alt="b" onClick={ this.addMessage }/>
      </div>
    </div>)
  }
}

export default Bot
