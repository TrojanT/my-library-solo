import React, {useState} from "react";
import {Row} from "react-bootstrap";
import AuthorTitle from "./AuthorTitle";
import AuthorList from "./AuthorList";
import AddAuthor from "./AddAuthor";
import Swal from "sweetalert2";
import AuthorForm from "./AuthorForm";

const Authors: React.FC = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleAddAuthor = () => {
        setIsFormVisible(true);
    }

    const handleCloseForm = () => {
        setIsFormVisible(false);
    }

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
            <AddAuthor onAddAuthorClicked={handleAddAuthor}/>
            {isFormVisible && <AuthorForm onCloseClick={handleCloseForm}/>}
        </Row>
    )
}

export default Authors;