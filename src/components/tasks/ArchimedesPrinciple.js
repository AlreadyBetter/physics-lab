import React, { Component } from 'react'
import { Row, Container, Col, Image, Table, FormControl } from 'react-bootstrap'

import { generalKz } from '../../recources/labData'
import '../../styles/styles.css'

import baker from '../../assets/lab/fullBaker.png'
import screwInBaker from '../../assets/lab/screwInBaker.png'
import cubeInbaker from '../../assets/lab6/cubeInbaker.png'
import brassInbaker from '../../assets/lab/brassInbaker.png'

import dynamometer from '../../assets/lab10/dynamometer.png'
import screwOnDynamometer from '../../assets/lab6/screwOnDynamometer.png'
import cubeOnDynamometer from '../../assets/lab6/cubeOnDynamometer.png'
import brassOnDynamometer from '../../assets/lab6/brassOnDynamometer.png'

import screw from '../../assets/lab/screwWithString.png'
import brass from '../../assets/lab/brassWithString.png'
import cube from '../../assets/lab6/cubeWithString.png'

import glass from '../../assets/lab6/glassWithWater2.png'
import brassInGlass from '../../assets/lab6/brassInGlass.png'
import screwInGlass from '../../assets/lab6/screwInGlass.png'
import cubeInGlass from '../../assets/lab6/cubeInGlass.png'


