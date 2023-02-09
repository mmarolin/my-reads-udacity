import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
