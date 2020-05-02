import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import $ from 'jquery'
import {roundedRect} from '../components/2dfigures'
import './pagesStyle.css'
import { bindActionCreators } from 'C:/Users/User/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';

class Login extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount(){
      this.viewCanvas()
  }
  // componentWillReceiveProps(next) {
  //   if(next.login !== this.props.login) {
  //     this.setState({ login: next.login })
  //   }
  // }
  viewCanvas(){
    var canvas = document.getElementById('canvas_bg')
    if(canvas.getContext){
      var ctx = canvas.getContext('2d')
    } else{
      console.log('CANVAS NOT GET CONTEXT!')
    }
    var requestID
    var posX = 50
    var posY = 50
    var boxWidth = 100
    var boxHeight = 100
    var radius = 15
    var pixelsPerFrame = 5
    function animate(){
      requestID=requestAnimationFrame(animate)
      if(posX<window.innerWidth){
        roundedRect(ctx,posX,posY,boxWidth,boxHeight,radius)
        posX+=pixelsPerFrame
      } else{
        cancelAnimationFrame(requestID)
      }
      requestID = requestAnimationFrame(animate)
    }
  }
  setField=(field)=>{
    this.setState({[field.target.name]:field.target.value})
  }
  submitLogin=(e)=>{
    if(this.state.login && this.state.pass){
      fetch(`players?log=${this.state.login}&pass=${this.state.pass}`)
      .then(response=>response.json())
      .then(result=>{
        console.log('FETCH RESULT->', result)
        
      }).catch(e=>{
        console.log('FETCH ERROR->', e)
      })
      e.preventDefault()
    } else if(this.state.fullname && this.state.setlogin && this.state.setpass) {
      $.get(`players?fullname=${this.state.fullname}&setlogin=${this.state.setlogin}&setpass=${this.state.setpass}`, (res) => {
        console.log('REGISTER SUCCESS-->', res)
      })
    }
    e.preventDefault()
  }
  submitRegister=(e)=>{
    console.log('STATE', this.state)
    if(this.state.fullname && this.state.setlogin && this.state.setpass) {
      $.post(`add?fullname=${this.state.fullname}&setlogin=${this.state.setlogin}&setpass=${this.state.setpass}`, (res) => {
        console.log('REGISTER SUCCESS-->', res)
      })
    }
  }
  render() {
    console.log('STATE', this.state)
    const loginFields = (
      <div className="login_box_fields">
        <input type="text" placeholder="login" name="login" value={this.state.login} onChange={this.setField}/>
        <input type="password" placeholder="password" name="pass" value={this.state.pass} onChange={this.setField}/>
        <button type="submit">login</button>
      </div>
    )
    const registerFields=(
      <div className="login_box_fields">
        <input type="text" placeholder="full name" name="fullname" value={this.state.fullname} onChange={this.setField}/>
        <input type="text" placeholder="set login" name="setlogin" value={this.state.setlogin} onChange={this.setField}/>
        <input type="password" placeholder="set password" name="setpass" value={this.state.setpass} onChange={this.setField}/>
        <button type="submit">register</button>
      </div>
    )
    return (
      <div className="login_body">
        <canvas id="canvas_bg" className="canvas_background" width={window.innerWidth} height={window.innerHeight}></canvas>
        <div className="login_container">
        <span className="first_letter">A</span>
        <form className="login_box" onSubmit={this.submitLogin}>
          <h2>urora Studio Game</h2>
          {loginFields}
          {registerFields}
        </form>
        </div>
      </div>
    )
  }
}

export default Login