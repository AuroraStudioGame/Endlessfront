import * as THREE from 'three'
import React, {useRef} from 'react'
import './componentsStyle.css'
import { Canvas, extend, useThree, useFrame } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import img from './Materials/tex-floor1.jpg'
import Sphere from './Models/sphere'
import Light from './Models/light'


extend({ OrbitControls })
export default class Threejs extends React.Component {
    constructor() {
        super();
        this.state = {
            create: null
        }
    }
    componentDidMount(){
        
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.add && nextProps.add !== this.props.add) {
            this.setState({ create: nextProps.add })
        }
    }

    createTerrain = () => {
        return (
            <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
            <this.Controls></this.Controls>
            <planeBufferGeometry attach='geometry' args={[100,100]}></planeBufferGeometry>
            <meshStandardMaterial
                    attach="material"
                    color="grey"
                    transparent
                    roughness={0.1}
                    metalness={0.1}
                />
            </mesh>
        );
      }

    Controls = () => {
        const controls = useRef()
        const { camera, gl } = useThree()
        useFrame(() => {
            controls.current.update()
        })
        return (
            <orbitControls ref={controls} args={[camera, gl.domElement]}></orbitControls>
        )
    }
    render(){
        return (
            <div className='viewport_box' ref={(mount) => { this.mount = mount }}>
                <Canvas
                    orthographic={false}>
                    {this.createTerrain()}
                    {this.state.create ? <Sphere/> : null}
                    <Light/>
                </Canvas>
            </div>
        )
    }
}