import React, {useEffect, useState} from "react";
import {Row} from "react-bootstrap";
import BookTitle from "./BookTitle";
import BookList from "./BookList";
import AddBook from "./AddBook";
import BookForm from "./BookForm";
import {IAuthor, IBook, SelectAuthorOption} from "../../types/libraryTypes";
import Swal from "sweetalert2";

type BookProps = {
    authorNameArray: SelectAuthorOption[]
}

const Books: React.FC<BookProps> = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [books, setBooks]= useState<IBook[] | null>(null);
    const [bookIndexToUpdate, setBookIndexToUpdate] = useState<number | null>(null);
    const [bookToUpdate, setBookToUpdate] = useState<IBook | null>(null)

    const handleAddBook = () => {
        setIsFormVisible(true);
        setBookToUpdate(null);
        setBookIndexToUpdate(null);
    }

    const handleBookCreate = (newBook: IBook) => {
        const allBooks: IBook[] = books ? books.slice() : [];
        allBooks.push(newBook);
        setBooks(allBooks);
    }

    const handleCloseForm = () => {
        setIsFormVisible(false);
    }

    const handleOnDeleteBookClick = (index: number)=> {
        if (!books) {
            return;
        }
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const allBooks: IBook[] = books.slice();
                allBooks.splice(index, 1);
                setBooks(allBooks);
                Swal.fire(
                    'Deleted!',
                    'Book has been deleted successfully.',
                    'success'
                )
            }
        })
    }

    const handleOnBookUpdated = (updatedBook: IBook) => {
        if (!books || bookIndexToUpdate === null) {
            return;
        }
        const allBooks: IBook[] = books.slice();
        allBooks.splice(bookIndexToUpdate, 1, updatedBook);
        setBooks(allBooks);

    }

    const handleBookUpdateClick = (index: number) => {
        setBookIndexToUpdate(index);
    }

    useEffect(() => {
        if (!books || bookIndexToUpdate === null) {
            return;
        }

        const bookToEdit: IBook = books[bookIndexToUpdate];
        setBookToUpdate(bookToEdit);
        setIsFormVisible(true);
    }, [bookIndexToUpdate]);

    return (
        <Row className='book-section'>
            <BookTitle/>
            <BookList books={books} onDeleteClick={handleOnDeleteBookClick} onUpdateClick={handleBookUpdateClick}/>
            <AddBook onAddBookClicked={handleAddBook}/>
            {isFormVisible && <BookForm onBookCreated={handleBookCreate} onCloseClick={handleCloseForm}
                                        selectAuthorNameArray={props.authorNameArray}
                                        bookToUpdate={bookToUpdate} onBookUpdated={handleOnBookUpdated}/>}
        </Row>
    );
}

export default Books;