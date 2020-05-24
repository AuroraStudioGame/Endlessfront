import React, { Component } from 'react';
import './componentsStyle.css'

class Instruments extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount(){
      
  }
  render() {
    return (
      <div className='instruments_box'>
        <div className='instruments_container'>
          <button className='instrument_btn'>
            <img src='/instrument_cube.png' width='50' height='50' className='instrument_item'/>
          </button>
          <button className='instrument_btn'>
            <img src='/instrument_sphere.png' width='50' height='50' className='instrument_item'/>
          </button>
        </div>
      </div>
    )
  }
}
export default Instruments