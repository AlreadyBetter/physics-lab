import React, { Component } from 'react'
import { Form, Button, Container, Tab, Nav, Col, Row, Accordion, Card } from 'react-bootstrap'

import { generalKz } from '../../recources/labData'
import { labData6 } from '../../recources/labData'

import LabDescription from '../../components/LabDescription'
import ArchimedesPrinciple from '../../components/tasks/ArchimedesPrinciple'
import Calculator from '../../components/Calculator/Calculator'

export default class Lab6 extends Component {
    render() {
        return (
            <Container>
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
                                    <LabDescription labData={labData6} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="2">
                                    <ArchimedesPrinciple labData={labData6} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="4">
                                    <Form>
                                        <Form.Group controlId="formBasicFullname">
                                            <Form.Label>{generalKz.fullname}</Form.Label>
                                            <Form.Control type="textarea" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicConclusion">
                                            <Form.Label>{generalKz.conslusion}</Form.Label>
                                            <Form.Control as="textarea" rows="3" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicFinishButton" >
                                            <Button variant="success" >{generalKz.finish}</Button>
                                        </Form.Group>
                                    </Form>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
