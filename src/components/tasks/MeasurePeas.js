import React, { Component } from 'react'
import { Container, Table, FormControl, Col, Row, Button } from 'react-bootstrap'
import { ArrowDown } from 'react-bootstrap-icons';

import '../../styles/styles.css'

import ruler from '../../assets/lab2/ruler.png'
import peas from '../../assets/lab2/peas.png'
import millets from '../../assets/lab2/millets.png'
import shots from '../../assets/lab2/shots.png'
import ruler16peas from '../../assets/lab2/ruler16peas.png'
import ruler27peas from '../../assets/lab2/ruler27peas.png'
import ruler12millets from '../../assets/lab2/ruler12millets.png'
import ruler13shots from '../../assets/lab2/ruler13shots.png'
import pencil from '../../assets/lab2/pencil.png'
import pencilWithString from '../../assets/lab2/pencilWithString.png'
import rulerWithPencil from '../../assets/lab2/rulerWithPencil.png'
import string from '../../assets/lab/string.png'

import { generalKz } from '../../recources/labData'

export default class MeasurePeas extends Component {

    state = {
        peas: peas,
        ruler1: ruler,
        ruler2: "",
        ruler3: "",
        ruler4: "",
        measurePeasButton: false,
        measureMorePeasButton: true,
        peasLenght: "",
        peasCount: "",
        peaDiameter: "",
        millets: millets,
        shots: shots,
        measureShotsButton: true,
        measureMilletsButton: true,
        pencil: pencil,
        string: string,
        bindPencilButton: true,
        measureStringButton: true
    }

    measurePeas = () => {
        this.setState({
            ruler1: ruler16peas,
            measurePeasButton: true,
            measureMorePeasButton: false,
        });
    }

    measureMorePeas = () => {
        this.setState({
            ruler1: "",
            ruler2: ruler27peas,
            measureMorePeasButton: true,
            measureShotsButton: false,
            measureMilletsButton: false
        });
    }

    measureShots = () => {
        this.setState({
            ruler2: "",
            ruler3: ruler13shots
        });
    }

    measureMillets = () => {
        this.setState({
            ruler2: "",
            ruler3: ruler12millets,
            bindPencilButton: false
        });
    }

    bindPencil = () => {
        this.setState({
            pencil: pencilWithString,
            bindPencilButton: true,
            measureStringButton: false
        });
    }

    measureString = () => {
        this.setState({
            pencil: "",
            ruler4: rulerWithPencil,
            measureStringButton: true
        });
    }

    render() {
        return (
            <Container>
                <Col>
                    <Row className="mt-3">
                        <h4 className="text-center">{this.props.labData.task1.title}</h4>
                    </Row>
                    <Row className="mt-3">
                        <h5><b>{generalKz.progress}</b>:</h5>
                    </Row>

                    {/* Measure peas */}
                    <Row>
                        <h5>{this.props.labData.task1.progress[1]}</h5>
                        <Row className="text-center m-auto">
                            <img src={this.state.peas} />
                        </Row>
                        <Row className="text-center m-auto">
                            <Button
                                variant="warning"
                                size="lg"
                                onClick={this.measurePeas}
                                disabled={this.state.measurePeasButton}
                            >
                                <ArrowDown />
                            </Button>
                        </Row>
                        <Row className="mt-3">
                            <img className="img-fluid" src={this.state.ruler1} />
                        </Row>
                    </Row>

                    {/* Measure more peas */}
                    <Row className="mt-3">
                        <Col>
                            <h5>{this.props.labData.task1.progress[2]}</h5>
                            <Row className="text-center mt-3">
                                <Col sm={6}>
                                    <img src={this.state.peas} />
                                </Col>
                                <Col sm={6}>
                                    <Button
                                        variant="warning"
                                        size="lg"
                                        onClick={this.measureMorePeas}
                                        disabled={this.state.measureMorePeasButton}
                                    >
                                        <ArrowDown />
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <img className="img-fluid" src={this.state.ruler2} />
                            </Row>
                        </Col>
                    </Row>

                    {/* Measure shots and millets*/}
                    <Row>
                        <Col className="mt-3">
                            <h5 className="mt-3">{this.props.labData.task1.progress[3]}</h5>
                            <Row className="text-center">
                                <Col sm={6}>
                                    <img src={this.state.shots} />
                                </Col>
                                <Col sm={6}>
                                    <img src={this.state.millets} />
                                </Col>
                            </Row>
                            <Row className="text-center mt-3">
                                <Col sm={6}>
                                    <Button
                                        variant="warning"
                                        size="lg"
                                        onClick={this.measureShots}
                                        disabled={this.state.measureShotsButton}
                                    >
                                        <ArrowDown />
                                    </Button>
                                </Col>
                                <Col sm={6}>
                                    <Button
                                        variant="warning"
                                        size="lg"
                                        onClick={this.measureMillets}
                                        disabled={this.state.measureMilletsButton}
                                    >
                                        <ArrowDown />
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <img className="img-fluid" src={this.state.ruler3} />
                            </Row>
                        </Col>
                    </Row>

                    {/* Measure string */}
                    <Row>
                        <Col >
                            <h5>{this.props.labData.task1.progress[4]}</h5>
                            <Row className="text-center m-auto">
                                <Col sm={6} className="mt-3">
                                    <img src={this.state.string} />
                                </Col>
                                <Col sm={6} className="m-auto text-center">
                                    <Button
                                        variant="warning"
                                        size="lg"
                                        onClick={this.bindPencil}
                                        disabled={this.state.bindPencilButton}
                                    >
                                        <ArrowDown />
                                    </Button>
                                </Col>
                                <Col sm={12} className="mt-3">
                                    <img className="img-fluid" src={this.state.pencil} />
                                </Col>
                            </Row>
                            <Row className="text-center mt-3">
                                <Col sm={12}>
                                    <Button
                                        variant="warning"
                                        size="lg"
                                        onClick={this.measureString}
                                        disabled={this.state.measureStringButton}
                                    >
                                        <ArrowDown />
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <img className="img-fluid" src={this.state.ruler4} />
                            </Row>
                        </Col>
                    </Row>

                    {/* Fill table */}
                    <Row className="mt-3">
                        <h5>{this.props.labData.task1.progress[5]}</h5>
                        <Table striped bordered hover className="text-center">
                            <thead >
                                <tr>
                                    <th dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[1] }}></th>
                                    <th dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[2] }}></th>
                                    <th dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[3] }}></th>
                                    <th dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[4] }}></th>
                                    <th dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[5] }}></th>
                                    <th dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[6] }}></th>
                                    <th dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[7] }}></th>
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
                                    <td>
                                        <FormControl type="text" />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>

                </Col>

            </Container>
        )
    }
}
