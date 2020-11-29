import React, { Component } from 'react';
import Interface from '../components/interface'
import Instruments from '../components/instruments'
import MaterialShop from '../components/materialShop'
import Controls from '../components/controls'
import _ from 'lodash'
import $ from 'jquery'
import SettingsModal from '../components/SettingsModal';
import ConstructorScene from '../components/constructorScene'
import SubInstruments from '../components/SubInstruments';

class Constructor extends Component {
  constructor() {
    super();
    this.state = {
      newMaterial: '',
      edit: {dimension: '', step: ''},
      subMenu: ''
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
    //заглушка
    this.setState({ avatarImage: '', userInfo: { log: 'admin', fio: 'stas', pass: 'Cvbhyjd11' } })
    // fetch(`players/getuser?id=${_.get(this.state, ['userInfo', 'id'])}`, {method: 'GET'}).then( async response => {
    //   let resjson = await response.json()
    //   this.setState({ userInfo: resjson[0] }, () => {
    //     let filename = _.get(this.state, ['userInfo', 'id']) + '_' + _.get(this.state, ['userInfo', 'data', 'avatar'])
    //     $.get(`upload?filename=${filename}`, (avatar) => {
    //       if(avatar) {
    //         this.setState({ avatarImage: avatar })
    //       }
    //     })
    //   })
    // })
  }

  openModal = (e) => {
    this.setState({ opened: e })
  }
  createMesh = (item) => {
    this.setState({ create: item, newMaterial: '', edit: null })
  }
  setMaterial = (m) => {
    this.setState({ newMaterial: m, edit: null, create: '' })
  }
  setEdit = (dimension, step) => {
    this.setState({ edit: {dimension: dimension, step: step}, newMaterial: '', create: '' })
  }
  openSubInstruments = (menu) => {
    this.setState({ subMenu: this.state.subMenu === menu ? '' : menu })
  }

  render() {

    let submenu = this.state.subMenu

    return (
      <main className='constructor_box'>
        <ConstructorScene 
          addMesh={this.state.create} 
          setNewMaterial={this.state.newMaterial} 
          editMesh={this.state.edit}/>
        <Interface userInfo={this.state.userInfo} avatar={this.state.avatarImage} handleClick={e => this.openModal(e)}/>
        <MaterialShop setMaterial={this.setMaterial}/>
        <Instruments openSubInstruments={this.openSubInstruments}/>
        {submenu && <SubInstruments createMesh={this.createMesh} open={submenu}/>}
        <Controls setEdit={this.setEdit}/>
        {this.state.opened === 'settings' ? <SettingsModal formValues={this.state.userInfo} onClose={() => this.setState({ opened: null })}/> : null}
      </main>
    )
  }
}
export default Constructor