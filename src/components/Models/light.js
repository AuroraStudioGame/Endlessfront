import * as THREE from 'three'
import React, {useRef} from 'react'
import { Canvas, extend, useThree } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


extend({ OrbitControls })
export default class Light extends React.Component {
    constructor() {
        super();
        this.state = {
            color: 'white',
            brightness: 10
        }
    }
    componentDidMount(){
        if(this.props.color) {
            this.setState({ color: this.props.color })
        }
        if(this.props.brightness) {
            this.setState({ brightness: this.props.brightness })
        }
    }
    render(){
        return (
            <rectAreaLight
                width={3}
                height={3}
                color={this.state.color}
                intensity={this.state.brightness}
                position={[-2, 0, 5]}
                lookAt={[0, 0, 0]}
                penumbra={1}
                castShadow
            />
        )
    }
}