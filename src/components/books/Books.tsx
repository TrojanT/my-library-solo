import React from "react";
import {Row} from "react-bootstrap";
import BookTitle from "./BookTitle";
import BookList from "./BookList";

const Books: React.FC = () => {
    return (
        <Row className='book-section'>
            <BookTitle/>
            <BookList/>
        </Row>
    );
}

export default Books;