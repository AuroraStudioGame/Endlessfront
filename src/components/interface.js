import React, { Component } from 'react';

class Interface extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentWillMount(){
      fetch('users/getuser').then(res=>{
          return res.text()
      }).then(text=>{
          this.setState({answer: text})
      })
  }
  render() {
    return (
      <div>
        <h1>User Interface</h1>
        <p>{this.state.answer ? this.state.answer : 'NOOOOOOO'}</p>
      </div>
    )
  }
}
export default Interface