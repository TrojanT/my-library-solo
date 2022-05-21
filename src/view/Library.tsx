import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Welcome from "../components/Welcome";

const Library: React.FC = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col xs={12}>
                    <Welcome/>
                </Col>
            </Row>
        </Container>
    )
}

export default Library;