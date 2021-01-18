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
        number: 0,
        filterODP: [],
        ODPSelected: [],
    }

    getProduct = () =>{
        fetch('http://localhost/backend-app/all-port.php')
        .then(response => {
            response.json().then(function(data) {
                if(data.success === 1){
                    this.setState({
                        filterODP:data.odp.reverse(),
                    });
                    if(this.props.match.params.id){
                        const data = this.state.filterODP.filter(item =>{
                            return item.ODP_ID === this.props.match.params.id
                        })
                        this.setState({
                            filterODP: data
                        })

                        const dataSel = this.context.Allodp.filter(item =>{
                            return item.ODP_ID === this.props.match.params.id
                        })
                        this.setState({
                            ODPSelected: dataSel
                        })
                    }else{
                        alert("Empty")
                    }   
                } 
                else{
                    alert("Empty")
                }               
            }.bind(this));
        })
        .catch(error => {
            console.log(error);
        });
    };

    componentDidMount(){
        this.getProduct();
    }

    render() {
        const {filterODP, ODPSelected} = this.state;
        var {number} = this.state;

        return (
            <div className="detailPage">
                <Container className="mt-5">
                    <Row className="detailTitle mb-3">
                        {
                            ODPSelected.map(item =>(
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
                                        <th scope="col">GIS</th>
                                        <th scope="col">Tanggal Instalasi</th>
                                        <th scope="col">Klasifikasi ODP</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        ODPSelected.map(item =>(
                                            <tr key={item.id}>
                                                <td>{item.Kapasitas} port</td>
                                                <td><a target="_blank" rel="noopener noreferrer" href={item.GIS_href}>{item.Latitude} °, {item.Longitude} °</a></td>
                                                <td>{item.Tanggal_Instalasi}</td>
                                                <td>{item.Klasifikasi_Nama}</td>
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
                                <tbody>
                                    {
                                        filterODP.map(sub=>(
                                            <tr key={sub.Port_ID}>
                                                <th scope="row">{number += 1}</th>
                                                <td>{sub.ID_Pelanggan}</td>
                                                <td>{sub.Alamat}</td>
                                                <td>{sub.Tanggal_Instalasi}</td>
                                                <td>{sub.Layanan}</td>
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
