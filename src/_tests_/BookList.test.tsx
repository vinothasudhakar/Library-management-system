import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import BookList from '../components/BookList';
import '@testing-library/jest-dom';

jest.mock('../data/books', () => ({
  books: [
    { 
      id: 1, 
      title: 'The Great Gatsby', 
      author: 'F. Scott Fitzgerald', 
      category: 'Fiction', 
      description: 'A story of the wealthy Jay Gatsby and his love for Daisy Buchanan, set in the Roaring Twenties.',
      image: 'image.jpg'
    },
    { 
      id: 2, 
      title: 'Moby Dick', 
      author: 'Herman Melville', 
      category: 'Adventure', 
      description: 'The tale of Captain Ahab’s obsessive quest to kill the white whale, Moby Dick.',
      image: 'image2.jpg'
    },
    { 
      id: 3, 
      title: '1984', 
      author: 'George Orwell', 
      category: 'Dystopian', 
      description: 'A dystopian novel about a totalitarian regime that watches and controls every aspect of the citizens’ lives.',
      image: 'image3.jpg'
    },
  ],
}));

describe('BookList Component', () => {
  it('should display the list of books', () => {
    render(
      <BrowserRouter>
        <BookList />
      </BrowserRouter>
    );
    expect(screen.getByText('The Great Gatsby')).toBeInTheDocument();
    expect(screen.getByText('Moby Dick')).toBeInTheDocument();
    expect(screen.getByText('1984')).toBeInTheDocument();
  });

 
});
