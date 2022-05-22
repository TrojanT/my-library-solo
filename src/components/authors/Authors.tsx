import React from "react";
import {Row} from "react-bootstrap";
import AuthorTitle from "./AuthorTitle";
import AuthorList from "./AuthorList";
import AddAuthor from "./AddAuthor";

const Authors: React.FC = () => {
    return (
        <Row className='author-section'>
            <AuthorTitle/>
            <AuthorList/>
            <AddAuthor/>
        </Row>
    )
}

export default Authors;