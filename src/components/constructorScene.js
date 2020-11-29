import React, { Component } from 'react';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './componentsStyle.css'

class ConstructorScene extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount(){
    //to do saving scene and add by
      this.main('plane')
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.addMesh && nextProps.addMesh !== this.props.addMesh) {
      this.addMesh({name: nextProps.addMesh, type: 'addMesh'})
    }
    if(nextProps.setMaterial && nextProps.setMaterial !== this.props.setMaterial) {
      this.addMesh({name: nextProps.setMaterial, type: 'setMaterial'})
    }
  }
  addMesh = (mesh) => {
    if(mesh.name === 'box' && mesh.type === 'addMesh') {
      let texture = new THREE.TextureLoader().load('/textures/wall1.jpg')
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set( 4, 4 );
      let geometry = new THREE.BoxGeometry(5, 5, 5, 10, 10, 10);
      let material = new THREE.MeshBasicMaterial( {map: texture, morphTargets: true} );
      let box = new THREE.Mesh( geometry, material );
      box.position.set(this.camera.position.x - 3, this.camera.position.y - 3, this.camera.position.z - 3);
      this.scene.add( box );
    }
    if(mesh.name === 'sphere' && mesh.type === 'addMesh') {
      let texture = new THREE.TextureLoader().load('/textures/wall1.jpg')
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set( 4, 4 );
      let geometry = new THREE.SphereGeometry(2, 5, 5);
      let material = new THREE.MeshBasicMaterial( {map: texture, morphTargets: true} );
      let sphere = new THREE.Mesh( geometry, material );
      sphere.position.set(this.camera.position.x - 3, this.camera.position.y - 3, this.camera.position.z - 3);
      this.scene.add( sphere );
    }
  }
  main = (add) => {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.autoClearColor = false;
  
    const fov = 70;
    const aspect = window.innerWidth / window.innerHeight;  // the canvas default
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 3;
  
    const controls = new OrbitControls(camera, canvas);
    controls.target.set(0, 0, 0);
    controls.update();
  
    const scene = new THREE.Scene();
    this.camera = camera
    this.scene = scene
    const loader = new THREE.CubeTextureLoader();
    //skybox
      const texture = loader.load([
        '/textures/clouds1_east.bmp',
        '/textures/clouds1_west.bmp',
        '/textures/clouds1_up.bmp',
        '/textures/clouds1_down.bmp',
        '/textures/clouds1_north.bmp',
        '/textures/clouds1_south.bmp',
      ]);
      scene.background = texture;
      //mesh
    if(add === 'plane') {
      let texture = new THREE.TextureLoader().load('/textures/ground2.jpg')
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set( 4, 4 );
      var geometry = new THREE.PlaneGeometry( 50, 50, 50, 50 );
      var material = new THREE.MeshBasicMaterial( {map: texture, morphTargets: true} );
      var plane = new THREE.Mesh( geometry, material );
      plane.position.set(0, -5, 0);
      plane.rotateX(-(Math.PI / 2));
      scene.add( plane );
    }
    //light
    const light = new THREE.DirectionalLight(0xFFFFFF, 1);
      light.position.set(0, 2, 0);
      scene.add(light);
    //render
    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }
  
    function render(time) {
      time *= 0.001;
      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }
  
    requestAnimationFrame(render);
  }
  render() {
    return (
      <canvas className='main_canvas' width={window.innerWidth} height={window.innerHeight} id='c'></canvas>
    )
  }
}
export default ConstructorScene