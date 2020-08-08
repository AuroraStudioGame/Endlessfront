import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, extend, useThree } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


extend({ OrbitControls })
export default class Sphere extends React.Component {
    constructor() {
        super();
        this.state = {
            active: false,
            hovered: false
        }
    }

    componentDidMount(){
        
    }
    setHover = (isHover) => {
        this.setState({ hovered: isHover })
    }
    setActive = (isActive) => {
        this.setState({ active: isActive })
    }
    render(){
        // const [hovered, setHover] = useState(false)
        // const [active, setActive] = useState(false)
        return (
            <mesh visible userData={{ test: "hello" }} position={[0, 0, 0]} castShadow
                scale={this.state.active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
                onClick={e => this.setActive(!this.state.active)}
                onPointerOver={e => this.setHover(true)}
                onPointerOut={e => this.setHover(false)}>
                <sphereGeometry attach="geometry" args={[1, 16, 16]} />
                <meshStandardMaterial
                    attach="material"
                    color={this.state.hovered ? 'hotpink' : 'orange'}
                    transparent
                    roughness={0.1}
                    metalness={0.1}
                />
            </mesh>
        )
    }
}