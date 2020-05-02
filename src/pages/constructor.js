import React, { Component } from 'react';
import Interface from '../components/interface'

class Constructor extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentWillMount(){
      // fetch('users/getuser').then(res=>{
      //     return res.text()
      // }).then(text=>{
      //     this.setState({answer: text})
      // })
  }
  render() {
    return (
      <main>
        <Interface/>
      </main>
    )
  }
}
export default Constructor