// Dependencies
import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// Internals
import 'components/Baselayout/Header/index.css'

export default function index() {
    return (
        <div className="Nav-Bar">
            <Navbar expand="lg">
                <NavLink className="navbar-brand" to="/HomePage">YourThings</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <NavLink className="nav-link" to="/AdminPage">Admin</NavLink> */}
                        <NavLink className="nav-link" to="/ReportPage">Report</NavLink> 
                        <NavLink className="nav-link" to="/FieldDataPage">Field Data</NavLink>
                    </Nav>
                    <Nav className="lout">
                        <NavLink className="nav-link" to="/">Log Out</NavLink>  
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
