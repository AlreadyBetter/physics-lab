import React, { Component } from 'react'
import { Container, Table, FormControl, Col, Row, Card, Image, Alert } from 'react-bootstrap'

import '../../styles/styles.css'
import { generalKz } from '../../recources/labData'

import stick from '../../assets/lab7/woodStick.png'
import sand from '../../assets/lab7/sand.png'

import glass from '../../assets/lab6/glassWithWater2.png'
import baker from '../../assets/lab/fullBaker.png'

import flask from '../../assets/lab7/smallFlask.png'
import quarterFlaskSand from '../../assets/lab7/quarterFlaskSand.png'
import halfFlaskSand from '../../assets/lab7/halfFlaskSand.png'
import fullFlaskSand from '../../assets/lab7/fullFlaskSand.png'
import oneThirdFlaskSand from '../../assets/lab7/oneThirdFlaskSand.png'

import emptyFlaskInBaker from '../../assets/lab7/emptyFlaskInBaker.png'
import emptyFlaskStickInBaker from '../../assets/lab7/emptyFlaskStick.png'
import halfFlaskInBaker from '../../assets/lab7/halfFlaskInBaker.png'

import quarterFlask from '../../assets/lab7/quarterFlask.png'
import oneThirdFlask from '../../assets/lab7/oneThirdFlask.png'
import halfFlask from '../../assets/lab7/halfFlask.png'
import fullFlask from '../../assets/lab7/fullFlask.png'

import beamScale from '../../assets/lab3/beamScale.png'
import flask2g from '../../assets/lab7/flask2g.png'
import flask3g from '../../assets/lab7/flask3g.png'
import flask5g from '../../assets/lab7/flask5g.png'
import flask10g from '../../assets/lab7/flask10g.png'
import flask15g from '../../assets/lab7/flask15g.png'

const g = 9.8
const waterDens = 1000

