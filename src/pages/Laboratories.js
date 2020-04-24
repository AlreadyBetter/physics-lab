import React, { Component } from 'react'
import { Button, Container, CardDeck, Card, Row, Col } from 'react-bootstrap'

import { generalKz } from '../recources/labData'

import lab1bg from '../assets/lab/lab1bg.jpg'
import lab2bg from '../assets/lab2/lab2bg.png'
import lab3bg from '../assets/lab3/lab3bg.png'
import lab4bg from '../assets/lab4/lab4bg.png'
import lab5bg from '../assets/lab4/lab4bg.png'
import lab10bg from '../assets/lab10/lab10bg.png'

import '../styles/styles.css'

export default class Laboratories extends Component {

    render() {
        return (
            <>
                <Container>
                    <h2 className="text-center m-4">{generalKz.labList}</h2>
                    <CardDeck className="m-4">
                        <Row>
                            <Col md="4">
                                <Card border="dark" className="labCard">
                                    <Card.Img
                                        variant="top"
                                        width={150}
                                        height={200}
                                        src={lab1bg}
                                    />
                                    <Card.Body>
                                        <Card.Title>{generalKz.lab1}</Card.Title>
                                        <Card.Text className="labCardText">
                                            {generalKz.lab1Title}
                                        </Card.Text >
                                        <Button variant="dark" href="/labs/lab1">{generalKz.start}</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card border="dark" className="labCard">
                                    <Card.Img
                                        variant="top"
                                        width={150}
                                        height={200}
                                        src={lab2bg}
                                    />
                                    <Card.Body>
                                        <Card.Title>{generalKz.lab2}</Card.Title>
                                        <Card.Text className="labCardText">
                                            {generalKz.lab2Title}
                                        </Card.Text>
                                        <Button variant="dark" href="/labs/lab2">{generalKz.start}</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card border="dark" className="labCard">
                                    <Card.Img
                                        variant="top"
                                        width={150}
                                        height={200}
                                        src={lab3bg}
                                    />
                                    <Card.Body>
                                        <Card.Title>{generalKz.lab3}</Card.Title>
                                        <Card.Text className="labCardText">
                                            {generalKz.lab3Title}
                                        </Card.Text>
                                        <Button variant="dark" href="/labs/lab3">{generalKz.start}</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col md="4">
                                <Card border="dark" className="labCard">
                                    <Card.Img
                                        variant="top"
                                        width={150}
                                        height={200}
                                        src={lab4bg}
                                    />
                                    <Card.Body>
                                        <Card.Title>{generalKz.lab4}</Card.Title>
                                        <Card.Text className="labCardText">
                                            {generalKz.lab4Title}
                                        </Card.Text>
                                        <Button variant="dark" href="/labs/lab4">{generalKz.start}</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            {/* <Col md="4">
                                <Card border="dark" className="labCard">
                                    <Card.Img
                                        variant="top"
                                        width={150}
                                        height={200}
                                        src={lab5bg}
                                    />
                                    <Card.Body>
                                        <Card.Title>{generalKz.lab5}</Card.Title>
                                        <Card.Text className="labCardText">
                                            {generalKz.lab5Title}
                                        </Card.Text>
                                        <Button variant="dark" href="/labs/lab5">{generalKz.start}</Button>
                                    </Card.Body>
                                </Card>
                            </Col> */}
                            <Col md="4">
                                <Card border="dark" className="labCard">
                                    <Card.Img
                                        variant="top"
                                        width={150}
                                        height={200}
                                        src={lab10bg}
                                    />
                                    <Card.Body>
                                        <Card.Title>{generalKz.lab10}</Card.Title>
                                        <Card.Text className="labCardText">
                                            {generalKz.lab10Title}
                                        </Card.Text>
                                        <Button variant="dark" href="/labs/lab10">{generalKz.start}</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </CardDeck>
                </Container>
            </>
        )
    }
}
