import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

import { labTextKz } from '../recources/labData'

export default class LabDescription extends Component {
    render() {
        return (
            <Container>
                <h3 className="text-center">{this.props.labData.title}</h3>
                <br />
                <h5><b>{labTextKz.goals}</b>: {this.props.labData.goals}</h5>
                <h5><b>{labTextKz.tools}</b>: {this.props.labData.tools}</h5>
            </Container>
        )
    }
}
