import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { PDFDownloadLink } from '@react-pdf/renderer';
import { generalKz } from '../recources/labData'
import ConclusionPdf from './ConclusionPdf';

export default class Conclusion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fio: '',
            conclusion: ''
        };
    }

    handleChange = (event) => {
        var value = event.target.value;
        if (event.target.name === "fio") {
            this.setState({
                fio: value
            });
        } else if (event.target.name === "conclusion") {
            this.setState({
                conclusion: value
            });
        }
    }

    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicFullname">
                    <Form.Label>{generalKz.fullname}</Form.Label>
                    <Form.Control name="fio" type="textarea" value={this.state.fio} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicConclusion">
                    <Form.Label>{generalKz.conslusion}</Form.Label>
                    <Form.Control name="conclusion" as="textarea" rows="3" value={this.state.conclusion} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicFinishButton" >
                    <Button variant="success">
                        <PDFDownloadLink
                            document={<ConclusionPdf data={this.state} />}
                            fileName="report.pdf"
                            style={{
                                color: '#fff',
                                backgroundColor: '#28a745',
                                borderColor: '#28a745'
                            }}
                        >
                            {generalKz.finish}
                        </PDFDownloadLink></Button>
                </Form.Group>
            </Form >
        )
    }
}
