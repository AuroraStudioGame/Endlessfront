import React, { Component } from 'react';
import InterfaceIcon from './interfaceicon'
import './componentsStyle.css'

class Interface extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount(){
      
  }
  componentWillReceiveProps(nextProps) {
    if(!this.state.photo && nextProps.avatar || this.props.avatar !== nextProps.avatar) {
      this.setState({ photo: nextProps.avatar })
    }
  }
  render() {
    return (
      <div className='interface_box'>
        <div className='interface_container'>
          <img src={this.state.photo} alt=':(' className='interface_avatar'/>
          {/* <InterfaceIcon icon='menu' tip='menu' containerClass='one' handleClickIcon={e => this.props.handleClick(e)}/> */}
          <InterfaceIcon icon='search' tip='search' containerClass='two' handleClickIcon={e => this.props.handleClick(e)}/>
          <InterfaceIcon icon='settings' tip='settings' containerClass='three' handleClickIcon={e => this.props.handleClick(e)}/>
          <InterfaceIcon icon='play' tip='play!' containerClass='four' handleClickIcon={e => this.props.handleClick(e)}/>
        </div>
      </div>
    )
  }
}
export default Interface