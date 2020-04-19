import React, { Component } from 'react'
import { Container, Table, FormControl, Col, Row, Button } from 'react-bootstrap'
import { ArrowDown, ArrowRight } from 'react-bootstrap-icons';

import SolidDensityTable from '../../components/SolidDensityTable'

import { labTextKz } from '../../recources/labData'

import beamScale from '../../assets/lab3/beamScale.png'
import measureBrass from '../../assets/lab3/measureBrass.png'
import measureAluminum from '../../assets/lab3/measureAluminum.png'
import measureSteel from '../../assets/lab3/measureSteel.png'

import brass from '../../assets/lab/brass.png'
import steel from '../../assets/lab/steel.png'
import aluminum from '../../assets/lab/aluminum.png'
import string from '../../assets/lab/string.png'

import brassWithString from '../../assets/lab/brassWithString.png'
import steelWithString from '../../assets/lab/steelWithString.png'
import aluminumWithString from '../../assets/lab/aluminumWithString.png'

import brassInBaker from '../../assets/lab/brassInbaker.png'
import steelInBaker from '../../assets/lab/steelInbaker.png'
import aluminumInbaker from '../../assets/lab/aluminumInbaker.png'

import emptyBaker from '../../assets/lab/empty_baker.png'
import fullBaker from '../../assets/lab/fullBaker.png'
import glassWithWater from '../../assets/lab/glassWithWater.png'
import barelyEmptyGlass from '../../assets/lab/barelyEmptyGlass.png'

export default class MeasuringDensityOfSolid extends Component {

    state = {
        beamScale1: beamScale,
        beamScale2: '',
        glass: glassWithWater,
        baker1: emptyBaker,
        baker2: emptyBaker,
        brass: brass,
        steel: steel,
        aluminum: aluminum,
        measureBrassWeightButton: false,
        measureAluminumWeightButton: false,
        measureSteelWeightButton: false,
        brassButton: true,
        steelButton: true,
        aluminumButton: true,
        bindAlloysButton: true,
        pourWaterButton: true
    }

    measureBrassWeight = () => {
        this.setState({
            beamScale1: '',
            beamScale2: measureBrass,
        });
    }

    measureSteelWeight = () => {
        this.setState({
            beamScale1: '',
            beamScale2: measureSteel
        });
    }

    measureAluminumWeight = () => {
        this.setState({
            beamScale1: '',
            beamScale2: measureAluminum,
            pourWaterButton: false
        });
    }

    measureBrass = () => {
        this.setState({
            baker2: brassInBaker
        });
    }

    measureSteel = () => {
        this.setState({
            baker2: steelInBaker
        });
    }

    measureAluminum = () => {
        this.setState({
            baker2: aluminumInbaker,
            bindToolsButton: false
        });
    }

    bindAlloys = () => {
        this.setState({
            brass: brassWithString,
            steel: steelWithString,
            aluminum: aluminumWithString,
            brassButton: false,
            steelButton: false,
            aluminumButton: false,
            bindAlloysButton: true
        });
    }

    pourWater = () => {
        this.setState({
            measureBrassWeightButton: true,
            measureAluminumWeightButton: true,
            measureSteelWeightButton: true,
            bindAlloysButton: false,
            glass: barelyEmptyGlass,
            baker1: fullBaker,
            baker2: fullBaker,
            pourWaterButton: true
        });
    }

