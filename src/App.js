import React, { Component } from 'react'

import Topbar from './components/Topbar'
import Ribbon from './components/Ribbon'
import Chatbot from './components/Chatbot'
import Showcase from './components/Showcase'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <Ribbon />
        <Showcase />
        <Chatbot />
      </div>
    )
  }
}

export default App
