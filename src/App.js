import React, { Component } from 'react'

import Chatbot from './components/Chatbot'
import Footer from './components/Footer'
import Ribbon from './components/Ribbon'
import Showcase from './components/Showcase'
import Timeline from './components/Timeline'
import Topbar from './components/Topbar'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <Ribbon />
        <Timeline />
        <Showcase />
        <Chatbot />
        <Footer />
      </div>
    )
  }
}

export default App
