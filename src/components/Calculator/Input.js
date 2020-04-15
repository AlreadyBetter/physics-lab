import React, { Component } from 'react'
import '../../styles/Calculator.css'


export default class Input extends Component {
    render() {
        return (
            <div className="input">
                {this.props.children}
            </div>
        )
    }
}
