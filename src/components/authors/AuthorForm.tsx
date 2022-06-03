import React, {FormEvent, useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import {IAuthor} from "../../types/libraryTypes";

type AuthorFormProps = {
    onCloseClick: () => void
    onAuthorCreated: (newAuthor: IAuthor) => void
    authorToUpdate: IAuthor | null
    onAuthorUpdated: (updatedAuthor: IAuthor) => void
}

const AuthorForm: React.FC<AuthorFormProps> = (props) => {

    const {authorToUpdate} = props;
    const [authorName, setAuthorName] = useState<string | null> (null);
    const [Message, setMessage] = useState<string | null>(null);
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        if (!authorToUpdate) {
            setAuthorName(null);
            return;
        }

        setAuthorName(authorToUpdate.name);
    }, [authorToUpdate])

    const handleAuthorNameChange = (name: string) => {
        setAuthorName(name);
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);

        if (!authorName) {
            return;
        }

        if (authorToUpdate) {
            const updatedAuthor: IAuthor = {...authorToUpdate, name: authorName};
            props.onAuthorUpdated(updatedAuthor);
            setMessage("Author updated successfully !")
            setTimeout(() => {
                setMessage(null);
            }, 1800)
            return;
        }

        const author: IAuthor = {name: authorName};
        props.onAuthorCreated(author);
        setMessage("Author added successfully !")
        setAuthorName(null);
        setTimeout(() => {
            setMessage(null);
        }, 1800);
    }

    return (
        <Col xs={9} className='author-form mt-2 pb-4'>
            <Row>
                <Col xs={12} className="alert">
                    {Message && <Row> {Message} </Row>}
                </Col>

                <Col xs={10}>
                    <h3>{authorToUpdate ? 'Update' : 'Create'} Author</h3>
                </Col>
                <Col xs={2} className='d-flex align-items-center justify-content-end'>
                    <XCircle className="x-circle" onClick={props.onCloseClick}/>
                </Col>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Col xs={{span: 11, offset: 1}}>

                            <Form.Group className="mt-3 mb-4" controlId="formBasicAuthorName">
                                <Form.Label>Name of Author</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    value={authorName ? authorName : ''}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        handleAuthorNameChange(e.target.value)}/>
                                <Form.Control.Feedback type="invalid">
                                    Author Name is required.
                                </Form.Control.Feedback>
                            </Form.Group>

                    </Col>
                    <Col xs={12} className='text-end mt-2'>
                        <Button type="submit">{authorToUpdate ? 'Update' : 'Create'}</Button>
                    </Col>
                </Form>
            </Row>
        </Col>
    )
}

export default AuthorForm;