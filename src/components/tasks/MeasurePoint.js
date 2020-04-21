import React, { Component } from 'react'
import { Container, Table, FormControl, Col, Row, Button, Card } from 'react-bootstrap'
import { ArrowLeft } from 'react-bootstrap-icons';

import '../../styles/styles.css'

import ruler from '../../assets/lab2/ruler.png'
import notebookAndPencil from '../../assets/lab2/notebookAndPencil.png'
import notebookWithPoints from '../../assets/lab2/notebookWithPoints.png'
import notebookWithRuler from '../../assets/lab2/notebookWithRuler.png'

import { generalKz } from '../../recources/labData'

export default class MeasurePoint extends Component {

    state = {
        ruler: ruler,
        notebookAndPencil: notebookAndPencil,
        stage: 0,
        continueButton1: false,
        continueButton2: true
    }

    handleClick = () => {
        if (this.state.stage == 0) {
            this.setState({
                notebookAndPencil: notebookWithPoints,
                continueButton1: true,
                continueButton2: false
            });
            this.state.stage++;
        } else if (this.state.stage == 1) {
            this.setState({
                notebookAndPencil: notebookWithRuler,
                continueButton2: true
            });
            this.state.stage++;
        }
    }

    render() {
        return (
            <Container>
                <Row className="mt-3">
                    <h4 className="text-center">{this.props.labData.task2.title}</h4>
                </Row>
                <Row className="mt-3">
                    <h5><b>{generalKz.progress}</b>:</h5>
                </Row>
                {/* MeasurePoint */}
                <Row>
                    <Col sm={7} >
                        <img src={this.state.notebookAndPencil} onClick={this.handleClick} />
                    </Col>
                    <Col sm={5} >
                        <h5>{this.props.labData.task2.progress[1]}</h5>
                        <Col className="text-center">
                            <Button
                                variant="warning"
                                size="lg"
                                onClick={this.handleClick}
                                disabled={this.state.continueButton1}
                            >
                                <ArrowLeft />
                            </Button>
                        </Col>
                        <h5>{this.props.labData.task2.progress[2]}</h5>
                        <Col className="text-center">
                            <Button
                                variant="warning"
                                size="lg"
                                onClick={this.handleClick}
                                disabled={this.state.continueButton2}
                            >
                                <ArrowLeft />
                            </Button>
                        </Col>
                    </Col>
                </Row>

                {/* Fill table */}
                <Row className="mt-3">
                        <h5>{this.props.labData.task1.progress[3]}</h5>
                        <Table striped bordered hover className="text-center">
                            <thead >
                                <tr>
                                    <th dangerouslySetInnerHTML={{ __html: this.props.labData.task2.table[1] }}></th>
                                    <th dangerouslySetInnerHTML={{ __html: this.props.labData.task2.table[2] }}></th>
                                    <th dangerouslySetInnerHTML={{ __html: this.props.labData.task2.table[3] }}></th>
                                    <th dangerouslySetInnerHTML={{ __html: this.props.labData.task2.table[4] }}></th>
                                    <th dangerouslySetInnerHTML={{ __html: this.props.labData.task2.table[5] }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <FormControl type="text" />
                                    </td>
                                    <td>
                                        <FormControl type="text" />
                                    </td>
                                    <td>
                                        <FormControl type="text" />
                                    </td>
                                    <td>
                                        <FormControl type="text" />
                                    </td>
                                    <td>
                                        <FormControl type="text" />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
            </Container>
        )
    }
}
