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
        fetch('http://103.135.5.242/backend-app/all-port.php')
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

                        const dataSel = this.context.Allodp.filter(item =>{
                            return item.ODP_ID === this.props.match.params.id
                        })

                        if(data.length === 0){
                            alert("Empty")
                        }
                        this.setState({
                            ODPSelected: dataSel,
                            filterODP: data
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
                                <h1 key={item.ODP_ID}>ODP - {item.ODP_ID}</h1>
                            ))
                        }
                    </Row>
                    <Row className="detailData">
                        <div className="table-responsive">
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Capacity</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Installation Date</th>
                                        <th scope="col">ODP Classification</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        ODPSelected.map(item =>(
                                            <tr key={item.ODP_ID}>
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
                                        <th scope="col">Customer ID</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Installation Date</th>
                                        <th scope="col">Service</th>
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
