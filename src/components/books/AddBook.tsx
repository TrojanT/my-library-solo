import React from "react";
import {Col, Row} from "react-bootstrap";
import {Plus} from "react-feather";

type AddBookProps = {
    onAddBookClicked: () => void
}
const AddBook: React.FC<AddBookProps> = (props) => {
    return (
        <Col xs={12} className='add-book d-flex align-items-center mt-1 mb-4' onClick={props.onAddBookClicked}>
            <Plus className='feather-plus me-2'/>
            <label>Add Book</label>
        </Col>
    );
}

export default AddBook;