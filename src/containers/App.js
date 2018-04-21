import React, { Component } from 'react'

import Topbar from '../components/Topbar'
import Ribbon from '../components/Ribbon'
import Bot from './Bot'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Topbar> </Topbar>
        <Ribbon> </Ribbon>
        <Bot> </Bot>
      </div>
    )
  }
}

export default App