export default class BodiesSwimConditions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stick: stick,
            emptyFlask: flask,
            baker: baker,
            firstPutFlask: false,
            bakerValue: 45,
            archForceFlask: 0,
            halfFlaskSand: '',
            flask: flask,
            beamScale: beamScale,
            glass: glass
        };
    }

    archimedesForce = (flaskVol) => {
        return (g * flaskVol / 1e6 * waterDens).toFixed(3)
    }

    onClickHandler = event => {
        event.preventDefault()
        event.persist()
        var archForceFlask;
        switch (event.target.name) {
            case 'emptyFlask':
                archForceFlask = this.archimedesForce(2)
                this.setState({
                    emptyFlask: '',
                    baker: emptyFlaskInBaker,
                    bakerValue: 47,
                    archForceFlask: archForceFlask
                })
                break;
            case 'stick':
                if (!this.state.emptyFlask) {
                    archForceFlask = this.archimedesForce(10)
                    this.setState({
                        stick: '',
                        baker: emptyFlaskStickInBaker,
                        bakerValue: 55,
                        archForceFlask: archForceFlask
                    })
                } else {
                    this.setState({
                        firstPutFlask: true
                    })
                    setTimeout(() => {
                        this.setState({
                            firstPutFlask: false
                        })
                    }, 3000);
                }
                break;
            case 'halfFlaskSand':
                archForceFlask = this.archimedesForce(5)
                this.setState({
                    halfFlaskSand: '',
                    baker: halfFlaskInBaker,
                    bakerValue: 50,
                    archForceFlask: archForceFlask
                })
                break;
            case 'sand':
                if (this.state.flask === flask) {
                    this.setState({
                        flask: quarterFlaskSand
                    })
                } else
                    if (this.state.flask === quarterFlaskSand) {
                        this.setState({
                            flask: oneThirdFlaskSand
                        })
                    } else if (this.state.flask === oneThirdFlaskSand) {
                        this.setState({
                            flask: halfFlaskSand
                        })
                    } else if (this.state.flask === halfFlaskSand) {
                        this.setState({
                            flask: fullFlaskSand
                        })
                    }
                break;
            case 'flask':
                this.setState({
                    flask: flask
                })
                break;
            case 'beamScale':
                if (this.state.flask === flask && this.state.beamScale === beamScale) {
                    this.setState({
                        flask: '',
                        beamScale: flask2g
                    })
                } else if (this.state.flask === quarterFlaskSand && this.state.beamScale === beamScale) {
                    this.setState({
                        flask: '',
                        beamScale: flask3g
                    })
                } else if (this.state.flask === oneThirdFlaskSand && this.state.beamScale === beamScale) {
                    this.setState({
                        flask: '',
                        beamScale: flask5g
                    })
                } else if (this.state.flask === halfFlaskSand && this.state.beamScale === beamScale) {
                    this.setState({
                        flask: '',
                        beamScale: flask10g
                    })
                } else if (this.state.flask === fullFlaskSand && this.state.beamScale === beamScale) {
                    this.setState({
                        flask: '',
                        beamScale: flask15g
                    })
                } else if (this.state.beamScale === flask2g) {
                    this.setState({
                        flask: flask,
                        beamScale: beamScale
                    })
                } else if (this.state.beamScale === flask3g) {
                    this.setState({
                        flask: quarterFlaskSand,
                        beamScale: beamScale
                    })
                } else if (this.state.beamScale === flask5g) {
                    this.setState({
                        flask: oneThirdFlaskSand,
                        beamScale: beamScale
                    })
                } else if (this.state.beamScale === flask10g) {
                    this.setState({
                        flask: halfFlaskSand,
                        beamScale: beamScale
                    })
                } else if (this.state.beamScale === flask15g) {
                    this.setState({
                        flask: fullFlaskSand,
                        beamScale: beamScale
                    })
                }
                break;
            case 'glass':
                if (this.state.flask === quarterFlaskSand && this.state.glass === glass) {
                    this.setState({
                        flask: '',
                        glass: quarterFlask
                    })
                } else if (this.state.flask === oneThirdFlaskSand && this.state.glass === glass) {
                    this.setState({
                        flask: '',
                        glass: oneThirdFlask
                    })
                } else if (this.state.flask === halfFlaskSand && this.state.glass === glass) {
                    this.setState({
                        flask: '',
                        glass: halfFlask
                    })
                } else if (this.state.flask === fullFlaskSand && this.state.glass === glass) {
                    this.setState({
                        flask: '',
                        glass: fullFlask
                    })
                } else if (this.state.glass === quarterFlask) {
                    this.setState({
                        flask: quarterFlaskSand,
                        glass: glass
                    })
                } else if (this.state.glass === oneThirdFlask) {
                    this.setState({
                        flask: oneThirdFlaskSand,
                        glass: glass
                    })
                } else if (this.state.glass === halfFlask) {
                    this.setState({
                        flask: halfFlaskSand,
                        glass: glass
                    })
                } else if (this.state.glass === fullFlask) {
                    this.setState({
                        flask: fullFlaskSand,
                        glass: glass
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
                    <h4 className="text-center">{this.props.labData.task.title}</h4>
                </Row>
                <Row className="mt-3">
                    <h5><b>{generalKz.progress}</b>:</h5>
                </Row>

                {/* Measuring flask volume */}
                <Row className="mt-3">
                    <Col>
                        <Row>
                            <Col>
                                <h5>{this.props.labData.task.progress[1]}</h5>
                                <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task.progress[2] }}></h5>
                                <Card className="p-3">
                                    <h6>{generalKz.bakerValue}: {this.state.bakerValue} мл</h6>
                                    <h6>F<sub>A</sub>: {this.state.archForceFlask} Н</h6>
                                </Card>
                                {this.state.firstPutFlask && <Alert key="mfv" className="w-100 mt-2" variant="warning">{this.props.labData.warnings.firstPutFlask}</Alert>}
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="3" className="wrap">
                                {this.state.emptyFlask && <Image thumbnail className="w-25 mr-2 ml-auto" fluid alt="emptyFlask" name="emptyFlask" onClick={this.onClickHandler} src={this.state.emptyFlask} />}
                                {this.state.halfFlaskSand && <Image thumbnail className="w-25 mr-2 ml-auto" fluid alt="halfFlaskSand" name="halfFlaskSand" onClick={this.onClickHandler} src={this.state.halfFlaskSand} />}
                            </Col>
                            <Col sm="auto" className="wrap">
                                {this.state.stick && <Image thumbnail className="h-75" fluid alt="stick" name="stick" onClick={this.onClickHandler} src={this.state.stick} />}
                            </Col>
                            <Col sm="6" className="wrap">
                                {this.state.baker && <Image className="w-50 mx-auto" fluid alt="baker" name="baker" onClick={this.onClickHandler} src={this.state.baker} />}
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* Measuring flask volume */}
                <Row className="mt-3">
                    <Col>
                        <Row>
                            <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task.progress[3] }}></h5>
                            <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task.progress[4] }}></h5>
                            <h5>{this.props.labData.task.progress[5]}</h5>
                            <h5>{this.props.labData.task.progress[6]}</h5>
                        </Row>
                        <Row className="mt-3">
                            <Col sm="6" className="wrap">
                                <Image thumbnail className="w-50 ml-auto" alt="sand" name="sand" onClick={this.onClickHandler} src={sand} />
                            </Col>
                            <Col sm="6" className="wrap">
                                {this.state.flask && <Image thumbnail className="w-10 mr-auto" alt="flask" name="flask" onClick={this.onClickHandler} src={this.state.flask} />}
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col sm="6" className="wrap">
                                <Image className="mx-auto mt-auto" fluid alt="beamScale" name="beamScale" onClick={this.onClickHandler} src={this.state.beamScale} />
                            </Col>
                            <Col sm="6" className="wrap">
                                <Image className="w-50 mx-auto" fluid alt="glass" name="glass" onClick={this.onClickHandler} src={this.state.glass} />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* Fill table */}
                <Row className="mt-5 mb-3">
                    <h5>{this.props.labData.task.progress[7]}</h5>
                    <Table striped bordered hover className="text-center">
                        <thead>
                            <tr>
                                {this.props.labData.task.table.head.map((item, index) =>
                                    <th key={index} dangerouslySetInnerHTML={{ __html: item }}></th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.labData.task.table.experiments.map(({ experimentNo, result }, index) => (
                                <tr key={index}>
                                    <td>{experimentNo}</td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                    <td>{result}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        )
    }
}
