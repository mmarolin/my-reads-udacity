import { useState } from "react";
import { update } from "../BooksAPI";

const Book = ({ book, updateBookShelf }) => {
  const { title, imageLinks, authors } = book;

  const [selectedShelf, setSelectedShelf] = useState(book.shelf);

  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${
                imageLinks ? imageLinks.thumbnail : null
              }")`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              value={selectedShelf}
              onChange={(e) => {
                setSelectedShelf(e.target.value);
                updateBookShelf(book, e.target.value);
              }}
            >
              <option value="">Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  );
};

export default Book;
