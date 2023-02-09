import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";
import { useCallback, useEffect, useState } from "react";
import { getAll, update } from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);
  const [booksUpdated, setBooksUpdated] = useState(false);

  useEffect(() => {
    const getBooks = async () => {
      const res = await getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  useEffect(() => {
    const refetchBooks = async () => {
      const res = await getAll();
      setBooks(res);
      setBooksUpdated(false);
    };

    refetchBooks();
  }, [booksUpdated]);

  const updateBookShelf = useCallback(async (book, shelf) => {
    await update(book, shelf);
    setBooksUpdated(true);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage books={books} updateBookShelf={updateBookShelf} />}
        />
        <Route
          path="/search"
          element={
            <SearchPage books={books} updateBookShelf={updateBookShelf} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
