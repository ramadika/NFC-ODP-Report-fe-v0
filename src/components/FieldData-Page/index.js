// Dependencies
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { NavLink } from 'react-router-dom'
// Internals
import {DataContext} from 'components/Context'
import 'components/FieldData-Page/index.css'

export default class indexClass extends Component {
    static contextType = DataContext;
    state = {
        number: 0,
    }
    
    render() {
        const {products} = this.context;
        var {number} = this.state;

        return (
            <div className="fDataPage">
                <Container className="mt-5">
                    <Row className="fDataTitle mb-3">
                        <h1>Field Data</h1>
                    </Row>
                    <Row className="fData">
                        <div className="table-responsive">
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">ODP ID</th>
                                        <th scope="col">Kapasitas</th>
                                        <th scope="col">Optical Power</th>
                                        <th scope="col">GIS</th>
                                        <th scope="col">Tanggal Instalasi</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map(prod =>(
                                            <tr key={prod.id}>
                                                <th scope="row">{number += 1}</th>
                                                <td>{prod.ODP_ID}</td>
                                                <td>{prod.Kapasitas} port</td>
                                                <td>{prod.Optical_power} db</td>
                                                <td><a href={prod.href}>{prod.lat} °, {prod.long} °</a></td>
                                                <td>{prod.Tanggal_instalasi}</td>
                                                <td><NavLink className="btn btn-outline-info" to={`/DetailPage/${prod.ODP_ID}`}>Detail</NavLink></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}
