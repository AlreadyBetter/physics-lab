import React, { Component } from 'react'
import { Container, Table, FormControl, Col, Row, Button } from 'react-bootstrap'
import { ArrowRight } from 'react-bootstrap-icons';

import '../../styles/styles.css'

import emptyBaker from '../../assets/lab/empty_baker.png'
import fullBaker from '../../assets/lab/fullBaker.png'
import glassWithWater from '../../assets/lab/glassWithWater.png'
import barelyEmptyGlass from '../../assets/lab/barelyEmptyGlass.png'
import brass from '../../assets/lab/brass.png'
import steel from '../../assets/lab/steel.png'
import aluminum from '../../assets/lab/aluminum.png'
import wood from '../../assets/lab/wood.png'
import screw from '../../assets/lab/screw.png'
import nut from '../../assets/lab/nut.png'
import string from '../../assets/lab/string.png'

import brassWithString from '../../assets/lab/brassWithString.png'
import steelWithString from '../../assets/lab/steelWithString.png'
import aluminumWithString from '../../assets/lab/aluminumWithString.png'
import woodWithString from '../../assets/lab/woodWithString.png'
import screwWithString from '../../assets/lab/screwWithString.png'
import nutWithString from '../../assets/lab/nutWithString.png'

import brassInBaker from '../../assets/lab/brassInbaker.png'
import steelInBaker from '../../assets/lab/steelInbaker.png'
import aluminumInbaker from '../../assets/lab/aluminumInbaker.png'
import woodInbaker from '../../assets/lab/woodInbaker.png'
import screwInbaker from '../../assets/lab/screwInBaker.png'
import nutInbaker from '../../assets/lab/nutInBaker.png'

import { generalKz } from '../../recources/labData'

export default class MeasuringSmallThings extends Component {

    state = {
        glass: glassWithWater,
        baker: emptyBaker,
        pourWaterButton: false,
        brass: brass, //латунь
        brassButton: true,
        steel: steel,
        steelButton: true,
        aluminum: aluminum,
        aluminumButton: true,
        wood: wood,
        woodButton: true,
        screw: screw, //шуруп
        screwButton: true,
        nut: nut, //гайка
        nutButton: true,
        string: string, //нить
        bindAlloysButton: true,
        bindToolsButton: true,
        bindWoodButton: true
    }

