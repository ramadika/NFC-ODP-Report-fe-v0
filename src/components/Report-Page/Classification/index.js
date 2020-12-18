// Dependencies
import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function index() {
    return (
        <div>
            <Row>
                <Col>
                    <PieChart
                        data={[
                            { title: 'Full Port', value: 50, color: '#E38627' },
                            { title: 'Medium Port', value: 20, color: '#C13C37' },
                            { title: 'Low Port', value: 20, color: '#6A2135' },
                            { title: 'Empty Port', value: 10, color: '#6a2121' },
                        ]}
                        labelPosition={50}
                    />
                </Col>
                <Col>
                    <table class="table table-borderless">
                        <tbody>
                            <tr>
                                <th scope="row">Full Port</th>
                                <td>500 ODP</td>
                            </tr>
                            <tr>
                                <th scope="row">Medium Port</th>
                                <td>200 ODP</td>
                            </tr>
                            <tr>
                                <th scope="row">Low Port</th>
                                <td>200 ODP</td>
                            </tr>
                            <tr>
                                <th scope="row">Empty Port</th>
                                <td>100 ODP</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
        </div>
    )
}
