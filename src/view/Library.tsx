import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Welcome from "../components/Welcome";
import ReadingArea from "../components/ReadingArea";
import Footer from "../components/Footer";

const Library: React.FC = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col xs={12}>
                    <Welcome/>
                </Col>
                <Col xs={12}>
                    <ReadingArea/>
                </Col>
                <Col xs={12}>
                    <Footer/>
                </Col>
            </Row>
        </Container>
    )
}

export default Library;