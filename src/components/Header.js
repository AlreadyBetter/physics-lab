import React, { Component } from 'react'
import { Navbar, Nav, Container, FormControl, Form, Button } from 'react-bootstrap'
import logo from '../assets/logo192.png'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Contacts from '../pages/Contacts'
import Blog from '../pages/Blog'
import Laboratories from '../pages/Laboratories'
import Lab1 from '../pages/labs/Lab1'
import Lab2 from '../pages/labs/Lab2'
import Lab3 from '../pages/labs/Lab3'
import Lab4 from '../pages/labs/Lab4'
import Lab5 from '../pages/labs/Lab5'
import Lab6 from '../pages/labs/Lab6'
import Lab7 from '../pages/labs/Lab7'
import Lab8 from '../pages/labs/Lab8'
import Lab9 from '../pages/labs/Lab9'
import Lab10 from '../pages/labs/Lab10'

import {generalKz} from '../recources/labData'

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="logo"
                            /> Virtual lab
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-nav-bar" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">{generalKz.mainPage}</Nav.Link>
                                <Nav.Link href="/labs">{generalKz.labList}</Nav.Link>
                                {/* <Nav.Link href="/contacts">{generalKz.contact}</Nav.Link> */}
                                {/* <Nav.Link href="/about">About us</Nav.Link> */}
                                {/* <Nav.Link href="/blog">Blog</Nav.Link> */}
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder={generalKz.search}
                                    className="mr-sm-2"
                                />
                                <Button variant="outline-info">{generalKz.search}</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/labs" component={Laboratories} />
                        <Route exact path="/labs/lab1" component={Lab1} />
                        <Route exact path="/labs/lab2" component={Lab2} />
                        <Route exact path="/labs/lab3" component={Lab3} />
                        <Route exact path="/labs/lab4" component={Lab4} />
                        <Route exact path="/labs/lab5" component={Lab5} />
                        <Route exact path="/labs/lab6" component={Lab6} />
                        <Route exact path="/labs/lab7" component={Lab7} />
                        <Route exact path="/labs/lab8" component={Lab8} />
                        <Route exact path="/labs/lab9" component={Lab9} />
                        <Route exact path="/labs/lab10" component={Lab10} />
                    </Switch>
                </Router>
            </>
        )
    }
}
