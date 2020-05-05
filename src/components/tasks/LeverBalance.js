import React, { Component } from 'react'
import { Container, Table, FormControl, Col, Row, Image } from 'react-bootstrap'

import lever from '../../assets/lab9/lever.png'
import lever1 from '../../assets/lab9/lever1.png'
import lever2 from '../../assets/lab9/lever2.png'
import lever3 from '../../assets/lab9/lever3.png'
import lever4 from '../../assets/lab9/lever4.png'
import lever5 from '../../assets/lab9/lever5.png'
import cargo from '../../assets/lab9/cargo.png'

import '../../styles/styles.css'
import { generalKz } from '../../recources/labData'

export default class LeverBalance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lever: lever,
            cargo1: cargo,
            cargo2: cargo,
            cargo3: cargo,
            cargo4: cargo,
            cargo5: cargo
        };
    }

    addCargo = event => {
        event.preventDefault()
        event.persist()

        switch (event.target.name) {
            case 'cargo1':
                this.setState({
                    cargo1: ''
                })
                break;
            case 'cargo2':
                this.setState({
                    cargo2: ''
                })
                break;
            case 'cargo3':
                this.setState({
                    cargo3: ''
                })
                break;
            case 'cargo4':
                this.setState({
                    cargo4: ''
                })
                break;
            case 'cargo5':
                this.setState({
                    cargo5: ''
                })
                break;
            default:
                break;
        }

        if (this.state.lever === lever) {
            this.setState({
                lever: lever1
            })
        } else if (this.state.lever === lever1) {
            this.setState({
                lever: lever2
            })
        } else if (this.state.lever === lever2) {
            this.setState({
                lever: lever3
            })
        } else if (this.state.lever === lever3) {
            this.setState({
                lever: lever4
            })
        } else if (this.state.lever === lever4) {
            this.setState({
                lever: lever5
            })
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
                <Row>
                    <Col md="5">
                        <h5>{this.props.labData.task.progress[1]}</h5>
                        <h5>{this.props.labData.task.progress[2]}</h5>
                        <h5>{this.props.labData.task.progress[3]}</h5>
                        <h5>{this.props.labData.task.progress[4]}</h5>
                    </Col>
                    <Col md="7" className="text-center m-auto ">
                        <Image style={{ maxHeight: 400 }} fluid alt="lever" className="w-100" src={this.state.lever} />
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col >
                        {this.state.cargo1 && <Image alt="cargo1" name="cargo1" src={this.state.cargo1} thumbnail onClick={this.addCargo} />}
                    </Col>
                    <Col >
                        {this.state.cargo2 && <Image alt="cargo2" name="cargo2" src={this.state.cargo2} thumbnail onClick={this.addCargo} />}
                    </Col>
                    <Col >
                        {this.state.cargo3 && <Image alt="cargo3" name="cargo3" src={this.state.cargo3} thumbnail onClick={this.addCargo} />}
                    </Col>
                    <Col >
                        {this.state.cargo4 && <Image alt="cargo4" name="cargo4" src={this.state.cargo4} thumbnail onClick={this.addCargo} />}
                    </Col>
                    <Col>
                        {this.state.cargo5 && <Image alt="cargo5" name="cargo5" src={this.state.cargo5} thumbnail onClick={this.addCargo} />}
                    </Col>
                </Row>
                <Row className="mt-3">
                    <h5>{this.props.labData.task.progress[5]}</h5>
                    <Table striped bordered hover className="text-center">
                        <thead>
                            <tr>
                                <th rowSpan="2">{this.props.labData.task.table.head[0]}</th>
                                <th colSpan="4">{this.props.labData.task.table.head[1]}</th>
                                <th colSpan="4">{this.props.labData.task.table.head[2]}</th>
                            </tr>
                            <tr>
                                {this.props.labData.task.table.headLeft.map((item, index) =>
                                    <th key={index} dangerouslySetInnerHTML={{ __html: item }}></th>
                                )}
                                {this.props.labData.task.table.headRight.map((item, index) =>
                                    <th key={index} dangerouslySetInnerHTML={{ __html: item }}></th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.labData.task.table.experiments.map((item, index) => (
                                <tr key={index}>
                                    <td>{item}</td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
                                    <td><FormControl type="text" /></td>
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
                <Row className="my-3">
                    <h5 dangerouslySetInnerHTML={{ __html: this.props.labData.task.progress[6] }}></h5>
                    <h5>{this.props.labData.task.progress[7]}</h5>
                    <h5>{this.props.labData.task.progress[8]}</h5>
                    <h5>{this.props.labData.task.progress[9]}</h5>
                </Row>
            </Container>
        )
    }
}
