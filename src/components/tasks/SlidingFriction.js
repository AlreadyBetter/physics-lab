import React, { Component } from 'react'
import { Container, Table, FormControl, Col, Row, Button, Card } from 'react-bootstrap'

import { generalKz } from '../../recources/labData'

export default class SlidingFriction extends Component {

    state = {

    }

    render() {
        return (
            <Container>
                <Row className="mt-3">
                    <h4 className="text-center">{this.props.labData.task.title}</h4>
                </Row>
                <Row className="mt-3">
                    <h5><b>{generalKz.progress}</b>:</h5>
                </Row>
                <Row className="mt-3">
                    
                </Row>
            </Container>
        )
    }
}
