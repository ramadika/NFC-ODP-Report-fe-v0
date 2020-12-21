// Dependencies
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// Internals
import {DataContext} from 'components/Context'
import 'components/FieldData-Page/DetailField-Page/index.css'

export default class Index extends Component {
    static contextType = DataContext;
    state = {
        product: [],
        number: 0,
    }

    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item =>{
                return item.ODP_ID === this.props.match.params.id
            })
            this.setState({product: data})
        }
    };

    componentDidMount(){
        this.getProduct();
    }

    render() {
        const {product} = this.state;
        var {number} = this.state;

        return (
            <div className="detailPage">
                <Container className="mt-5">
                    <Row className="detailTitle mb-3">
                        {
                            product.map(item =>(
                                <h1 key={item.id}>Detail ODP - {item.ODP_ID}</h1>
                            ))
                        }
                    </Row>
                    <Row className="detailData">
                        <div className="table-responsive">
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Kapasitas</th>
                                        <th scope="col">Optical Power</th>
                                        <th scope="col">GIS</th>
                                        <th scope="col">Tanggal Instalasi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        product.map(item =>(
                                            <tr key={item.id}>
                                                <td>{item.Kapasitas} port</td>
                                                <td>{item.Optical_power} db</td>
                                                <td><a href={item.href}>{item.lat} °, {item.long} °</a></td>
                                                <td>{item.Tanggal_instalasi}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </Row>
                    <Row className="detailCust">
                        <h3>Detail Customer</h3>
                        <div className="table-responsive">
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">ID Pelanggan</th>
                                        <th scope="col">Alamat</th>
                                        <th scope="col">Tanggal Instalasi</th>
                                        <th scope="col">Layanan</th>
                                    </tr>
                                </thead>
                                {
                                    product.map(item =>(
                                        <tbody key={item.id}>
                                            {
                                                item.Port.map(sub=>(
                                                    <tr key={sub.Port_ID}>
                                                        <th scope="row">{number += 1}</th>
                                                        <td>{sub.ID_Pelanggan}</td>
                                                        <td>{sub.Alamat}</td>
                                                        <td>{sub.Tanggal_Berlangganan}</td>
                                                        <td>{sub.Layanan}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    ))
                                }
                            </table>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}
