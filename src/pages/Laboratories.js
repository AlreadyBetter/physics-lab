import React, { Component } from 'react'
import { Button, Container, CardDeck, Card } from 'react-bootstrap'

import { generalKz } from '../recources/labData'

import lab1bg from '../assets/lab/lab1bg.jpg'
import lab2bg from '../assets/lab2/lab2bg.jpg'

export default class Laboratories extends Component {

    render() {
        return (
            <>
                <Container>
                    <h2 className="text-center m-4">{generalKz.labList}</h2>
                    <CardDeck className="m-4">
                        <Card border="dark">
                            <Card.Img
                                variant="top"
                                className="h-50"
                                src={lab1bg}
                            />
                            <Card.Body>
                                <Card.Title>{generalKz.lab1}</Card.Title>
                                <Card.Text className="h-25">
                                    {generalKz.lab1Title}
                                </Card.Text >
                                <Button variant="dark" href="/labs/lab1">{generalKz.start}</Button>
                            </Card.Body>
                        </Card>
                        <Card border="dark">
                            <Card.Img
                                variant="top"
                                className="h-50"
                                src={lab2bg}
                            />
                            <Card.Body>
                                <Card.Title>{generalKz.lab2}</Card.Title>
                                <Card.Text className="h-25">
                                    {generalKz.lab2Title}
                                </Card.Text>
                                <Button variant="dark" href="/labs/lab2">{generalKz.start}</Button>
                            </Card.Body>
                        </Card>
                        <Card border="dark">
                            <Card.Img
                                variant="top"
                                className="h-50"
                                src={lab1bg}
                            />
                            <Card.Body>
                                <Card.Title>{generalKz.lab3}</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni voluptate ratione sapiente!
                                </Card.Text>
                                <Button variant="dark" href="/labs/lab3">{generalKz.start}</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        )
    }
}
