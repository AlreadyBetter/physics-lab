import React, { Component } from 'react'
import { Container, Table, FormControl, Col, Row, Button, Form, Card } from 'react-bootstrap'
import { ArrowDown } from 'react-bootstrap-icons';

import screw from '../../assets/lab2/blackScrew.png'
import bolt from '../../assets/lab2/bolt2.png'
import anotherBolt from '../../assets/lab2/anotherBolt.png'
import nut from '../../assets/lab2/nut2.png'

import ruler from '../../assets/lab2/ruler.png'
import rulerWithScrew from '../../assets/lab2/rulerWithScrew.png'
import rulerWithAnotherBolt from '../../assets/lab2/rulerWithAnotherBolt.png'
import rulerWithBolt from '../../assets/lab2/rulerWithBolt.png'
import rulerWithNut from '../../assets/lab2/rulerWithNut.png'

import { generalKz } from '../../recources/labData'

export default class MeasureScrewStep extends Component {

    state = {
        ruler1: ruler,
        ruler2: "",
        measureBoltButton: false,
        measureScrewButton: true,
        measureAnotherBoltButton: true,
        measureNutButton: true,
    }

    measureBolt = () => {
        this.setState({
            measureBoltButton: true,
            measureScrewButton: false,
            measureAnotherBoltButton: false,
            measureNutButton: false,
            ruler1: rulerWithBolt,
        });
    }

    measureAnotherBolt = () => {
        this.setState({
            ruler1: "",
            ruler2: rulerWithAnotherBolt
        });
    }

    measureScrew = () => {
        this.setState({
            ruler1: "",
            ruler2: rulerWithScrew
        });
    }

    measureNut = () => {
        this.setState({
            ruler1: "",
            ruler2: rulerWithNut
        });
    }

    render() {
        return (
            <Container>
                <Row className="mt-3">
                    <h4 className="text-center">{this.props.labData.task3.title}</h4>
                </Row>
                <Row className="mt-3">
                    <h5><b>{generalKz.progress}</b>:</h5>
                </Row>

                {/* Measure bolt step */}
                <Row>
                    <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task3.progress[1] }}></h5>
                    <Row className="text-center m-auto">
                        <img className="w-50" src={bolt} />
                    </Row>
                    <Row className="text-center m-auto">
                        <Button
                            variant="warning"
                            size="lg"
                            onClick={this.measureBolt}
                            disabled={this.state.measureBoltButton}
                        >
                            <ArrowDown />
                        </Button>
                    </Row>
                    <Row className="mt-3">
                        <img className="img-fluid" src={this.state.ruler1} />
                    </Row>
                </Row>

                {/* Measure of another bolt, scew and nut step */}
                <Row>
                    <Col className="mt-3">
                        <h5 className="mt-3">{this.props.labData.task3.progress[2]}</h5>
                        <Row className="text-center">
                            <Col sm={4}>
                                <img className="img-fluid" src={anotherBolt} />
                            </Col>
                            <Col sm={4}>
                                <img className="img-fluid" src={screw} />
                            </Col>
                            <Col sm={4}>
                                <img className="img-fluid" src={nut} />
                            </Col>
                        </Row>
                        <Row className="text-center mt-3">
                            <Col sm={4}>
                                <Button
                                    variant="warning"
                                    size="lg"
                                    disabled={this.state.measureAnotherBoltButton}
                                    onClick={this.measureAnotherBolt}
                                >
                                    <ArrowDown />
                                </Button>
                            </Col>
                            <Col sm={4}>
                                <Button
                                    variant="warning"
                                    size="lg"
                                    disabled={this.state.measureScrewButton}
                                    onClick={this.measureScrew}
                                >
                                    <ArrowDown />
                                </Button>
                            </Col>
                            <Col sm={4}>
                                <Button
                                    variant="warning"
                                    size="lg"
                                    disabled={this.state.measureNutButton}
                                    onClick={this.measureNut}
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

                {/* Fill table */}
                <Row className="mt-3">
                    <h5>{this.props.labData.task3.progress[3]}</h5>
                    <Table striped bordered hover className="text-center">
                        <thead>
                            <tr>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task3.table[1] }}></th>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task3.table[2] }}></th>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task3.table[3] }}></th>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task3.table[4] }}></th>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task3.table[5] }}></th>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task3.table[6] }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td dangerouslySetInnerHTML={{ __html: this.props.labData.task3.table[11] }}></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>

                            </tr>
                            <tr>
                                <td dangerouslySetInnerHTML={{ __html: this.props.labData.task3.table[12] }}></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                            </tr>
                            <tr>
                                <td dangerouslySetInnerHTML={{ __html: this.props.labData.task3.table[13] }}></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
                <h5 className="my-3">{this.props.labData.task3.progress[4]}</h5>
            </Container>
        )
    }
}
