import React, { Component } from 'react'
import { Container, Table, FormControl, Col, Row, Form, Button } from 'react-bootstrap'

import '../../styles/styles.css'
import { generalKz } from '../../recources/labData'

import ruler from '../../assets/lab2/ruler.png'
import board from '../../assets/lab10/board.png'
import boardMeasH from '../../assets/lab10/boardMeasH.png'
import boardMeasL from '../../assets/lab10/boardMeasL.png'

import wood from '../../assets/lab10/wood2.png'
import dynamometer from '../../assets/lab10/dynamometer.png'

import dynamometer01 from '../../assets/lab10/dynamometer0-1.png'
import dynamometer02 from '../../assets/lab10/dynamometer0-2.png'
import dynamometer03 from '../../assets/lab10/dynamometer0-3.png'
import dynamometer04 from '../../assets/lab10/dynamometer0-4.png'
import dynamometer05 from '../../assets/lab10/dynamometer0-5.png'
import dynamometer06 from '../../assets/lab10/dynamometer0-6.png'
import dynamometer07 from '../../assets/lab10/dynamometer0-7.png'
import dynamometer08 from '../../assets/lab10/dynamometer0-8.png'
import dynamometer09 from '../../assets/lab10/dynamometer0-9.png'
import dynamometer1 from '../../assets/lab10/dynamometer1.png'

export const woodFirstPos = 297;
export const woodEndPos = 85;
export const g = 9.8;
export const m = 0.48;

export default class SlopeECE extends Component {

    state = {
        board: board,
        wood: wood,
        dynamometer: dynamometer,
        forceGravity: 0,
        ruler: ruler,
        woodWithDynamometer: dynamometer01,
        woodPos: woodFirstPos,
        dynamometerValue: 0,
        woodLenght: 0.072,
        woodHeight: 0.04,
        mass: 0.1,
        dynamometerMaxValue: 0.9,
    }

    measureBoard = () => {
        if (this.state.board === board || this.state.board === boardMeasL) {
            this.setState({
                board: boardMeasH,
                ruler: ''
            });
        } else if (this.state.board === board || this.state.board === boardMeasH) {
            this.setState({
                board: boardMeasL,
                ruler: ''
            });
        }
    }

    measureWood = () => {
        this.calcForceGravity();
        this.setState({
            dynamometer: dynamometer1,
            wood: ''
        });
    }

    moveWood = (e) => {
        const dynamometerMaxValue = this.calcFt();
        this.setState({
            dynamometerMaxValue: dynamometerMaxValue
        })
        if (e.key === 'Shift' && this.state.woodPos > woodEndPos) {
            var newWoodPos = this.state.woodPos - 1;
            var newDynamometer;
            var dynamometerValue = this.state.dynamometerValue;

            if (newWoodPos > woodFirstPos) {
                newDynamometer = dynamometer01;
                dynamometerValue = (this.state.dynamometerMaxValue * 0.1).toFixed(2)
            }
            if (newWoodPos > woodFirstPos) {
                newDynamometer = dynamometer02;
                dynamometerValue = (this.state.dynamometerMaxValue * 0.2).toFixed(2)
            }
            else if (newWoodPos > woodFirstPos - 5) {
                newDynamometer = dynamometer03;
                dynamometerValue = (this.state.dynamometerMaxValue * 0.3).toFixed(2)
            }
            else if (newWoodPos > woodFirstPos - 10) {
                newDynamometer = dynamometer04;
                dynamometerValue = (this.state.dynamometerMaxValue * 0.4).toFixed(2)
            } else if (newWoodPos > woodFirstPos - 15) {
                newDynamometer = dynamometer05;
                dynamometerValue = (this.state.dynamometerMaxValue * 0.5).toFixed(2)
            }
            else if (newWoodPos > woodFirstPos - 20) {
                newDynamometer = dynamometer06;
                dynamometerValue = (this.state.dynamometerMaxValue * 0.6).toFixed(2)
            }
            else if (newWoodPos > woodFirstPos - 25) {
                newDynamometer = dynamometer07;
                dynamometerValue = (this.state.dynamometerMaxValue * 0.7).toFixed(2)
            }
            else if (newWoodPos > woodFirstPos - 30) {
                newDynamometer = dynamometer08;
                dynamometerValue = (this.state.dynamometerMaxValue * 0.8).toFixed(2)
            }
            else if (newWoodPos > woodEndPos) {
                newDynamometer = dynamometer09;
                dynamometerValue = this.state.dynamometerMaxValue
            }
            else {
                newDynamometer = dynamometer01;
                dynamometerValue = 0
            }

            this.setState({
                woodPos: newWoodPos,
                woodWithDynamometer: newDynamometer,
                dynamometerValue: dynamometerValue
            });
        }
    }

    calcFt = () => {
        var sin = this.state.woodHeight / this.state.woodLenght;
        var cos;
        if (sin > 1) {
            cos = this.state.woodLenght / this.state.woodHeight;
            sin = Math.sqrt(1 - cos * cos);
        } else {
            cos = Math.sqrt(1 - sin * sin);
        }
        var f = this.state.mass * g * (sin + m * cos);
        return f.toFixed(2);
    }

