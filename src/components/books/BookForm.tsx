import React, {FormEvent, useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import {IAuthor, IBook, SelectAuthorOption} from "../../types/libraryTypes";
import Select from 'react-select';
import NumberFormat from 'react-number-format';

type BookFormProps = {
    onBookCreated: (newBook: IBook) => void
    onCloseClick: () => void
    selectAuthorNameArray: SelectAuthorOption[]
    bookToUpdate: IBook | null
    onBookUpdated: (updatedBook: IBook) => void
}
const BookForm: React.FC<BookFormProps> = (props) => {
    const {selectAuthorNameArray} = props;
    const {bookToUpdate} = props;

    const [validated, setValidated] = useState(false);
    const [Message, setMessage] = useState<string | null>(null);
    const [bookName, setBookName] = useState<string | null>(null)
    const [bookPrice, setBookPrice] = useState<string | null>(null)
    const [bookAuthor, setBookAuthor] = useState<IAuthor | null>(null);

    const [errBookName, setErrBookName] = useState(false);
    const [errBookPrice, setErrBookPrice] = useState(false);
    const [errBookAuthor, setErrBookAuthor] = useState(false);
    const prefix = 'Rs.'
    let index: number = 0;

    const customStyles = {
        control: (base: any) => ({
            ...base,
            height: '39.97px',
            minHeight: '39.97px',
            borderRadius: 0,
            borderColor: '#969696',
            borderWidth: '2px'


        })
    }

    useEffect(() => {
        if (!bookToUpdate) {
            setBookName(null);
            setBookPrice(null);
            setBookAuthor(null);
            return;
        }
        index = (selectAuthorNameArray.findIndex(value => value.value === bookToUpdate.author ));
        setBookName(bookToUpdate.title);
        setBookPrice(bookToUpdate.price);
        setBookAuthor(bookToUpdate.author);

    }, [bookToUpdate]);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (!bookName) {
            setErrBookName(true);
        }
        if (!bookPrice) {
            setErrBookPrice(true);
        }
        if (!bookAuthor) {
            setErrBookAuthor(true);
        }

        if (bookName && bookPrice && bookAuthor) {
            if (bookToUpdate) {
                const updatedBook: IBook = {
                    ...bookToUpdate,
                    title: bookName,
                    price: bookPrice,
                    author: bookAuthor
                };
                props.onBookUpdated(updatedBook);
                setBookName(null);
                setBookPrice(null);
                setBookAuthor(null);
                setMessage("Book updated successfully !")
                setTimeout(() => {
                    setMessage(null);
                }, 1800)
                return;
            }

            const book: IBook = {title: bookName, price: bookPrice, author: bookAuthor};
            props.onBookCreated(book);
            setMessage("Book added successfully !")
            setBookName(null);
            setTimeout(() => {
                setMessage(null);
            }, 1800);

            setBookName(null);
            setBookPrice(null);
            setBookAuthor(null);
        }
    }

    const handleBookNameChange = (name: string) => {
        setBookName(name);
    }

    const handleBookPriceChange = (price: string) => {
        setBookPrice(price);
    }

    const handleBookAuthorChange = (item: any) => {
        if (item !== null) {
            setBookAuthor(item.value);
        }
    }

    return (
        <Col xl={9} md={11} xs={12} className='book-form mt-2 pb-4'>
            <Row>
                <Col xs={12} className="alert">
                    {Message && <Row> {Message} </Row>}
                </Col>
                <Col xs={10}>
                    <h3>{bookToUpdate ? 'Update' : 'Create'} Book</h3>
                </Col>
                <Col xs={2} className='d-flex align-items-center justify-content-end'>
                    <XCircle className="x-circle" onClick={props.onCloseClick}/>
                </Col>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Col md={{span: 11, offset: 1}} xs={{span: 12, offset: 0}}>
                        <Form.Group className="mt-3" controlId="formBasicBookName">
                            <Form.Label className='form-label'>Title of the Book</Form.Label>
                            <Form.Control
                                required
                                className='form-control'
                                type="text"
                                value={bookName ? bookName : ''}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    handleBookNameChange(e.target.value)}
                            />
                            {
                                errBookName ? <label className='err-msg'>Book Name is required.</label> : ""
                            }
                        </Form.Group>

                        <Form.Group className="mt-3" controlId="formBasicBookPrice">
                            <Form.Label className='form-label'>Price</Form.Label>
                            <NumberFormat
                                required
                                className='form-control'
                                thousandsGroupStyle="thousand"
                                thousandSeparator={true}
                                decimalSeparator="."
                                prefix={prefix}
                                type="text"
                                value={bookPrice ? bookPrice : ''}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    handleBookPriceChange(e.target.value)}
                            />
                            {
                                errBookPrice ? <label className='err-msg'>Book Price is required.</label> : ""
                            }
                        </Form.Group>

                        <Form.Group controlId="formBasicAuthorName">
                            <Form.Label className='form-label mt-3'>Author</Form.Label>
                            <Select
                                defaultValue={selectAuthorNameArray[index]}
                                styles={customStyles}
                                isClearable
                                options={selectAuthorNameArray}
                                onChange={(val) => handleBookAuthorChange(val)}
                            />
                            {
                                errBookAuthor ? <label className='err-msg'>Book Author is required.</label> : ""
                            }
                        </Form.Group>

                        <Col xs={12} className='text-end mt-2'>
                            <Button type="submit">{bookToUpdate ? 'Update' : 'Create'}</Button>
                        </Col>
                    </Col>
                </Form>
            </Row>
        </Col>
    );
}

export default BookForm;