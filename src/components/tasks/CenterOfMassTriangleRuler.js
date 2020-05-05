import React, { Component } from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'

import '../../styles/styles.css'
import { generalKz } from '../../recources/labData'

import ruler from '../../assets/lab2/ruler.png'
import string from '../../assets/lab/string.png'
import tripod from '../../assets/lab4/tripod.png'

import triangelRuler from '../../assets/lab8/triangelRuler.png'
import triangelRulerTripod from '../../assets/lab8/triangelRulerTripod.png'
import triangelRulerRuler from '../../assets/lab8/triangelRulerRuler.png'
import triangelRulerAB from '../../assets/lab8/triangelRulerAB.png'
import triangelRulerRuler2 from '../../assets/lab8/triangelRulerRuler2.png'
import triangelRulerCD from '../../assets/lab8/triangelRulerCD.png'
import triangelRulerO from '../../assets/lab8/triangelRulerO.png'

export default class CenterOfMassTriangleRuler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tripod: tripod,
            triangelRuler: triangelRuler,
            string: string,
            ruler: ruler
        };
    }

    handleClick = event => {
        event.preventDefault()
        event.persist()
        switch (event.target.name) {
            case 'triangelRuler':
                if (this.state.tripod === tripod) {
                    this.setState({
                        triangelRuler: '',
                        tripod: triangelRulerTripod
                    })
                }
                break;
            case 'ruler':
                if (this.state.tripod === triangelRulerTripod) {
                    this.setState({
                        ruler: '',
                        tripod: triangelRulerRuler
                    })
                } else if (this.state.tripod === triangelRulerAB) {
                    this.setState({
                        ruler: '',
                        tripod: triangelRulerRuler2
                    })
                }
                break;
            case 'string':
                if (this.state.tripod === triangelRulerRuler) {
                    this.setState({
                        ruler: ruler,
                        tripod: triangelRulerAB
                    })
                } else if (this.state.tripod === triangelRulerRuler2) {
                    this.setState({
                        string: '',
                        ruler: ruler,
                        tripod: triangelRulerCD
                    })
                }
                break;
            case 'tripod':
                if (this.state.tripod === triangelRulerCD) {
                    this.setState({
                        tripod: triangelRulerO
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
                    <h4 className="text-center">{this.props.labData.task2.title}</h4>
                </Row>
                <Row className="mt-3">
                    <h5><b>{generalKz.progress}</b>:</h5>
                </Row>
                <Row>
                    <h5>{this.props.labData.task2.progress[1]}</h5>
                    <h5>{this.props.labData.task2.progress[2]}</h5>
                    <h5>{this.props.labData.task2.progress[3]}</h5>
                    <h5>{this.props.labData.task2.progress[4]}</h5>
                </Row>
                <Row className="mt-5">
                    <Col sm="4" className="wrap">
                        <Row >
                            {this.state.triangelRuler && <Image fluid className="w-50 mx-auto" name="triangelRuler" alt="triangelRuler" src={this.state.triangelRuler} onClick={this.handleClick} />}
                        </Row>
                        <Row >
                            {this.state.string && <Image fluid className="mx-auto" name="string" alt="string" src={this.state.string} onClick={this.handleClick} />}
                        </Row>
                        <Row >
                            {this.state.ruler && <Image fluid className="mx-auto" name="ruler" alt="ruler" src={this.state.ruler} onClick={this.handleClick} />}
                        </Row>
                    </Col>
                    <Col sm="8" className="wrap">
                        <Image className="mx-auto" fluid name="tripod" alt="tripod" src={this.state.tripod} onClick={this.handleClick} />
                    </Col>
                </Row>
                <Row className="my-3">
                    <h5>{this.props.labData.task2.progress[5]}</h5>
                </Row>
            </Container>
        )
    }
}
