import React, { Component } from 'react'
import { Container, Table } from 'react-bootstrap'

import { solidDensityTable } from '../recources/labData'

export default class SolidDensityTable extends Component {
    render() {
        return (
            <Container>
                <Table striped bordered hover className="text-center">
                    <thead>
                        <tr>
                            <th>{solidDensityTable.solid}</th>
                            <th dangerouslySetInnerHTML={{ __html: solidDensityTable.density }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{solidDensityTable[11]}</td>
                            <td>{solidDensityTable[21]}</td>
                        </tr>
                        <tr>
                            <td>{solidDensityTable[12]}</td>
                            <td>{solidDensityTable[22]}</td>
                        </tr>
                        <tr>
                            <td>{solidDensityTable[13]}</td>
                            <td>{solidDensityTable[23]}</td>
                        </tr>
                        <tr>
                            <td>{solidDensityTable[14]}</td>
                            <td>{solidDensityTable[24]}</td>
                        </tr>
                        <tr>
                            <td>{solidDensityTable[15]}</td>
                            <td>{solidDensityTable[25]}</td>
                        </tr>
                        <tr>
                            <td>{solidDensityTable[16]}</td>
                            <td>{solidDensityTable[26]}</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        )
    }
}
