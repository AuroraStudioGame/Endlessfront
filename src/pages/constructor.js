import React, { Component } from 'react';
import Interface from '../components/interface'
import Instruments from '../components/instruments'
import MaterialShop from '../components/materialShop'
import _ from 'lodash'
import $ from 'jquery'
import SettingsModal from '../components/SettingsModal';
import ConstructorScene from '../components/constructorScene'

class Constructor extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount(){
    if(_.get(this.props, ['location', 'state', 'userInfo', 0])) {
      this.setState({ userInfo: _.get(this.props, ['location', 'state', 'userInfo', 0]) }, () => this.getUser())
    }
    if(_.get(this.props, ['location', 'state', 'newRegistered'])) {
      this.setState({ userInfo: _.get(this.props, ['location', 'state', 'newRegistered']), opened: 'settings' }, () => this.getUser())
    }
  }
  getUser = () => {
    fetch(`players/getuser?id=${_.get(this.state, ['userInfo', 'id'])}`, {method: 'GET'}).then( async response => {
      let resjson = await response.json()
      this.setState({ userInfo: resjson[0] }, () => {
        let filename = _.get(this.state, ['userInfo', 'id']) + '_' + _.get(this.state, ['userInfo', 'data', 'avatar'])
        $.get(`upload?filename=${filename}`, (avatar) => {
          if(avatar) {
            this.setState({ avatarImage: avatar })
          }
        })
      })
    })
  }
  openModal = (e) => {
    this.setState({ opened: e })
  }
  createMesh = (item) => {
    this.setState({ create: item })
  }
  setMaterial = (m) => {
    console.log('SET MATRIAL->', m)
    this.setState({ setMatrial: m })
  }
  render() {
    return (
      <main className='constructor_box'>
        <ConstructorScene addMesh={this.state.create} setMatrial={this.state.setMaterial}/>
        <Interface userInfo={this.state.userInfo} avatar={this.state.avatarImage} handleClick={e => this.openModal(e)}/>
        <MaterialShop setMaterial={this.setMaterial}/>
        <Instruments createMesh={this.createMesh}/>
        {this.state.opened === 'settings' ? <SettingsModal formValues={this.state.userInfo} onClose={() => this.setState({ opened: null })}/> : null}
      </main>
    )
  }
}
export default Constructor