import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './login'
import Constructor from './constructor'
import Settings from './settings'

class Main extends Component {
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
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/constructor' component={Constructor}/>
          <Route exact path='/settings' component={Settings}/>
        </Switch>
      </main>
    )
  }
}
export default Main