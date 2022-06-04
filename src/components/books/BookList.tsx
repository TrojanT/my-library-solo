import React, {useState} from "react";
import {IBook} from "../../types/libraryTypes";
import {Col} from "react-bootstrap";
import Book from "./Book";

type BookListProps = {
    books: IBook[] | null
}
const BookList: React.FC<BookListProps> = (props) => {

    const {books} = props;

    const renderBooks = () => {
        if (!books) {
            return;
        }

        return books.map((book: IBook,index: number) =>
            <li className='book py-2' key={index}><Book num={index+1} bookName={book.title}/></li>);
    }

    return (
        <Col xs={12} className='mt-3'>
            {(!books || books.length === 0) && <label className='empty-label'>No books listed here.</label>}
            <ul className='list-unstyled'>
                {renderBooks()}
            </ul>

        </Col>
    )
}

export default BookList;