    render() {
        return (
            <Container >
                <Row className="mt-3">
                    <h4 className="text-center">{this.props.labData.task1.title}</h4>
                </Row>
                <Row className="mt-3">
                    <h5><b>{labTextKz.progress}</b>:</h5>
                </Row>
                <Row className="mt-3">
                    <h5>{this.props.labData.task1.progress[1]}</h5>
                </Row>
                <Row className="mt-3">
                    <img className="w-75 m-auto" src={this.state.beamScale1} />
                </Row>

                {/* Measure cylinders */}
                <Row>
                    <Col className="my-3">
                        <h5 className="mt-3">{this.props.labData.task1.progress[2]}</h5>
                        <Row className="text-center">
                            <Col sm={4}>
                                <img className="img-fluid w-50" src={brass} />
                            </Col>
                            <Col sm={4}>
                                <img className="img-fluid w-50" src={steel} />
                            </Col>
                            <Col sm={4}>
                                <img className="img-fluid w-50" src={aluminum} />
                            </Col>
                        </Row>
                        <Row className="text-center mt-3">
                            <Col sm={4}>
                                <Button
                                    variant="warning"
                                    size="lg"
                                    disabled={this.state.measureBrassWeightButton}
                                    onClick={this.measureBrassWeight}
                                >
                                    <ArrowDown />
                                </Button>
                            </Col>
                            <Col sm={4}>
                                <Button
                                    variant="warning"
                                    size="lg"
                                    disabled={this.state.measureSteelWeightButton}
                                    onClick={this.measureSteelWeight}
                                >
                                    <ArrowDown />
                                </Button>
                            </Col>
                            <Col sm={4}>
                                <Button
                                    variant="warning"
                                    size="lg"
                                    disabled={this.state.measureAluminumWeightButton}
                                    onClick={this.measureAluminumWeight}
                                >
                                    <ArrowDown />
                                </Button>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <img className="w-75 m-auto" src={this.state.beamScale2} />
                        </Row>
                    </Col>
                </Row>

                {/* Fill measuring */}
                <h5>{this.props.labData.task1.progress[3]}</h5>
                <Row className="mt-3">
                    <img className="w-25 m-auto" src={emptyBaker} />
                </Row>
                <Row className="mt-3 text-center">
                    <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task1.progress[4] }}></h5>
                    <Col md="5" className="my-auto ">
                        <img className="w-50" src={this.state.glass} />
                    </Col>
                    <Col className="m-auto">
                        <Button variant="warning" size="lg" onClick={this.pourWater} disabled={this.state.pourWaterButton} className="text-center"><ArrowRight /></Button>
                    </Col>
                    <Col md="5">
                        <img className="w-50 m-auto" src={this.state.baker1} />
                    </Col>
                </Row>

                {/* Measure cylinders */}
                <Row >
                    <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task1.progress[5] }}></h5>
                    <Col md="3" className="m-auto">
                        <img className="w-100" src={string} />
                    </Col>
                    <Col className="m-auto" md="1">
                        <Button variant="warning" size="sm" onClick={this.bindAlloys} className="text-center" disabled={this.state.bindAlloysButton}><ArrowRight /></Button>
                    </Col>
                    <Col md="3" className="m-auto ">
                        <Row >
                            <img className="w-50 m-auto" src={this.state.brass} />
                        </Row>
                        <Row className="mt-2">
                            <img className="w-50 m-auto" src={this.state.steel} />
                        </Row>
                        <Row className="mt-2">
                            <img className="w-50 m-auto" src={this.state.aluminum} />
                        </Row>
                    </Col>
                    <Col className="wrap" md="1">
                        <Button variant="warning" size="sm" onClick={this.measureBrass} disabled={this.state.brassButton}><ArrowRight /></Button>
                        <Button variant="warning" size="sm" onClick={this.measureSteel} disabled={this.state.steelButton}><ArrowRight /></Button>
                        <Button variant="warning" size="sm" onClick={this.measureAluminum} disabled={this.state.aluminumButton}><ArrowRight /></Button>
                    </Col>
                    <Col md="4" className="m-auto " >
                        <img className="w-75" src={this.state.baker2} />
                    </Col>
                    <h5 className="mt-3" dangerouslySetInnerHTML={{ __html: this.props.labData.task1.progress[6] }}></h5>
                    <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task1.progress[7] }}></h5>
                    <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task1.progress[8] }}></h5>
                    <SolidDensityTable/>
                </Row>

                {/* Fill table */}
                <Row >
                    <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task1.progress[9] }}></h5>
                    <Table striped bordered hover className="text-center">
                        <thead>
                            <tr>
                                <th rowSpan="2" dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[1] }}></th>
                                <th colSpan="3" dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[2] }}></th>
                                <th rowSpan="2" dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[3] }}></th>
                                <th rowSpan="2" dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[4] }}></th>
                            </tr>
                            <tr>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[22] }}></th>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[23] }}></th>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[24] }}></th>
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
                <Row className="my-3">
                    <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task1.progress[10] }}></h5>
                </Row>
            </Container>
        )
    }
}
