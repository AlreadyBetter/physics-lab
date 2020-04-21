import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

import { generalKz } from '../recources/labData'

export default class LabDescription extends Component {
    render() {
        return (
            <Container>
                <h3 className="text-center">{this.props.labData.title}</h3>
                <br />
                <h5><b>{generalKz.goals}</b>: {this.props.labData.goals}</h5>
                <h5><b>{generalKz.tools}</b>: {this.props.labData.tools.join(";\n")}</h5>
            </Container>
        )
    }
}