    handleChange = (event) => {
        var value = event.target.value;
        if (event.target.name === "woodHeight") {
            value = this.cantBeNegative(value);
            this.setState({
                woodHeight: value
            });
        } else if (event.target.name === "woodLenght") {
            value = this.cantBeNegative(value);
            this.setState({
                woodLenght: value
            });
        } else if (event.target.name === "woodMass") {
            value = this.cantBeNegative(value);
            this.calcForceGravity();
            this.setState({
                mass: value
            });
            this.measureWood();
        }
    }

    calcForceGravity = () => {
        var forceGravity = this.state.mass * g;
        this.setState({
            forceGravity: forceGravity.toFixed(2)
        })
    }

    cantBeNegative = (value) => {
        if (value < 0)
            return value = 0;
        else return value;
    }

    repeat = () => {
        this.setState({
            woodPos: woodFirstPos,
            woodWithDynamometer: dynamometer01,
            dynamometerValue: 0
        });
    }

    addPoints = () => {
        this.setState({
            graphData: [
                { 'mg, H': 0, 'x, см': 0 },
                { 'mg, H': 2, 'x, см': 0.98 },
                { 'mg, H': 4, 'x, см': 1.96 },
                { 'mg, H': 6, 'x, см': 2.94 },
            ]
        })
    }

    render() {
        return (
            <Container className="on-hover-img">
                <Col>
                    <Row className="mt-3">
                        <h4 className="m-auto">{this.props.labData.task1.title}</h4>
                    </Row>
                    <Row className="mt-3">
                        <h5><b>{generalKz.progress}</b>:</h5>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Row className="mt-3">
                                <h5>{this.props.labData.task1.progress[1]}</h5>
                                <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task1.progress[2] }}></h5>
                            </Row>
                            <Row className="mt-3">
                                <Col sm="6">
                                    <Form.Label>{generalKz.height}</Form.Label>
                                    <Form.Control
                                        type="number"
                                        value={this.state.woodHeight}
                                        name="woodHeight"
                                        placeholder={generalKz.height}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col sm="6">
                                    <Form.Label>{generalKz.lenght}</Form.Label>
                                    <Form.Control
                                        type="number"
                                        value={this.state.woodLenght}
                                        name="woodLenght"
                                        placeholder={generalKz.lenght}
                                        onChange={this.handleChange} />
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <img alt="board" className="w-75 m-auto" src={this.state.board} onClick={this.measureBoard} />
                            </Row>
                            <Row className="mt-3">
                                <img alt="ruler" className="w-75 m-auto" src={this.state.ruler} onClick={this.measureBoard} />
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col sm="6">
                            <Row>
                                <Col>
                                    <Row>
                                        <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task1.progress[3] }}></h5>
                                        <h5><b>mg = {this.state.forceGravity}Н</b></h5>
                                    </Row>
                                    <Row>
                                        <Form.Label>{generalKz.mass}</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={this.state.mass}
                                            name="woodMass"
                                            placeholder={generalKz.mass}
                                            onChange={this.handleChange} />
                                        <Button
                                            variant="success"
                                            size="lg"
                                            onClick={this.calcForceGravity}
                                            className="text-center mx-auto mt-3"
                                        >
                                            {generalKz.calculate}
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="wrap mt-3">
                                {this.state.wood && <img alt="wood" className="w-50 m-auto" src={this.state.wood} onClick={this.measureWood} />}
                            </Row>
                        </Col>
                        <Col sm="6" className="text-center wrap">
                            <img alt="dynamometer" className="w-50" src={this.state.dynamometer} onClick={this.measureWood} />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Row>
                                <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task1.progress[4] }}></h5>
                            </Row>
                            <Row className="board" >
                                <img
                                    alt="woodWithDynamometer"
                                    className="woodWithDynamometer"
                                    style={{ top: this.state.woodPos + "px" }}
                                    src={this.state.woodWithDynamometer}
                                    onKeyDown={(e) => this.moveWood(e)}
                                    tabIndex="0"
                                />
                            </Row>
                            <Row>
                                <h5><b>{generalKz.dynamometerValue} : {this.state.dynamometerValue}Н</b></h5>
                            </Row>
                            <Row>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    onClick={this.repeat}
                                    className="text-center mx-auto mt-3"
                                >
                                    {generalKz.repeat}
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task1.progress[5] }}></h5>
                        <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task1.progress[6] }}></h5>
                        <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task1.progress[7] }}></h5>
                        <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task1.progress[8] }}></h5>
                    </Row>
                    <Row>
                        <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task1.progress[9] }}></h5>
                        <Table striped bordered hover className="text-center">
                            <thead>
                                <tr>
                                    <th>{this.props.labData.task1.table[1]}</th>
                                    <th dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[2] }}></th>
                                    <th dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[3] }}></th>
                                    <th dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[4] }}></th>
                                    <th dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[5] }}></th>
                                    <th dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[6] }}></th>
                                    <th dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[7] }}></th>
                                    <th dangerouslySetInnerHTML={{ __html: this.props.labData.task1.table[8] }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                </tr>
                                <tr>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                </tr>
                                <tr>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                    <Row className="mb-3">
                        <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task1.progress[10] }}></h5>
                    </Row>
                </Col>
            </Container>
        )
    }
}
