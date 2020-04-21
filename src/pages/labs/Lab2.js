import React, { Component } from 'react'
import { Form, Button, Container, Tab, Nav, Col, Row, Accordion, Card } from 'react-bootstrap'

import { generalKz } from '../../recources/labData'
import { labData2 } from '../../recources/labData'

import LabDescription from '../../components/LabDescription'
import MeasurePeas from '../../components/tasks/MeasurePeas'
import MeasurePoint from '../../components/tasks/MeasurePoint'
import MeasureScrewStep from '../../components/tasks/MeasureScrewStep'
import Calculator from '../../components/Calculator/Calculator';


export default class Lab2 extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="1" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-4" >
                                <Nav.Item >
                                    <Nav.Link eventKey="1">{generalKz.description}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="2">1-{generalKz.task}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="3">2-{generalKz.task}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="4">3-{generalKz.task}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5">{generalKz.conslusion}</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Accordion>
                                <Card>
                                    <Card.Header className="text-center">
                                        <Accordion.Toggle  as={Button} variant="link" eventKey="0">
                                            {generalKz.calculator}
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Text>
                                            <Calculator />
                                        </Card.Text>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                        <Col sm={9} className="mt-4">
                            <Tab.Content >
                                <Tab.Pane eventKey="1">
                                    <LabDescription labData={labData2} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="2">
                                    <MeasurePeas labData={labData2} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="3">
                                    <MeasurePoint labData={labData2} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="4">
                                    <MeasureScrewStep labData={labData2} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="5">
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
