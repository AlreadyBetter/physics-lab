import React, { Component } from 'react'
import { Container, Table, FormControl, Col, Row, Button, Form, Card } from 'react-bootstrap'
import { ArrowRight } from 'react-bootstrap-icons';

import emptyBaker from '../../assets/lab/empty_baker.png'
import fullBaker from '../../assets/lab/fullBaker.png'
import glassWithWater from '../../assets/lab/glassWithWater.png'
import barelyEmptyGlass from '../../assets/lab/barelyEmptyGlass.png'

import { generalKz } from '../../recources/labData'

export default class MeasuringWater extends Component {

    state = {
        glass: glassWithWater,
        baker: emptyBaker
    }

    pourWater = () => {
        this.setState({
            glass: barelyEmptyGlass,
            baker: fullBaker
        });
    }
    render() {
        return (
            <Container >
                <Row className="mt-3">
                    <h4 className="text-center">{this.props.labData.task1.title}</h4>
                </Row>
                <Row className="mt-3">
                    <h5><b>{generalKz.progress}</b>:</h5>
                </Row>
                <Row className="mt-3">
                    <Col md="3">
                        <img className="w-75" src={emptyBaker} />
                    </Col>
                    <Col md="9">
                        <h5>{this.props.labData.task1.progress[1]}</h5>
                        <h5>{this.props.labData.task1.progress[2]}</h5>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <h5>{this.props.labData.task1.progress[3]}</h5>
                    <Row className="text-center">
                        <Col md="5" className="my-auto ">
                            <img className="w-50" src={this.state.glass} />
                        </Col>
                        <Col className="m-auto">
                            <Button variant="warning" size="lg" onClick={this.pourWater} className="text-center"><ArrowRight /></Button>
                        </Col>
                        <Col md="5">
                            <img className="w-50" src={this.state.baker} />
                        </Col>
                    </Row>
                </Row>
                <Row className="mt-3">
                    <h5>{this.props.labData.task1.progress[4]}</h5>
                    <Table striped bordered hover className="text-center">
                        <thead>
                            <tr>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[1] }}></th>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[2] }}></th>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[3] }}></th>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[4] }}></th>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[5] }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <FormControl type="text" />
                                </td>
                                <td>
                                    <FormControl type="text" />
                                </td>
                                <td>
                                    <FormControl type="text" />
                                </td>
                                <td>
                                    <FormControl type="text" />
                                </td>
                                <td>
                                    <FormControl type="text" />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
                <Row className="mb-3">
                    <Card bg="light">
                        <Card.Body dangerouslySetInnerHTML={{ __html: this.props.labData.task1.note }}></Card.Body>
                    </Card>
                </Row>
            </Container>
        )
    }
}
