// Dependencies
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// Internals
import Map from 'components/Report-Page/Maps'
import Data from 'components/Report-Page/Classification'
import Summary from 'components/Report-Page/Summary'
import {DataContext} from 'components/Context'
import 'components/Report-Page/index.css'

export default class Index extends Component {
    static contextType = DataContext; 
    constructor(props){
        super(props);
        this.state = {
            odpCount: [],
            installationDay: [],
            additionDay: [],
            dismantlingDay: [],
        }
    
    }

    fetchODP = () => {
        fetch('https://103.135.5.242/backend-app/count-odp.php')
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

    fetchinstallDay = () => {
        fetch('https://103.135.5.242/backend-app/installation-day.php')
        .then(response => {
            response.json().then(function(dayInstall) {
                if(dayInstall.success === 1){
                    this.setState({
                        installationDay:dayInstall.installDay,
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
  
    fetchadditionDay = () => {
        fetch('https://103.135.5.242/backend-app/addition-day.php')
        .then(response => {
            response.json().then(function(dayAddition) {
                if(dayAddition.success === 1){
                    this.setState({
                        additionDay:dayAddition.addDay,
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
  
    fetchdismantleDay = () => {
        fetch('https://103.135.5.242/backend-app/dismantle-day.php')
        .then(response => {
            response.json().then(function(dayDismantle) {
                if(dayDismantle.success === 1){
                    this.setState({
                        dismantlingDay:dayDismantle.dismantleDay,
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
        this.fetchinstallDay();
        this.fetchadditionDay();
        this.fetchdismantleDay();
    }

    render() {
        var {odpCount, installationDay, additionDay, dismantlingDay} = this.state;

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
                    <Row className="reportSummary">
                        <h3>ODP Summary</h3>
                    </Row>
                    <Row className="reportSummary">
                        <Col className="mr-3">
                            <h2><b>Installation / Day</b></h2>
                            {
                                installationDay.map(int =>(
                                    <h5 key={int.ODP_ID}>{int.Installation}</h5>
                                ))
                            }
                        </Col>
                        <Col className="mr-3">
                            <h2><b>Dismantle / Day</b></h2>
                            <h5>{dismantlingDay}</h5>
                        </Col>
                        <Col>
                            <h2><b>Addition / Day</b></h2>
                            {
                                additionDay.map(add =>(
                                    <h5 key={add.ODP_ID}>{add.Installation}</h5>
                                ))
                            }
                        </Col>
                        <table className="table table-borderless mt-2">
                            <tbody>
                                <Summary />  
                            </tbody>
                        </table>
                    </Row>
                </Container>
            </div>
        )
    }
}
