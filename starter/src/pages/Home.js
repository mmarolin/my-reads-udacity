import "../App.css";

import { Link } from "react-router-dom";
import BookList from "../components/BookList";

const HomePage = ({ books, updateBookShelf }) => {
  const readBooks = books.filter((b) => b.shelf === "read");
  const currentlyReadingBooks = books.filter(
    (b) => b.shelf === "currentlyReading"
  );
  const wantToReadBooks = books.filter((b) => b.shelf === "wantToRead");

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookList
            books={currentlyReadingBooks}
            category={"Currently reading"}
            updateBookShelf={updateBookShelf}
          />
          <BookList
            books={wantToReadBooks}
            category={"Want to read"}
            updateBookShelf={updateBookShelf}
          />
          <BookList
            books={readBooks}
            category={"Read"}
            updateBookShelf={updateBookShelf}
          />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
