import React, {useState} from "react";
import {Row} from "react-bootstrap";
import BookTitle from "./BookTitle";
import BookList from "./BookList";
import AddBook from "./AddBook";
import BookForm from "./BookForm";
import {IBook, SelectAuthorOption} from "../../types/libraryTypes";

type BookProps = {
    authorNameArray: SelectAuthorOption[]
}

const Books: React.FC<BookProps> = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [books, setBooks]= useState<IBook[] | null>(null);

    const handleAddBook = () => {
        setIsFormVisible(true);
    }

    const handleBookCreate = (newBook: IBook) => {
        const allBooks: IBook[] = books ? books.slice() : [];
        allBooks.push(newBook);
        setBooks(allBooks);
    }

    const handleCloseForm = () => {
        setIsFormVisible(false);
    }

    return (
        <Row className='book-section'>
            <BookTitle/>
            <BookList books={books}/>
            <AddBook onAddBookClicked={handleAddBook}/>
            {isFormVisible && <BookForm onBookCreated={handleBookCreate} onCloseClick={handleCloseForm}
                                        selectAuthorNameArray={props.authorNameArray}/>}
        </Row>
    );
}

export default Books;