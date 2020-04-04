import React, { Component } from 'react'
import { Tab, Container, Nav, Col, Row } from 'react-bootstrap'


export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="1">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pilss" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="1">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="2">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="3">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="4">Fraemworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="1">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem id vero accusantium error fugit facere ullam ipsum magnam libero quis adipisci quibusdam, at porro rem!
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem id vero accusantium error fugit facere ullam ipsum magnam libero quis adipisci quibusdam, at porro rem!
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem id vero accusantium error fugit facere ullam ipsum magnam libero quis adipisci quibusdam, at porro rem!
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="4">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem id vero accusantium error fugit facere ullam ipsum magnam libero quis adipisci quibusdam, at porro rem!
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="5">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem id vero accusantium error fugit facere ullam ipsum magnam libero quis adipisci quibusdam, at porro rem!
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
