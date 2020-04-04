import React, { Component } from 'react'
import { Container, Body, Row, Col, Media, ListGroup, Card } from 'react-bootstrap'

import BlogPreview from '../components/BlogPreview'

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <BlogPreview/>
                        <BlogPreview/>
                        <BlogPreview/>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>HTML/CSS</ListGroup.Item>
                                <ListGroup.Item>javascript</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                                <ListGroup.Item>C#</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quam odio dicta culpa eum inventore enim ipsum incidunt facilis porro?
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
