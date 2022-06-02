import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Authors from "../components/authors/Authors";
import Books from "./books/Books";

const ReadingArea: React.FC = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={{span: 6, order: 1}} xs={{span: 12, order: 2}} className='px-xl-4 px-lg-4 px-2'>
                    <Books/>
                </Col>

                <Col md={{span: 6, order: 2}} xs={{span: 12, order: 1}} className='px-xl-4 px-lg-4 px-2'>
                    <Authors/>
                </Col>
            </Row>
        </Container>
    );
}

export default ReadingArea;