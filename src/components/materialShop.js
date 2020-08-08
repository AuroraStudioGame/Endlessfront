import React, { Component } from 'react';
import './componentsStyle.css'
import $ from 'jquery'

class MaterialShop extends Component {
  constructor() {
    super();
    this.state = {
      materials: ['/textures/grass1.jpg',
      '/textures/grass2.jpg',
      '/textures/grass3.jpg',
      '/textures/ground1.jpg',
      '/textures/ground2.jpg',
      '/textures/ground3.jpg',
      '/textures/wall1.jpg',
      '/textures/wall2.jpg',
      '/textures/wall3.jpg',
      '/textures/wood1.jpg',
      '/textures/wood2.jpg',
      '/textures/wood3.jpg']
    }
  }
  componentDidMount(){
      
  }

  handleItemClick = (m) => {
    this.props.setMaterial(m)
  }
  render() {
    return (
      <div className='materialshop'>
        <div className='materialshop_container'>
          {this.state.materials.map((m, idx) => {
              return <button key={idx} className='materialshop_btn' onClick={e => this.handleItemClick(m)}>
              <img src={m} width='50' height='50' className='materialshop_item'/>
            </button>
          })}
        </div>
      </div>
    )
  }
}
export default MaterialShop