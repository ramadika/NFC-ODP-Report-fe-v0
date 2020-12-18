// Dependencies
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// Internals
import 'components/FieldData-Page/DetailField-Page/index.css'

export default function index() {
    var latitude = -6.2773911;
    var longitude = 107.12830389999999;
    var GIS = `https://www.google.com/maps/?q=${latitude},${longitude}`;

    return (
        <div className="detailPage">
            <Container className="mt-5">
                <Row className="detailTitle mb-3">
                    <h1>Detail ODP - E2000020271202362150D3561</h1>
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
                                <tr>
                                    <td>8 port</td>
                                    <td>-19 db</td>
                                    <td><a href={GIS}>-6.2773911 °, 107.12830389999999 °</a></td>
                                    <td>2020-11-18</td>
                                </tr>
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
