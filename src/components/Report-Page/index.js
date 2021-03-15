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

export default class Index extends Component {
    static contextType = DataContext; 
    constructor(props){
        super(props);
        this.state = {
            odpCount:[],
        }
    
    }

    fetchODP = () => {
        fetch('http://103.135.5.242/backend-app/count-odp.php')
        .then(response => {
            response.json().then(function(data) {
                if(data.success === 1){
                    this.setState({
                        odpCount:data.countodp.reverse(),
                    });
                } 
                else{
                    this.context.post_show(false);
                }               
            }.bind(this));
        })
        .catch(error => {
            console.log(error);
        });
    }

    componentDidMount(){
        this.fetchODP();
    }

    render() {
        var {odpCount} = this.state;

        return (
            <div className="reportPage">
                <Container className="mt-5">
                    <Row className="reportTitle mb-3">
                        <h1>Report</h1>
                    </Row>
                    <Row className="mb-5 py-5 text-center odpAmnt">
                        <Col>
                            <h5>ODP Total</h5>
                        </Col>
                        <Col>
                            {
                                odpCount.map(cnt =>(
                                    <h5 key={cnt.ODP_ID}>{cnt.JumlahODP}</h5>
                                ))
                            }
                        </Col>
                    </Row>
                    <Row className="reportMap">
                        <h3>ODP Mapping</h3>
                        <Map /> 
                    </Row>
                    <Row className="mb-5 reportData">
                        <Col className="text-center d-flex align-items-center">
                            <h3>ODP Classification</h3>
                        </Col>
                        <Col>
                            {
                                odpCount.map(cnt =>( 
                                    <Data key={cnt.ODP_ID} ODPcnt={cnt.JumlahODP}/> 
                                ))
                            }
                        </Col>
                    </Row>
                    <Row className="reportStandby">
                        <h3>Standby ODP</h3>
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <th scope="row">Standby</th>
                                    {
                                        odpCount.map(cnt =>(
                                            <td key={cnt.ODP_ID}>{cnt.StandbyPort} port</td>
                                        ))
                                    }
                                </tr>
                                {/* <tr>
                                    <th scope="row">Cost</th>
                                    <td>PSB / day</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </Row>
                </Container>
            </div>
        )
    }
}
