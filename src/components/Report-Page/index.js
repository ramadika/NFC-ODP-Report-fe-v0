// Dependencies
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// Internals
import 'components/Report-Page/index.css'

export default function index() {
    return (
        <div>
            <Container>
                <Row>
                    <h1>Report</h1>
                </Row>
                <Row>
                    <Col>
                        ODP Total
                    </Col>
                    <Col>
                        1000
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
