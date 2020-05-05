import React, { Component } from 'react'
import { Button, Container, Tab, Nav, Col, Row, Accordion, Card } from 'react-bootstrap'

import { generalKz } from '../../recources/labData'
import { labData5 } from '../../recources/labData'

import LabDescription from '../../components/LabDescription'
import Calculator from '../../components/Calculator/Calculator'
import SlidingFriction from '../../components/tasks/SlidingFriction'
import Conclusion from '../../components/Conclusion'

export default class Lab5 extends Component {
    render() {
        return (
            <Container >
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="1" >
                    <Row>
                        <Col sm={3} >
                            <Nav variant="pills" className="flex-column mt-4" >
                                <Nav.Item >
                                    <Nav.Link eventKey="1">{generalKz.description}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="2">{generalKz.taskUppercase}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="4">{generalKz.conslusion}</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Accordion >
                                <Card tag="div">
                                    <Card.Header className="text-center">
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            {generalKz.calculator}
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Calculator />
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                        <Col sm={9} className="mt-4">
                            <Tab.Content >
                                <Tab.Pane eventKey="1">
                                    <LabDescription labData={labData5} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="2">
                                    <SlidingFriction labData={labData5} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="4">
                                    <Conclusion />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
