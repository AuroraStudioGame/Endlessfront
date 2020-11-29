import React, { Component } from 'react';
import './componentsStyle.css'
import $ from 'jquery'

class SubInstruments extends Component {
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

    //EdgesGeometry - https://threejs.org/docs/#api/en/geometries/EdgesGeometry - использууй для выделения
    // Для каждого примитива при добавлении сделай окошко параметров
    // Затем импорт из блендера
    // Затем физику найди она должна готовая быть
    // Ну и игровой режим
    
    //как доп создание меша положение куда камера смотрит

    const primitives = <div className='instruments_subcontainer'>
          <button className='subinstrument_btn subinstrument_btn_one' onClick={e => this.handleItemClick('box')}>
            <img src='/instrument_cube.png' className='subinstrument_item'/>
          </button>
          <button className='subinstrument_btn subinstrument_btn_two' name='sphere' onClick={e => this.handleItemClick('sphere')}>
            <img src='/instrument_sphere.png' className='subinstrument_item'/>
          </button>
          <button className='subinstrument_btn subinstrument_btn_three' name='cone' onClick={e => this.handleItemClick('cone')}>
            <img src='/instrument_cone.png' width='50' height='50' className='subinstrument_item'/>
          </button>
          <button className='subinstrument_btn subinstrument_btn_four' name='cylinder' onClick={e => this.handleItemClick('cylinder')}>
            <img src='/instrument_cylinder.png' width='50' height='50' className='subinstrument_item'/>
          </button>
          <button className='subinstrument_btn subinstrument_btn_five' name='circle' onClick={e => this.handleItemClick('circle')}>
            <img src='/instrument_circle.png' width='50' height='50' className='subinstrument_item'/>
          </button>
          <button className='subinstrument_btn subinstrument_btn_six' name='plane' onClick={e => this.handleItemClick('plane')}>
            <img src='/instrument_plane.png' width='50' height='50' className='subinstrument_item'/>
          </button>
          <button className='subinstrument_btn subinstrument_btn_seven' name='dodecahedron' onClick={e => this.handleItemClick('dodecahedron')}>
            <img src='/instrument_dodecahedron.png' width='50' height='50' className='subinstrument_item'/>
          </button>
          <button className='subinstrument_btn subinstrument_btn_eight' name='extrude' onClick={e => this.handleItemClick('extrude')}>
            <img src='/instrument_extrude.png' width='50' height='50' className='subinstrument_item'/>
          </button>
          <button className='subinstrument_btn subinstrument_btn_nine' name='lathe' onClick={e => this.handleItemClick('lathe')}>
            <img src='/instrument_lathe.png' width='50' height='50' className='subinstrument_item'/>
          </button>
          <button className='subinstrument_btn subinstrument_btn_ten' name='octahedron' onClick={e => this.handleItemClick('octahedron')}>
            <img src='/instrument_octahedron.png' width='50' height='50' className='subinstrument_item'/>
          </button>
          <button className='subinstrument_btn subinstrument_btn_eleven' name='ring' onClick={e => this.handleItemClick('ring')}>
            <img src='/instrument_ring.png' width='50' height='50' className='subinstrument_item'/>
          </button>
          <button className='subinstrument_btn subinstrument_btn_twelve' name='text' onClick={e => this.handleItemClick('text')}>
            <img src='/instrument_text.png' width='50' height='50' className='subinstrument_item'/>
          </button>
          <button className='subinstrument_btn subinstrument_btn_thirteen' name='torus' onClick={e => this.handleItemClick('torus')}>
            <img src='/instrument_torus.png' width='50' height='50' className='subinstrument_item'/>
          </button>
    </div>

  const subMenu = this.props.open === 'primitives' ? primitives : <div>{this.props.open}</div>

    return (
      <div className='subinstruments_box'>
        {subMenu}
      </div>
    )
  }
}
export default SubInstruments