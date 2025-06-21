import React from "react"
import type { IBook } from "../../Model/IBook";
import Book from '../Book/Book'

interface BookListProps {
    books: IBook[]
}

const BookList: React.FC<BookListProps> = ({ books }) => {


    return (
        <div className="books">
            {books.length > 0 ?
                books.map(({ title, author }) => <Book title={title} author={author} ></Book>) :
                <p>Тут немає книжечок.</p>
            }
        </div>
    )
};

export default BookList;
