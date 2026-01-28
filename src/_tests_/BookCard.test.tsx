
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookCard from '../components/BookCard';
import "@testing-library/jest-dom";

const mockBook = {
  id: 1,
  title: 'Test Book',
  author: 'Test Author',
  description:"Hello",
  available: true,
  image: 'https://example.com/image.jpg',
  category: 'Test Category',
};

describe('BookCard', () => {
  it('renders the book details correctly', () => {
    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );
    expect(screen.getByText('Test Book')).toBeInTheDocument();
    expect(screen.getByText('Category: Test Category')).toBeInTheDocument();
    expect(screen.getByText('Author: Test Author')).toBeInTheDocument();
    expect(screen.getByText('Status: Available')).toBeInTheDocument();
  });

  it('navigates when the book card is clicked', () => {
    render(
      <BrowserRouter>
        <BookCard book={mockBook} />
      </BrowserRouter>
    );

    const bookCard = screen.getByRole('link');
    fireEvent.click(bookCard);

  });
});
