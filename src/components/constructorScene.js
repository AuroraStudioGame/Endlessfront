import React, { Component, useState } from 'react';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
import './componentsStyle.css'

class ConstructorScene extends Component {
  constructor() {
    super();
    this.state = {
      pickedObject: null
    }
  }

  componentDidMount(){
      this.main('plane')
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.addMesh) {
      this.addMesh({name: nextProps.addMesh, type: 'addMesh'})
    }
    if(nextProps.setNewMaterial) {
      this.setNewMaterial(nextProps.setNewMaterial)
    }
    if(nextProps.editMesh) {
      this.editMesh(nextProps.editMesh.dimension, nextProps.editMesh.step)
    }
  }

  pickedObject = null

  editMesh = (dim, step) => {
    console.log('DD-->', dim, step)
    this.scene.children.map(ch => {
      if(ch.id === this.pickedObject) {
        let pos = ch.position
        let scale = ch.scale
        let rotation = ch.rotation
        if(['x', 'y', 'z'].indexOf(dim) >= 0) {
          ch.position.set(
            dim === 'x' ? pos.x + step : pos.x, 
            dim === 'y' ? pos.y + step : pos.y, 
            dim === 'z' ? pos.z + step : pos.z
          )
        }
        if(['sx', 'sy', 'sz'].indexOf(dim) >= 0) {
          ch.scale.set(
            dim === 'sx' ? scale.x + step : scale.x, 
            dim === 'sy' ? scale.y + step : scale.y, 
            dim === 'sz' ? scale.z + step : scale.z
          )
        }
        if(dim === 'rx') {
          ch.rotateX(step)
        }
        if(dim === 'ry') {
          ch.rotateY(step)
        }
        if(dim === 'rz') {
          ch.rotateZ(step)
        }
        if(dim === 'delete') {
          this.scene.remove(ch)
          ch.geometry.dispose()
          ch.material.dispose()
          ch = undefined
        }
      }
    })
  }

  setNewMaterial = (m) => {
    if(this.pickedObject) {
      this.scene.children.map(ch => {
        if(ch.id === this.pickedObject) {
          if(ch.geometry.parameters.heightSegments && ch.geometry.parameters.widthSegments) {
            let texture = new THREE.TextureLoader().load(m)
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set( ch.geometry.parameters.widthSegments, ch.geometry.parameters.heightSegments );
            let material = new THREE.MeshPhongMaterial( {map: texture, morphTargets: true} )
            ch.material = material
          } else {
            let texture = new THREE.TextureLoader().load(m)
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set( 10, 10 );
            let material = new THREE.MeshPhongMaterial( {map: texture, morphTargets: true} )
            ch.material = material
          }
        }
      })
    }
  }

  addMesh = (mesh) => {
    if(mesh.name === 'box' && mesh.type === 'addMesh') {
      let texture = new THREE.TextureLoader().load('/textures/grass2.jpg')
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set( 1, 1 );
      let geometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);
      let material = new THREE.MeshPhongMaterial( {map: texture, morphTargets: true} );
      let box = new THREE.Mesh( geometry, material );
      //var lookAtVector = new THREE.Vector3(this.camera.matrix[8], this.camera.matrix[9], this.camera.matrix[10]);
      box.position.set(0, 0, 0);
      box.castShadow = true
      box.receiveShadow = true
      this.scene.add( box );
    }
    if(mesh.name === 'sphere' && mesh.type === 'addMesh') {
      let texture = new THREE.TextureLoader().load('/textures/wall1.jpg')
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set( 15, 15 );
      let geometry = new THREE.SphereGeometry(2, 15, 15);
      let material = new THREE.MeshPhongMaterial( {map: texture, morphTargets: true} );
      let sphere = new THREE.Mesh( geometry, material );
      sphere.position.set(0, 0, 0);
      this.scene.add( sphere );
    }
    if(mesh.name === 'circle' && mesh.type === 'addMesh') {
      let geometry = new THREE.CircleGeometry( 5, 32 );
      let material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
      let circle = new THREE.Mesh( geometry, material );
      circle.position.set(0, 0, 0)
      this.scene.add( circle );
    }
    if(mesh.name === 'cone' && mesh.type === 'addMesh') {
      let geometry = new THREE.ConeGeometry( 5, 20, 32 );
      let material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
      let cone = new THREE.Mesh( geometry, material );
      cone.position.set(0, 0, 0)
      this.scene.add( cone );
    }
  }
  main = (add) => {
    const me = this
    const canvas = document.getElementById('webgl') //document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.autoClearColor = false;
  
    const fov = 70;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 3;
  
    const controls = new OrbitControls(camera, canvas);
    controls.target.set(0, 0, 0);
    controls.update();
  
    var pickPosition = this.pickPosition
    var pickedObjectSavedColor = 0;

    const scene = new THREE.Scene();
    this.renderer = renderer
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
      scene.background = texture
      //mesh
    if(add === 'plane') {
      let texture = new THREE.TextureLoader().load('/textures/ground2.jpg')
      texture.wrapS = THREE.RepeatWrapping
      texture.wrapT = THREE.RepeatWrapping
      texture.repeat.set( 10, 10 )
      var geometry = new THREE.PlaneGeometry( 50, 50, 50, 50 )
      var material = new THREE.MeshPhongMaterial( {map: texture, morphTargets: true} )
      var plane = new THREE.Mesh( geometry, material )
      plane.position.set(0, -5, 0)
      plane.rotateX(-(Math.PI / 2))
      plane.receiveShadow = true
      plane.castShadow = true
      scene.add( plane )
    }
    //light
    const light = new THREE.DirectionalLight(0xFFFFFF, 1)
      light.position.set(0, 20, 0)
      scene.add(light)
    //render
    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      const needResize = canvas.width !== width || canvas.height !== height
      if (needResize) {
        renderer.setSize(width, height, false)
      }
      return needResize
    }

    function pick(normalizedPosition, scene, camera) {
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(normalizedPosition, camera);
      const intersectedObjects = raycaster.intersectObjects(scene.children);
      const transformControls1 = new TransformControls(
        camera,
        renderer.domElement,
      );
      transformControls1.addEventListener('change', () => renderer.render(scene, camera));
      transformControls1.setSpace('local');
      if (intersectedObjects.length) {
        if(!me.pickedObject && intersectedObjects[0].object || me.pickedObject &&  intersectedObjects[0].object && me.pickedObject !== intersectedObjects[0].object.id) {
          me.pickedObject = intersectedObjects[0].object.id
          me.scene.children.map(ch => {
            if(ch.material && ch.id === me.pickedObject) {
              console.log('PP-->', ch)
              scene.add(transformControls1);
              transformControls1.attach(ch);
              //ch.material.wireframe = true
            } else if(ch.material && ch.id !== me.pickedObject) {
              console.log('UP-->', ch, scene)
              scene.remove(transformControls1)
              //transformControls1 = undefined
              //ch.material.wireframe = false
            }
          })
        }
      } else {
        me.pickedObject = null
        me.scene.children.map(ch => {
          if(ch.material && ch.material.wireframe) {
            scene.remove(transformControls1)
            //transformControls1 = undefined
            //ch.material.wireframe = false
          }
        })
      }
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
    document.getElementById("webgl").addEventListener('mousemove', this.setPickPosition)
    document.getElementById("webgl").addEventListener('mouseout', this.clearPickPosition)
    document.getElementById("webgl").addEventListener('mouseleave', this.clearPickPosition)

    document.getElementById("webgl").addEventListener('click', (e) => pick(pickPosition, scene, camera))

    document.getElementById("webgl").addEventListener('touchstart', (event) => {
      // prevent the window from scrolling
      event.preventDefault();
      this.setPickPosition(event.touches[0]);
    }, {passive: false});
     
    document.getElementById("webgl").addEventListener('touchmove', (event) => {
      this.setPickPosition(event.touches[0]);
    });
     
    document.getElementById("webgl").addEventListener('touchend', this.clearPickPosition);
    requestAnimationFrame(render);
  }

  pickPosition = {x: 0, y: 0};

  getCanvasRelativePosition = (event) => {
    const rect = document.getElementById("webgl").getBoundingClientRect();
    return {
      x: (event.clientX - rect.left) * document.getElementById("webgl").width  / rect.width,
      y: (event.clientY - rect.top ) * document.getElementById("webgl").height / rect.height,
    };
  }

  setPickPosition = (event) => {
    const pos = this.getCanvasRelativePosition(event);
    this.pickPosition.x = (pos.x / document.getElementById("webgl").width ) *  2 - 1
    this.pickPosition.y = (pos.y / document.getElementById("webgl").height) * -2 + 1
  }
   
  clearPickPosition = () => {
    this.pickPosition.x = -100000
    this.pickPosition.y = -100000
  }

  

  render() {
    return (
      <canvas className='main_canvas' width={window.innerWidth} height={window.innerHeight} id='webgl'></canvas>
    )
  }
}
export default ConstructorScene