import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import bgPhysics1 from '../assets/bgPhysics1.jpg'
import bgPhysics2 from '../assets/bgPhysics2.jpg'
import bgPhysics3 from '../assets/bgPhysics3.jpg'

import '../styles/styles.css'


export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-responsive"
                        src={bgPhysics1}
                        alt="bgPhysics1"
                    />
                    <Carousel.Caption>
                        <h3>Physics Laboratory</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, cumque!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-responsive"
                        src={bgPhysics2}
                        alt="bgPhysics2"
                    />
                    <Carousel.Caption>
                        <h3>Physics Laboratory</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, cumque!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-responsive"
                        src={bgPhysics3}
                        alt="bgPhysics3"
                    />
                    <Carousel.Caption>
                        <h3>Physics Laboratory</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, cumque!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
