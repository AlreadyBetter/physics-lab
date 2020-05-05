import React, { Component } from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'

import '../../styles/styles.css'
import { generalKz } from '../../recources/labData'

import ruler from '../../assets/lab2/ruler.png'
import tripod from '../../assets/lab4/tripod.png'
import pencil from '../../assets/lab2/pencil.png'

import shape from '../../assets/lab8/customShape.png'
import shapeOnTripod from '../../assets/lab8/customShapeOnTripod.png'
import shapeRuler from '../../assets/lab8/customShapeRuler.png'
import shapeAB from '../../assets/lab8/customShapeAB.png'
import shapeRuler2 from '../../assets/lab8/customShapeRuler2.png'
import shapeCD from '../../assets/lab8/customShapeCD.png'
import shapeO from '../../assets/lab8/customShapeO.png'

export default class CenterOfMassShape extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tripod: tripod,
            shape: shape,
            pencil: pencil,
            ruler: ruler
        };
    }

    handleClick = event => {
        event.preventDefault()
        event.persist()
        switch (event.target.name) {
            case 'shape':
                if (this.state.tripod === tripod) {
                    this.setState({
                        shape: '',
                        tripod: shapeOnTripod
                    })
                }
                break;
            case 'ruler':
                if (this.state.tripod === shapeOnTripod) {
                    this.setState({
                        ruler: '',
                        tripod: shapeRuler
                    })
                } else if (this.state.tripod === shapeAB) {
                    this.setState({
                        ruler: '',
                        tripod: shapeRuler2
                    })
                }
                break;
            case 'pencil':
                if (this.state.tripod === shapeRuler) {
                    this.setState({
                        ruler: ruler,
                        tripod: shapeAB
                    })
                } else if (this.state.tripod === shapeRuler2) {
                    this.setState({
                        ruler: ruler,
                        tripod: shapeCD
                    })
                }
                break;
            case 'tripod':
                if (this.state.tripod === shapeCD) {
                    this.setState({
                        tripod: shapeO
                    })
                }
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <Container className="on-hover-img">
                <Row className="mt-3">
                    <h4 className="text-center">{this.props.labData.task1.title}</h4>
                </Row>
                <Row className="mt-3">
                    <h5><b>{generalKz.progress}</b>:</h5>
                </Row>
                <Row>
                    <h5>{this.props.labData.task1.progress[1]}</h5>
                    <h5>{this.props.labData.task1.progress[2]}</h5>
                    <h5>{this.props.labData.task1.progress[3]}</h5>
                </Row>
                <Row className="my-5">
                    <Col sm="4" className="wrap">
                        <Row >
                            {this.state.shape && <Image fluid className="w-50 mx-auto" name="shape" alt="shape" src={this.state.shape} onClick={this.handleClick} />}
                        </Row>
                        <Row >
                            {this.state.pencil && <Image fluid className="mx-auto" name="pencil" alt="pencil" src={this.state.pencil} onClick={this.handleClick} />}
                        </Row>
                        <Row >
                            {this.state.ruler && <Image fluid className="mx-auto" name="ruler" alt="ruler" src={this.state.ruler} onClick={this.handleClick} />}
                        </Row>
                    </Col>
                    <Col sm="8" className="wrap">
                        <Image className="mx-auto" fluid name="tripod" alt="tripod" src={this.state.tripod} onClick={this.handleClick} />
                    </Col>
                </Row>
            </Container>
        )
    }
}
