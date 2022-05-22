import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Welcome from "../components/Welcome";
import Authors from "../components/authors/Authors";

const Library: React.FC = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col xs={12}>
                    <Welcome/>
                </Col>
                <Col xs={6} className='ps-5'>
                    Books
                </Col>
                <Col xs={6} className='pe-5'>
                    <Authors/>
                </Col>
            </Row>
        </Container>
    )
}

export default Library;