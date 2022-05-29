import React from "react";
import {Col} from "react-bootstrap";
import {Plus} from "react-feather";

type AddAuthorProps = {
    onAddAuthorClicked: () => void
}
const AddAuthor: React.FC<AddAuthorProps> = (props) => {
    return (
        <Col xs={12} className='add-author d-flex align-items-center mt-xl-1 mb-xl-4 mt-lg-1 mb-lg-4 mt-1 mb-2'
             onClick={props.onAddAuthorClicked}>
            <Plus className='feather-plus me-2'/>
            <label>Add Author</label>
        </Col>
    )
}

export default AddAuthor;