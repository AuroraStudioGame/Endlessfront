import React, { Component } from 'react';
import './componentsStyle.css'
import $ from 'jquery'

class Controls extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    }
  }
  componentDidMount(){
      
  }

  handleClick = (dimension, step) => {
    this.props.setEdit(dimension, step)
  }

  openControls = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <div className='control_wrapper'>
        <button onClick={this.openControls} className={this.state.open ? 'control_wrapper_btn_opened' : 'control_wrapper_btn'}>{this.state.open ? '<' : '>'}</button>
        <div className={this.state.open ? 'control_box' : 'control_box_hidden'}>
        <div className='control_block'>
            <h6 className='control_block_title'>MOVE</h6>
            <div className='control_movs_row'>
                <button className='control_movs_btn' onClick={e => this.handleClick('x', -5)}>{'<10m'}</button>
                <button className='control_movs_btn' onClick={e => this.handleClick('x', -0.2)}>{'<1m'}</button>
                <span className='control_movs_label'>X</span>
                <button className='control_movs_btn' onClick={e => this.handleClick('x', 0.2)}>{'1m>'}</button>
                <button className='control_movs_btn' onClick={e => this.handleClick('x', 5)}>{'10m>'}</button>
            </div>
            <div className='control_movs_row'>
                <button className='control_movs_btn' onClick={e => this.handleClick('y', -5)}>{'<10m'}</button>
                <button className='control_movs_btn' onClick={e => this.handleClick('y', -0.2)}>{'<1m'}</button>
                <span className='control_movs_label'>Y</span>
                <button className='control_movs_btn' onClick={e => this.handleClick('y', 0.2)}>{'1m>'}</button>
                <button className='control_movs_btn' onClick={e => this.handleClick('y', 5)}>{'10m>'}</button>
            </div>
            <div className='control_movs_row'>
                <button className='control_movs_btn' onClick={e => this.handleClick('z', -5)}>{'<10m'}</button>
                <button className='control_movs_btn' onClick={e => this.handleClick('z', -0.2)}>{'<1m'}</button>
                <span className='control_movs_label'>Z</span>
                <button className='control_movs_btn' onClick={e => this.handleClick('z', 0.2)}>{'1m>'}</button>
                <button className='control_movs_btn' onClick={e => this.handleClick('z', 5)}>{'10m>'}</button>
            </div>
        </div>
        <div className='control_block'>
            <h6 className='control_block_title'>SCALE</h6>
            <div className='control_movs_row'>
                <button className='control_movs_btn' onClick={e => this.handleClick('sx', -5)}>{'-10m'}</button>
                <button className='control_movs_btn' onClick={e => this.handleClick('sx', -0.2)}>{'-1m'}</button>
                <span className='control_movs_label'>X</span>
                <button className='control_movs_btn' onClick={e => this.handleClick('sx', 0.2)}>{'+1m'}</button>
                <button className='control_movs_btn' onClick={e => this.handleClick('sx', 5)}>{'+10m'}</button>
            </div>
            <div className='control_movs_row'>
                <button className='control_movs_btn' onClick={e => this.handleClick('sy', -5)}>{'-10m'}</button>
                <button className='control_movs_btn' onClick={e => this.handleClick('sy', -0.2)}>{'-1m'}</button>
                <span className='control_movs_label'>Y</span>
                <button className='control_movs_btn' onClick={e => this.handleClick('sy', 0.2)}>{'+1m'}</button>
                <button className='control_movs_btn' onClick={e => this.handleClick('sy', 5)}>{'+10m'}</button>
            </div>
            <div className='control_movs_row'>
                <button className='control_movs_btn' onClick={e => this.handleClick('sz', -5)}>{'-10m'}</button>
                <button className='control_movs_btn' onClick={e => this.handleClick('sz', -0.2)}>{'-1m'}</button>
                <span className='control_movs_label'>Z</span>
                <button className='control_movs_btn' onClick={e => this.handleClick('sz', 0.2)}>{'+1m'}</button>
                <button className='control_movs_btn' onClick={e => this.handleClick('sz', 5)}>{'+10m'}</button>
            </div>
        </div>
        <div className='control_block'>
            <h6 className='control_block_title'>ROTATE</h6>
            <div className='control_movs_row'>
                <button className='control_movs_btn' onClick={e => this.handleClick('rx', -0.5)}>{'-10deg'}</button>
                <button className='control_movs_btn' onClick={e => this.handleClick('rx', -0.2)}>{'-1deg'}</button>
                <span className='control_movs_label'>X</span>
                <button className='control_movs_btn' onClick={e => this.handleClick('rx', 0.2)}>{'+1deg'}</button>
                <button className='control_movs_btn' onClick={e => this.handleClick('rx', 0.5)}>{'+10deg'}</button>
            </div>
            <div className='control_movs_row'>
                <button className='control_movs_btn' onClick={e => this.handleClick('ry', -0.5)}>{'-10deg'}</button>
                <button className='control_movs_btn' onClick={e => this.handleClick('ry', -0.2)}>{'-1deg'}</button>
                <span className='control_movs_label'>Y</span>
                <button className='control_movs_btn' onClick={e => this.handleClick('ry', 0.2)}>{'+1deg'}</button>
                <button className='control_movs_btn' onClick={e => this.handleClick('ry', 0.5)}>{'+10deg'}</button>
            </div>
            <div className='control_movs_row'>
                <button className='control_movs_btn' onClick={e => this.handleClick('rz', -0.5)}>{'-10deg'}</button>
                <button className='control_movs_btn' onClick={e => this.handleClick('rz', -0.2)}>{'-1deg'}</button>
                <span className='control_movs_label'>Z</span>
                <button className='control_movs_btn' onClick={e => this.handleClick('rz', 0.2)}>{'+1deg'}</button>
                <button className='control_movs_btn' onClick={e => this.handleClick('rz', 0.5)}>{'+10deg'}</button>
            </div>
          </div>
          <div className='control_block'>
            <button className='control_movs_btn_long' onClick={e => this.handleClick('delete')}>DELETE</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Controls