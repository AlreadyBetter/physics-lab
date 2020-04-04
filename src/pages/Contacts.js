import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{width: '500px'}}>
                <h1 className="text-center">Contact us</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                        <Form.Text>We'll never show your email with anyone else</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPass">
                        <Form.Label>Example text area</Form.Label>
                        <Form.Control as="textarea" rows="3"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out"/>
                        <Button variant="primary">Submit</Button>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}
