// Dependencies
import React,{Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Redirect } from 'react-router-dom'
import ImgBG from 'assets/thomas-jensen-h3vT1Kp0FxA-unsplash.jpg'
import { PostData } from 'components/Login-Page/Post-Data'
// Internals
import 'components/Login-Page/index.css'
import {DataContext} from 'components/Context'

export default class Index extends Component{
    static contextType = DataContext; 
    constructor(){
        super();
        this.state = {
            Username: '',
            Password: '',
            redirectToReferrer: false,
            count: 0
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login() {
        if(this.state.Username && this.state.Password){ 
            PostData(this.state).then((result) => {
                let responseJson = result;
                console.log(result);
                if(responseJson.user){
                    alert(responseJson.msg);  
                    sessionStorage.setItem('user',JSON.stringify(responseJson));
                    this.setState({
                        redirectToReferrer: true,
                        count: 1
                    });
                }else {
                    alert(responseJson.msg);
                }
            });
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    render(){

        if (this.state.redirectToReferrer ){
            if (sessionStorage.getItem('user')){
                return (
                    <Redirect to={'/HomePage'}/>
                )
            }
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
                            <div className="inputLogin-custom">
                                <h6 className="usPsLog">Username</h6>
                                <input type="text" name="Username" onChange={this.onChange} className="form-control" placeholder="Username"/>
                                <h6 className="usPsLog">Password</h6>
                                <input type="password" name="Password" onChange={this.onChange} className="form-control" placeholder="Password"/>
                                <input className=" btnLogin-custom mb-5" type="submit" value="Sign in" onClick={this.login}></input>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div> 
        );
    }
}