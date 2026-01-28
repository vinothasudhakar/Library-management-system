import { useNavigate } from "react-router-dom";
import type { KeyboardEvent } from "react";
import type { Book } from "../types/book";


const BookCard = ({ book }:{book: Book}) => {
  const navigate = useNavigate();

  const handleActivate = () => {
    navigate(`/book/${book.id}`);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleActivate();
    }
  };

  return (
    <article
      className="book-card"
      role="link"
      tabIndex={0}
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
    >
      <img
        className="book-card__image"
        src={book.image}
        alt={`Cover of ${book.title}`}
      />

      <h3 className="book-card__title">
        {book.title}
      </h3>

      <p className="book-card__category">
        Category: {book.category}
      </p>

      <p className="book-card__author">
        Author: {book.author}
      </p>

      <p className={`book-card__status ${
          book.available
            ? "book-card__status--available"
            : "book-card__status--unavailable"
        }`}
      >
        Status: {book.available ? "Available" : "Not Available"}
      </p>
    </article>
  );
};

export default BookCard;
