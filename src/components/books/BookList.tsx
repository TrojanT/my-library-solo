import React, {useState} from "react";
import {IBook} from "../../types/libraryTypes";
import {Col} from "react-bootstrap";
import Book from "./Book";

const BookList: React.FC = () => {

    const initBooks: IBook[] = [
        {title: 'Book 1'},
        {title: 'Book 2'},
        {title: 'Book 3'}
    ]

    const [books] = useState(initBooks);

    const renderBooks = () => {
        return books.map((book: IBook,index: number) =>
            <li className='book py-2' key={index}><Book num={index+1} bookName={book.title}/></li>);
    }

    return (
        <Col xs={12} className='mt-3'>
            {books.length === 0 && <label className='empty-label'>No books listed here.</label>}
            <ul className='list-unstyled'>
                {renderBooks()}
            </ul>

        </Col>
    )
}

export default BookList;