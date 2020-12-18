// Dependencies
import React, { useState, useEffect, useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// Internals
import {DataContext} from 'components/Context'
import 'components/FieldData-Page/DetailField-Page/index.css'

export default function Index(props) {
    const context = useContext(DataContext);

    const [theProd, setTheProd] = useState([]);
    
    const getProduct = () =>{
        if(props.match.params.id){
            const res = context.products;
            const data = res.filter(item =>{
                return item.ODP_ID === props.match.params.id
            })
            setTheProd(data);
        }
    }
    useEffect(() => {
        getProduct();
    })

    return (
        <div className="detailPage">
            <Container className="mt-5">
                <Row className="detailTitle mb-3">
                    {
                        theProd.map(item =>(
                            <h1>Detail ODP - {item.ODP_ID}</h1>
                        ))
                    }
                </Row>
                <Row className="detailData">
                    <div className="table-responsive">
                        <table class="table table-borderless">
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
                                    theProd.map(item =>(
                                        <tr>
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
                    <div className="table-responsive">
                        <table class="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">ID Pelanggan</th>
                                    <th scope="col">Alamat</th>
                                    <th scope="col">Tanggal Instalasi</th>
                                    <th scope="col">Layanan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>CUST1</td>
                                    <td>Jababeka XIV</td>
                                    <td>2020-11-18</td>
                                    <td>Triple Play</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>CUST2</td>
                                    <td>Mekarmukti</td>
                                    <td>2020-11-04</td>
                                    <td>Single Play</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>CUST3</td>
                                    <td>Harja Mekar</td>
                                    <td>2020-12-01</td>
                                    <td>Triple Play</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
