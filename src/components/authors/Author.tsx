import React from "react";
import {Col, Row} from "react-bootstrap";
import {Edit, Trash2} from "react-feather";

type AuthorProps = {
    num: number
    authorName: string
    onDeleteClick: (indexToDelete: number) => void
    onAuthorUpdateClick: (indexToUpdate: number) => void
}

const Author: React.FC<AuthorProps> = (props) => {

    const {num, authorName} = props

    return (
        <Row>
            <Col md={9} xs={8}>
                <label>{num}. {authorName}</label>
            </Col>
            <Col md={3} xs={4} className='d-flex justify-content-end align-items-center'>
                <Edit className='icon text-warning me-xl-3 me-lg-3 me-lg-3 ms-xl-0 ms-lg-0 me-3'
                      onClick={() => props.onAuthorUpdateClick(num - 1)}/>
                <Trash2 className='icon text-danger me-xl-3 me-lg-3 ms-xl-0 ms-lg-0 ms-2'
                        onClick={() => props.onDeleteClick(num - 1)}/>
            </Col>
        </Row>
    )
}

export default Author;