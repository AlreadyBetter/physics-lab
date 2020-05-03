import React, { Component } from 'react'
import { Container, Table, FormControl, Col, Row, Button } from 'react-bootstrap'
import { ArrowDown, ArrowRight } from 'react-bootstrap-icons';

import { generalKz } from '../../recources/labData'

import beamScale from '../../assets/lab3/beamScale.png'
import beamScaleFlask from '../../assets/lab3/beamScaleFlask.png'
import beamScaleFlaskWater from '../../assets/lab3/beamScaleFlaskWater.png'
import flask from '../../assets/lab3/flask.png'
import flaskWater from '../../assets/lab3/flaskWater.png'

import emptyBaker from '../../assets/lab/empty_baker.png'
import fullBaker from '../../assets/lab/fullBaker.png'
import glassWithWater from '../../assets/lab/glassWithWater.png'
import barelyEmptyGlass from '../../assets/lab/barelyEmptyGlass.png'



export default class MeasuringDensityOfLiquid extends Component {

    state = {
        measureFlaskWeightButton: false,
        beamScale1: beamScale,
        beamScale2: beamScale,
        glass: glassWithWater,
        baker1: emptyBaker,
        baker2: emptyBaker,
        pourWaterButton: true,
        pourWaterInFlaskButton: true,
        flask: flask,
        measureWaterWeightButton: true
    }

    measureFlaskWeight = () => {
        this.setState({
            beamScale1: beamScaleFlask,
            measureFlaskWeightButton: true,
            pourWaterButton: false
        });
    }

    pourWater = () => {
        this.setState({
            glass: barelyEmptyGlass,
            baker1: fullBaker,
            baker2: fullBaker,
            pourWaterButton: true,
            pourWaterInFlaskButton: false
        });
    }

    pourWaterInFlask = () => {
        this.setState({
            baker2: emptyBaker,
            flask: flaskWater,
            pourWaterInFlaskButton: true,
            measureWaterWeightButton: false,
            beamScale2: beamScale,
            beamScale1: ''
        })
    }

    measureWaterWeight = () => {
        this.setState({
            beamScale2: beamScaleFlaskWater,
            measureWaterWeightButton: true
        });
    }

    render() {
        return (
            <Container>
                <Row className="mt-3">
                    <h4 className="text-center">{this.props.labData.task2.title}</h4>
                </Row>
                <Row className="mt-3">
                    <h5><b>{generalKz.progress}</b>:</h5>
                </Row>

                {/* Measure flask weight*/}
                <Row className="mt-3">
                    <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task2.progress[1] }}></h5>
                </Row>
                <Row className="mt-3 text-center">
                    <Col sm="6">
                        <img alt="flask" className="img-fluid w-25" src={flask} />
                    </Col>
                    <Col sm="6" className="text-center mt-3">
                        <Button
                            variant="warning"
                            size="lg"
                            disabled={this.state.measureFlaskWeightButton}
                            onClick={this.measureFlaskWeight}
                        >
                            <ArrowDown />
                        </Button>
                    </Col>
                </Row>
                <Row className="mt-5">
                    {this.state.beamScale1 && <img className="w-75 m-auto" alt="beamScale1" src={this.state.beamScale1} />}
                </Row>

                {/* Measure water volume */}
                <Row className="mt-5 text-center">
                    <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task2.progress[2] }}></h5>
                    <Col md="5" className="my-auto ">
                        <img className="w-50" alt="glass" src={this.state.glass} />
                    </Col>
                    <Col className="m-auto">
                        <Button variant="warning" size="lg" onClick={this.pourWater} disabled={this.state.pourWaterButton} className="text-center"><ArrowRight /></Button>
                    </Col>
                    <Col md="5">
                        <img className="w-50 m-auto" alt="baker1" src={this.state.baker1} />
                    </Col>
                </Row>

                {/* Measure water weight */}
                <Row className="mt-5 text-center">
                    <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task2.progress[3] }}></h5>
                    <Col md="5" className="my-auto ">
                        <img className="w-50" alt="baker2" src={this.state.baker2} />
                    </Col>
                    <Col className="m-auto">
                        <Button
                            variant="warning"
                            size="lg"
                            onClick={this.pourWaterInFlask}
                            disabled={this.state.pourWaterInFlaskButton}
                            className="text-center"
                        ><ArrowRight />
                        </Button>
                    </Col>
                    <Col md="5" className="text-center m-auto">
                        <img className="w-75 m-auto" alt="flask" src={this.state.flask} />
                    </Col>
                </Row>
                <Row className="mt-3 text-center">
                    <Col sm="12" className="text-center mt-3">
                        <Button
                            variant="warning"
                            size="lg"
                            disabled={this.state.measureWaterWeightButton}
                            onClick={this.measureWaterWeight}
                        >
                            <ArrowDown />
                        </Button>
                    </Col>
                </Row>
                <Row className="mt-5">
                    {this.state.beamScale2 && <img className="w-75 m-auto" alt="beamScale2" src={this.state.beamScale2} />}
                </Row>

                {/* Calculate density and fill table */}
                <Row className="mt-5">
                    <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task2.progress[4] }}></h5>
                    <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task2.progress[5] }}></h5>
                    <h5>{this.props.labData.task2.progress[6]}</h5>
                    <Table striped bordered hover className="text-center">
                        <thead>
                            <tr>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task2.table[1] }}></th>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task2.table[2] }}></th>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task2.table[3] }}></th>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task2.table[4] }}></th>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task2.table[5] }}></th>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task2.table[6] }}></th>
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
                                <td>
                                    <FormControl type="text" />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        )
    }
}