import React, { Component } from 'react';
import './componentsStyle.css'
import $ from 'jquery'

class Instruments extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount(){
      
  }

  handleItemClick = (item) => {
    this.props.createMesh(item)
  }

  render() {
    return (
      <div className='instruments_box'>
        <div className='instruments_container'>
          <button className='instrument_btn'>
            <img src='/instrument_cube.png' width='50' height='50' className='instrument_item'/>
          </button>
          <button className='instrument_btn' name='sphere' onClick={e => this.handleItemClick('sphere')}>
            <img src='/instrument_sphere.png' width='50' height='50' className='instrument_item'/>
          </button>
        </div>
      </div>
    )
  }
}
export default Instruments