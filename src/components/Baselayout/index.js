// Dependencies
import React, { Component } from 'react'
import Header from 'components/Baselayout/Header'
import Footer from 'components/Baselayout/Footer'
// Internals

export default class index extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children} 
                <Footer />
            </div>
        )
    }
}
