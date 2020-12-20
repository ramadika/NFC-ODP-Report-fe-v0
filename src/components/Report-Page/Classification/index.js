// Dependencies
import React, { Component } from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// Internals
import {DataContext} from 'components/Context'

export default class indexClass extends Component {
    static contextType = DataContext;

    render() {
        const {klasifikasiODP} = this.context;

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
                        <table className="table table-borderless">
                            <tbody>
                                {
                                    klasifikasiODP.map(klasifikasi =>(
                                        <tr key={klasifikasi.KlasifikasiODP_ID}>
                                            <th scope="row">{klasifikasi.Klasifikasi_Nama}</th>
                                            <td>{klasifikasi.Jumlah_ODP} ODP</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </div>
        )
    }
}
