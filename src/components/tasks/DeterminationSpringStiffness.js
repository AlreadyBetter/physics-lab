import React, { Component } from 'react'
import { Container, Table, FormControl, Col, Row, Button, Form, Card, Image } from 'react-bootstrap'
import { ArrowDown } from 'react-bootstrap-icons';

import Graph from '../Graph'

import ruler from '../../assets/lab2/ruler.png'
import spring from '../../assets/lab4/spring.png'

import tripod from '../../assets/lab4/tripod.png'
import tripod100g from '../../assets/lab4/tripod100g.png'
import tripod200g from '../../assets/lab4/tripod200g.png'
import tripod300g from '../../assets/lab4/tripod300g.png'
import tripodSpring from '../../assets/lab4/tripodSpring.png'
import tripodSpringRuler from '../../assets/lab4/tripodSpringRuler.png'

import steel100g from '../../assets/lab4/steel100g.png'
import steel200g from '../../assets/lab4/steel200g.png'
import steel300g from '../../assets/lab4/steel300g.png'

import '../../styles/styles.css'
import { generalKz } from '../../recources/labData'

export default class DeterminationSpringStiffness extends Component {

    state = {
        tripod: tripod,
        spring: spring,
        ruler: ruler,
        stage: 0,
        graphData: [
            { 'mg, H': 0, 'x, см': 0 },
        ]
    }

    addSpring = () => {
        this.setState({
            tripod: tripodSpring,
            spring: '',
            stage: 1
        });
    }

    addRuler = () => {
        if (this.state.stage == 1) {
            this.setState({
                tripod: tripodSpringRuler,
                ruler: '',
                stage: 2
            });
        }
    }

    addSteel100g = () => {
        if (this.state.stage == 2) {
            this.setState({
                tripod: tripod100g
            });
        }
    }

    addSteel200g = () => {
        if (this.state.stage == 2) {
            this.setState({
                tripod: tripod200g
            });
        }
    }

    addSteel300g = () => {
        if (this.state.stage == 2) {
            this.setState({
                tripod: tripod300g
            });
        }
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
                <Row className="mt-3">
                    <h4 className="text-center">{this.props.labData.task.title}</h4>
                </Row>
                <Row className="mt-3">
                    <h5><b>{generalKz.progress}</b>:</h5>
                </Row>

                {/* Determine stiffness */}
                <Row>
                    <Col md="5">
                        <h5>{this.props.labData.task.progress[1]}</h5>
                        <h5>{this.props.labData.task.progress[2]}</h5>
                        <h5>{this.props.labData.task.progress[3]}</h5>
                        <h5>{this.props.labData.task.progress[4]}</h5>
                    </Col>
                    <Col md="7" className="text-center m-auto ">
                        <img className="img-fluid" src={this.state.tripod} />
                    </Col>
                </Row>
                <Row className="mt-3 text-center">
                    <Col md="4">
                        <img src={this.state.spring} onClick={this.addSpring} />
                    </Col>
                    <Col md="8" className="wrap">
                        <img className="img-fluid" src={this.state.ruler} onClick={this.addRuler} />
                    </Col>
                </Row>
                <Row className="mt-3 text-center">
                    <Col md="4">
                        <Image src={steel100g} thumbnail onClick={this.addSteel100g} />
                        <h3>100 g</h3>
                    </Col>
                    <Col md="4" >
                        <Image src={steel200g} thumbnail onClick={this.addSteel200g} />
                        <h3>200 g</h3>
                    </Col>
                    <Col md="4">
                        <Image src={steel300g} thumbnail onClick={this.addSteel300g} />
                        <h3>300 g</h3>
                    </Col>
                </Row>

                {/* Fill table */}
                <Row className="mt-3">
                    <h5>{this.props.labData.task.progress[5]}</h5>
                    <Table striped bordered hover className="text-center">
                        <thead>
                            <tr>
                                <th>{this.props.labData.task.table[1]}</th>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task.table[2] }}></th>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task.table[3] }}></th>
                                <th dangerouslySetInnerHTML={{ __html: this.props.labData.task.table[4] }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.props.labData.task.table[11]}</td>
                                <td>{this.props.labData.task.table[21]}</td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                            </tr>
                            <tr>
                                <td>{this.props.labData.task.table[12]}</td>
                                <td>{this.props.labData.task.table[22]}</td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                            </tr>
                            <tr>
                                <td>{this.props.labData.task.table[13]}</td>
                                <td>{this.props.labData.task.table[23]}</td>
                                <td><FormControl type="text" /></td>
                                <td><FormControl type="text" /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>

                {/* Fill graph */}
                <Row className="my-3">
                    <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task.progress[6] }}></h5>
                    <Col className="text-center mt-3">
                        <Button variant="warning" size="lg" onClick={this.addPoints} className="text-center"><ArrowDown/></Button>
                    </Col>
                    <Graph data={this.state.graphData} />
                    <h5 className="mt-3" >{this.props.labData.task.progress[7]}</h5>
                    <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task.progress[8] }}></h5>
                    <Card bg="light">
                        <Card.Body dangerouslySetInnerHTML={{ __html: this.props.labData.note }}></Card.Body>
                    </Card>
                    <h5 className="mt-3" dangerouslySetInnerHTML={{ __html: this.props.labData.task.progress[9] }}></h5>
                    <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task.progress[10] }}></h5>
                    <h5>{this.props.labData.task.progress[11]}</h5>
                </Row>
                <Row>

                </Row>
            </Container>
        )
    }
}
