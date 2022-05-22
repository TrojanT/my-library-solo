import React from "react";
import {Row} from "react-bootstrap";
import AuthorTitle from "./AuthorTitle";
import AuthorList from "./AuthorList";
import AddAuthor from "./AddAuthor";
import Swal from "sweetalert2";

const Authors: React.FC = () => {

    const handleOnDeleteAuthorClick = (index: number) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Yes, delete it!'
        })
        console.log(index)
    }

    return (
        <Row className='author-section'>
            <AuthorTitle/>
            <AuthorList onDeleteClick={handleOnDeleteAuthorClick}/>
            <AddAuthor/>
        </Row>
    )
}

export default Authors;