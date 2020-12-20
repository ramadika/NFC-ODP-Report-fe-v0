// Dependencies
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// Internals
import Map from 'components/Report-Page/Maps'
import Data from 'components/Report-Page/Classification'
import {DataContext} from 'components/Context'
import 'components/Report-Page/index.css'

export default class indexClass extends Component {
    static contextType = DataContext;

    render() {
        const {products} = this.context;
        var ODPcount = products.length;

        return (
            <div className="reportPage">
                <Container className="mt-5">
                    <Row className="reportTitle mb-3">
                        <h1>Report</h1>
                    </Row>
                    <Row className="mb-5 py-5 text-center odpAmnt">
                        <Col>
                            ODP Total
                        </Col>
                        <Col>
                            {ODPcount}
                        </Col>
                    </Row>
                    <Row className="reportMap">
                        <h3>Sebaran ODP</h3>
                        <Map />
                    </Row>
                    <Row className="mb-5 reportData">
                        <Col className="text-center d-flex align-items-center">
                            <h3>Klasifikasi ODP</h3>
                        </Col>
                        <Col>
                            <Data />
                        </Col>
                    </Row>
                    <Row className="reportStandby">
                        <h3>Standby ODP</h3>
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <th scope="row">Standby</th>
                                    <td>3200 port</td>
                                </tr>
                                <tr>
                                    <th scope="row">Cost</th>
                                    <td>PSB / day</td>
                                </tr>
                            </tbody>
                        </table>
                    </Row>
                </Container>
            </div>
        )
    }
}
