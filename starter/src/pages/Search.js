import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { search } from "../BooksAPI";
import BookList from "../components/BookList";

const SearchPage = ({ books, updateBookShelf }) => {
  const [query, setQuery] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  useEffect(() => {
    const searchBooks = async () => {
      const res = await search(query, 10);

      if (res?.items) {
        setSearchedBooks([]);
      } else {
        res.forEach((r) => {
          const book = books.find((b) => b.id === r.id);
          if (book) {
            r.shelf = book.shelf;
          } else {
            r.shelf = "none";
          }
        });

        setSearchedBooks(res);
      }
    };

    if (query.length !== 0) searchBooks();
  }, [query]);

  const handleChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);
    setSearchedBooks([]);
  };

  return (
    <div className="app">
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              onChange={handleChange}
              value={query}
            />
          </div>
        </div>
        {searchedBooks && (
          <div className="search-books-results">
            <BookList
              books={searchedBooks}
              category={"Search books"}
              updateBookShelf={updateBookShelf}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
