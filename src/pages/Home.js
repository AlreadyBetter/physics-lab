import React, { Component } from 'react'
import CarouselBox from '../components/CarouselBox'
import { Container, CardDeck, Card, Button } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container>
                    <h2 className="text-center m-4">Our team</h2>
                    <CardDeck className="m-4">
                        <Card bg="warning">
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?cs=srgb&dl=top-view-photo-of-people-near-wooden-table-3183150.jpg&fm=jpg"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni voluptate ratione sapiente!
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card bg="warning">
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?cs=srgb&dl=working-in-a-group-6224.jpg&fm=jpg"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni voluptate ratione sapiente!
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card bg="warning">
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?cs=srgb&dl=top-view-photo-of-people-near-wooden-table-3183150.jpg&fm=jpg"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni voluptate ratione sapiente!
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        )
    }
}
