import * as THREE from 'three'
import React, {useRef} from 'react'
import { Canvas, extend, useThree } from 'react-three-fiber'


extend({ OrbitControls })
export default class Cube extends React.Component {

    componentDidMount(){
        
    }
    render(){
        return (
            <mesh visible
                userData={{ primitive: 'cube' }}
                position={new THREE.Vector3(1, 2, 3)}
                geometry={new THREE.BoxGeometry(1, 5, 5)}
                material={new THREE.MeshBasicMaterial({ color: new THREE.color('indianred'), transparent: true })}/>
        )
    }
}