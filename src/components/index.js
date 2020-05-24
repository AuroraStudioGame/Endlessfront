import React from 'react';
import init from './Init';

export default class WebGL extends React.Component {

    componentDidMount(){
        init('webgl');
    }

    render(){
        return <canvas id="webgl" width={window.innerWidth} height={window.innerHeight} style={{ border: '1px solid black'}}></canvas>
    }
}