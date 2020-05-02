import React, { Component } from 'react';
import SockJS from 'sockjs-client'
import './App.css';
import Main from './pages/main'
import Chat from './components/Chat'

class App extends Component {
  constructor(props){
    super(props)
    const sock = new SockJS('')
  sock.onopen = () => {
    console.log('socket connection open')
  }
  sock.onmessage = e => {
    console.log('message received:', e.data)
  }
  sock.onclose = () => {
    console.log('socket close')
  }
  this.state={
    actions: sock,
    messages: []
  }
  }

  render(){
    return (
      <div>
        <Main/>
        <Chat/>
      </div>
    );
  }
}

export default App;
