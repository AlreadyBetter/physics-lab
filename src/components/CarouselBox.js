import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import bgPhysics1 from '../assets/bgPhysics1.jpg'
import bgPhysics2 from '../assets/bgPhysics2.jpg'
import bgPhysics3 from '../assets/bgPhysics3.jpg'

import '../styles/styles.css'


export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel className="carousel-height ">
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={bgPhysics1}
                        alt="bgPhysics1"
                    />
                    <Carousel.Caption>
                        <h3>Physics Laboratory</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={bgPhysics2}
                        alt="bgPhysics2"
                    />
                    <Carousel.Caption>
                        <h3>Physics Laboratory</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={bgPhysics3}
                        alt="bgPhysics3"
                    />
                    <Carousel.Caption>
                        <h3>Physics Laboratory</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