    pourWater = () => {
        this.setState({
            glass: barelyEmptyGlass,
            baker: fullBaker,
            pourWaterButton: true,
            bindAlloysButton: false
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

    measureBrass = () => {
        this.setState({
            baker: brassInBaker
        });
    }

    measureSteel = () => {
        this.setState({
            baker: steelInBaker
        });
    }

    measureAluminum = () => {
        this.setState({
            baker: aluminumInbaker,
            bindToolsButton: false
        });
    }

    bindTools = () => {
        this.setState({
            screw: screwWithString,
            nut: nutWithString,
            bindToolsButton: true,
            screwButton: false,
            nutButton: false
        });
    }

    measureScrew = () => {
        this.setState({
            baker: screwInbaker,
        });
    }

    measureNut = () => {
        this.setState({
            baker: nutInbaker,
            bindWoodButton: false
        });
    }

    bindWood = () => {
        this.setState({
            wood: woodWithString,
            screwButton: true,
            nutButton: true,
            woodButton: false,
            bindWoodButton: true
        });
    }

    measureWood = () => {
        this.setState({
            baker: woodInbaker,
        });
    }

    render() {
        return (
            <Container >
                <Row className="mt-3">
                    <h4 className="text-center">{this.props.labData.task2.title}</h4>
                </Row>
                <Row className="mt-3">
                    <h5><b>{generalKz.progress}</b>:</h5>
                </Row>

                {/* Just add water */}
                <Row className="mt-3">
                    <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task2.progress[1] }}></h5>
                    <Row className="text-center">
                        <Col md="5" className="my-auto ">
                            <img className="w-50" src={this.state.glass} />
                        </Col>
                        <Col className="m-auto">
                            <Button
                                variant="warning"
                                size="lg"
                                onClick={this.pourWater}
                                disabled={this.state.pourWaterButton}
                                className="text-center"
                            >
                                <ArrowRight />
                            </Button>
                        </Col>
                        <Col md="5">
                            <img className="w-50" src={this.state.baker} />
                        </Col>
                    </Row>
                </Row>

                {/* Measure alloys */}
                <Row >
                    <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task2.progress[2] }}></h5>
                    <Col md="3" className="m-auto">
                        <img className="w-100" src={this.state.string} />
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
                        <img className="w-75" src={this.state.baker} />
                    </Col>
                    <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task2.progress[3] }}></h5>
                </Row>

                {/* Measure tools */}
                <Row className="mt-3">
                    <h5>{this.props.labData.task2.progress[4]}</h5>
                    <Col md="3" className="m-auto">
                        <img className="w-100" src={this.state.string} />
                    </Col>
                    <Col className="m-auto" md="1">
                        <Button variant="warning" size="sm" onClick={this.bindTools} className="text-center" disabled={this.state.bindToolsButton}><ArrowRight /></Button>
                    </Col>
                    <Col md="3" className=" wrap">
                        <Row className="mt-2">
                            <img className="w-50 m-auto" src={this.state.screw} />
                        </Row>
                        <Row className="mt-2">
                            <img className="w-50 m-auto" src={this.state.nut} />
                        </Row>
                    </Col>
                    <Col className="wrap" md="1">
                        <Button variant="warning" size="sm" onClick={this.measureScrew} disabled={this.state.screwButton}><ArrowRight /></Button>
                        <Button variant="warning" size="sm" onClick={this.measureNut} disabled={this.state.nutButton}><ArrowRight /></Button>
                    </Col>
                    <Col md="4" className="m-auto " >
                        <img className="w-75" src={this.state.baker} />
                    </Col>
                </Row>

                {/* Measure wood */}
                <Row className="mt-3">
                    <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task2.progress[5] }}></h5>
                    <Col md="3" className="m-auto">
                        <img className="w-100" src={this.state.string} />
                    </Col>
                    <Col className="m-auto" md="1">
                        <Button variant="warning" size="sm" onClick={this.bindWood} className="text-center" disabled={this.state.bindWoodButton}><ArrowRight /></Button>
                    </Col>
                    <Col md="3" className="wrap">
                        <img className="w-50 m-auto" src={this.state.wood} />
                    </Col>
                    <Col className="wrap" md="1">
                        <Button variant="warning" size="sm" onClick={this.measureWood} disabled={this.state.woodButton}><ArrowRight /></Button>
                    </Col>
                    <Col md="4" className="m-auto " >
                        <img className="w-75" src={this.state.baker} />
                    </Col>
                    <h5>{this.props.labData.task2.progress[6]}</h5>
                </Row>

                {/* Fill table */}
                <Row className="mt-3">
                    <h5>{this.props.labData.task2.progress[7]}</h5>
                    <Table striped bordered hover className="text-center">
                        <thead>
                            <tr>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task2.table[1] }}></th>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task2.table[2] }}></th>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task2.table[3] }}></th>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task2.table[4] }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td dangerouslySetInnerHTML={{ __html: this.props.labData.task2.table[11] }}></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                            </tr>
                            <tr>
                                <td dangerouslySetInnerHTML={{ __html: this.props.labData.task2.table[12] }}></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                            </tr>
                            <tr>
                                <td dangerouslySetInnerHTML={{ __html: this.props.labData.task2.table[13] }}></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                            </tr>
                            <tr>
                                <td dangerouslySetInnerHTML={{ __html: this.props.labData.task2.table[14] }}></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                            </tr>
                            <tr>
                                <td dangerouslySetInnerHTML={{ __html: this.props.labData.task2.table[15] }}></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                            </tr>
                            <tr>
                                <td dangerouslySetInnerHTML={{ __html: this.props.labData.task2.table[16] }}></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
                <Row className="mb-3">
                    <h5>{this.props.labData.task2.progress[8]}</h5>
                </Row>
                {/* <Row className="mb-3">
                    <Form.Group className="m-auto" controlId="formBasicFinishButton" >
                        <Button variant="success" >{generalKz.finish}</Button>
                    </Form.Group>
                </Row> */}
            </Container>
        )
    }
}
