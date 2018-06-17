import React, { Component } from 'react'

import Topbar from '../components/Topbar'
import Ribbon from '../components/Ribbon'
import Chat from '../components/Chat'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <Ribbon />
        <Chat />
      </div>
    )
  }
}

export default App
