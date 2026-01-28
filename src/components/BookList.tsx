import { useState,useEffect } from "react";
import type { Book } from "../types/book";
import { books  } from "../data/books"; 
import BookCard from "./BookCard";
import SearchBar from "./SearchBar";

const BookList = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null); 
  const [allBooks, setAllBooks] = useState<Book[]>([]); 

  useEffect(() => {
    try {
        setLoading(true);
        setAllBooks(books);
        setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setLoading(false);
    }
  }, []);

  const filteredBooks = allBooks.filter((b: Book) => {
    const q = query.toLowerCase();
    return (
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q)
    );
  });

  if (loading) return <p>Loading books...</p>;
  if (error) return <p role="alert">{error}</p>;

  return (
    <section>
     
      <SearchBar onSearch={setQuery} />

      <p role="status" aria-live="polite" aria-atomic="true">
        {filteredBooks.length} books found
      </p>

      {filteredBooks.length === 0 && <p role="alert">No books found.</p>}

      <ul className="book-list" aria-label="List of available books">
     {filteredBooks.map((book) => (
    <li key={book.id}>
      <BookCard book={book} />
    </li>
  ))}
</ul>

    </section>
  );
};

export default BookList;
