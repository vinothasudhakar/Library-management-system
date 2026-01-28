import { useParams, Link } from "react-router-dom";
import { books } from "../data/books";
import type { Book } from "../types/book";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const book: Book | undefined = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <p role="alert" aria-live="assertive">
        Book not found
      </p>
    );
  }

  return (
    <section className="book-details" aria-labelledby="book-details-title">
      <div className="book-details__content" >
        <h1 id="book-details-title" >
          {book.title}
        </h1>

        <img
          src={book.image}
          alt={`Cover of ${book.title}`}
          className="book-details__image"
        />

        <p>
          <strong>Author:</strong> {book.author}
        </p>

        <p className="book-details__description">
          <strong>Description:</strong> {book.description}
        </p>

        <p
          className={`book-details__status ${
            book.available ? "book-details__status--available" : "book-details__status--unavailable"
          }`}
          role="status"
          aria-live="polite"
        >
          <strong>Status:</strong> {book.available ? "Available" : "Not Available"}
        </p>

        <Link to="/" className="book-details__back-link" >
          ← Back to book list
        </Link>
      </div>
    </section>
  );
};

export default BookDetails;
