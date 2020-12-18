// Dependencies
import React from 'react'
import { NavLink } from 'react-router-dom'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// Internals
import ImgBg from 'assets/timj-ots0EOYuGtU-unsplash.jpg'
import 'components/Home-Page/index.css'

export default function index() {
    return (
        <div>
            <img src={ImgBg} alt="BgImg" className="imgBg"></img>
            <div className=" YourThingsApp">
                <h1>YourThings</h1>
                {/* <div>
                    <NavLink className="btn" to="/AdminPage">Admin</NavLink>
                </div> */}
                <div>
                    <NavLink className="btn" to="/ReportPage">Report</NavLink>
                </div>
                <div>
                    <NavLink className="btn" to="/FieldDataPage">Field Data</NavLink>
                </div> 
            </div>
            <div className="lgout">
                <NavLink to="/">Log Out</NavLink> 
            </div>
        </div>
    )
}
