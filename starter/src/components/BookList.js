import Book from "./Book";

const BookList = ({ books, category, updateBookShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{category}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books &&
            books.map((b) => (
              <Book book={b} updateBookShelf={updateBookShelf} />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default BookList;
