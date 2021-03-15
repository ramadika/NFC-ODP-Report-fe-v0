// Dependencies
import React,{Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Redirect } from 'react-router-dom'
import Axios from 'axios';
import ImgBG from 'assets/thomas-jensen-h3vT1Kp0FxA-unsplash.jpg'
// import { PostData } from 'components/Login-Page/Post-Data'
// Internals
import 'components/Login-Page/index.css'
import {DataContext} from 'components/Context'

export default class Index extends Component{
    static contextType = DataContext; 
    constructor(){
        super();
        this.state = {
            redirectToReferrer: false,
            count: 0
        };
    }

    insertUser = (event) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://localhost/backend-app/login.php',{
            Username: this.Username.value,
            Password: this.Password.value
        })
        .then(function ({data}) {
            if(data.success === 1){;
                this.setState({
                    redirectToReferrer: true,
                    count: 1
                });
                alert(data.msg)
            }
            else{
                alert(data.msg)
            }
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        });
    }

    render(){

        if (this.state.redirectToReferrer ){
            return (
                <Redirect to={'/HomePage'}/>
            )
        } 

        return(
            <div className="fullPage">
                <img src={ImgBG} alt="BG" width="100" className="imgBG"></img>
                <Container className="containLogin">
                    <Row className="Login-custom">
                        <Col className="wlcmCol">
                            <h2>Hey You!</h2>
                            <h6>Enter your account and Make changes for your company</h6>
                            <h4>YourThings</h4>
                        </Col>
                        <Col className="lgnCol text-left">
                            <h2 className="mb-3">Login</h2>
                            <form  onSubmit={this.insertUser} className="form-account">
                                <div className="inputLogin-custom">

                                    <h6 className="usPsLog">Username</h6>
                                    <input type="text" name="Username" ref={(val) => this.Username = val} className="form-control" placeholder="Username" />

                                    <h6 className="usPsLog">Password</h6>
                                    <input type="password" name="Password" ref={(val) => this.Password = val} className="form-control" placeholder="Password"/>

                                    <input type="submit" value="Sign in"  className=" btnLogin-custom mb-5"></input>
                                    
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div> 
        );
    }
}