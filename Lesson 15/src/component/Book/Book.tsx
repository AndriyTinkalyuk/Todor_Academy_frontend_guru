import React from "react"
import type { IBook } from "../../Model/IBook";
import './Book.css'

const Book: React.FC<IBook> = ({ title, author }) => {
    return (
        <div className="book">
            <div className="book-title">{title}</div>
            <div className="book-author">{author}</div>
        </div>
    )
};

export default Book;