export default class ArchimedesPrinciple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            baker: baker,
            bakerValuer: 45,
            dynamometer: dynamometer,
            dynamometerValue: 0,
            glass: glass,
            dynamometerValueInWater: 0
        };
    }

    measureDensity = event => {
        event.preventDefault();
        event.persist()
        switch (event.target.name) {
            case 'brass':
                this.setState({
                    baker: brassInbaker,
                    bakerValuer: 58.8
                })
                break;
            case 'cube':
                this.setState({
                    baker: cubeInbaker,
                    bakerValuer: 55
                })
                break;
            case 'screw':
                this.setState({
                    baker: screwInBaker,
                    bakerValuer: 47
                })
                break;
            case 'baker':
                this.setState({
                    baker: baker,
                    bakerValuer: 45
                })
                break;
            default:
                break;
        }
    }

    measureWeight = event => {
        event.preventDefault();
        event.persist()
        switch (event.target.name) {
            case 'brass':
                this.setState({
                    dynamometer: brassOnDynamometer,
                    dynamometerValue: 1.18
                })
                break;
            case 'cube':
                this.setState({
                    dynamometer: cubeOnDynamometer,
                    dynamometerValue: 0.76
                })
                break;
            case 'screw':
                this.setState({
                    dynamometer: screwOnDynamometer,
                    dynamometerValue: 0.15
                })
                break;
            case 'dynamometer':
                this.setState({
                    dynamometer: dynamometer,
                    dynamometerValue: 0
                })
                break;
            default:
                break;
        }
    }

    measureWeightInWater = event => {
        event.preventDefault();
        event.persist()
        switch (event.target.name) {
            case 'brass':
                this.setState({
                    glass: brassInGlass,
                    dynamometerValueInWater: 1
                })
                break;
            case 'cube':
                this.setState({
                    glass: cubeInGlass,
                    dynamometerValueInWater: 0.67
                })
                break;
            case 'screw':
                this.setState({
                    glass: screwInGlass,
                    dynamometerValueInWater: 0.13
                })
                break;
            case 'glass':
                this.setState({
                    glass: glass,
                    dynamometerValueInWater: 0
                })
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <Container className="on-hover-img">
                <Col>
                    <Row className="mt-3">
                        <h4 className="text-center">{this.props.labData.task.title}</h4>
                    </Row>
                    <Row className="mt-3">
                        <h5><b>{generalKz.progress}</b>:</h5>
                    </Row>

                    {/* Measuring density */}
                    <Row>
                        <h5>{this.props.labData.task.progress[1]}</h5>
                        <h6><u>{generalKz.bakerValuer}: {this.state.bakerValuer} мл</u></h6>
                    </Row>
                    <Row className="mt-3">
                        <Col sm="6" className="wrap">
                            <Image className="w-25 mx-auto" alt="brass" name="brass" src={brass} onClick={this.measureDensity} />
                            <Image className="w-50 mx-auto" alt="cube" name="cube" src={cube} onClick={this.measureDensity} />
                            <Image className="w-50 mx-auto" alt="screw" name="screw" src={screw} onClick={this.measureDensity} />
                        </Col>
                        <Col sm="6" className="m-auto wrap">
                            <Image fluid className="w-50 m-auto" alt="baker" name="baker" src={this.state.baker} onClick={this.measureDensity} />
                        </Col>
                    </Row>

                    {/* Fill table */}
                    <Row className="mt-3">
                        <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task.progress[2] }}></h5>
                        <Table striped bordered hover className="text-center">
                            <thead>
                                <tr>{this.props.labData.task.table.head.map((item, index) =>
                                    <th key={index} dangerouslySetInnerHTML={{ __html: item }}></th>
                                )}</tr>
                            </thead>
                            <tbody>
                                {this.props.labData.task.table.experiments.map(({ experimentNo, body }, index) => (
                                    <tr key={index}>
                                        <td>{experimentNo}</td>
                                        <td>{body}</td>
                                        <td><FormControl type="text" /></td>
                                        <td><FormControl type="text" /></td>
                                        <td><FormControl type="text" /></td>
                                        <td><FormControl type="text" /></td>
                                        <td><FormControl type="text" /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Row>

                    {/* Measure weight */}
                    <Row>
                        <h5>{this.props.labData.task.progress[3]}</h5>
                        <h6><u>{generalKz.dynamometerValue}: {this.state.dynamometerValue} Н</u></h6>
                    </Row>
                    <Row className="mt-3">
                        <Col sm="6" className="wrap">
                            <Image className="w-25 mx-auto" alt="brass" name="brass" src={brass} onClick={this.measureWeight} />
                            <Image className="w-50 mx-auto" alt="cube" name="cube" src={cube} onClick={this.measureWeight} />
                            <Image className="w-50 mx-auto" alt="screw" name="screw" src={screw} onClick={this.measureWeight} />
                        </Col>
                        <Col sm="6" className="m-auto wrap">
                            <Image fluid className="w-50 m-auto" alt="dynamometer" name="dynamometer" src={this.state.dynamometer} />
                        </Col>
                    </Row>


                    {/* Measure weight in water */}
                    <Row>
                        <h5>{this.props.labData.task.progress[4]}</h5>
                        <h6><u>{generalKz.dynamometerValue}: {this.state.dynamometerValueInWater} Н</u></h6>
                    </Row>
                    <Row className="mt-3">
                        <Col sm="6" className="wrap">
                            <Image className="w-25 mx-auto mt-1" alt="brass" name="brass" src={brass} onClick={this.measureWeightInWater} />
                            <Image className="w-50 mx-auto mt-1" alt="cube" name="cube" src={cube} onClick={this.measureWeightInWater} />
                            <Image className="w-50 mx-auto mt-1" alt="screw" name="screw" src={screw} onClick={this.measureWeightInWater} />
                        </Col>
                        <Col sm="6" className="m-auto wrap">
                            <Image fluid className="w-50 m-auto" alt="glass" name="glass" src={this.state.glass} />
                        </Col>
                    </Row>

                    {/* Conclusion */}
                    <Row className="my-3">
                        <h5 dangerouslySetInnerHTML={{__html: this.props.labData.task.progress[5]}}></h5>
                        <h5>{this.props.labData.task.progress[6]}</h5>
                        <h5>{this.props.labData.task.progress[7]}</h5>
                    </Row>
                </Col>
            </Container>
        )
    }
}
