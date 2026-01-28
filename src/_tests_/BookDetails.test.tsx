import { render, screen } from '@testing-library/react';
import { BrowserRouter ,useParams} from 'react-router-dom';
import BookDetails from '../pages/BookDetails';
import '@testing-library/jest-dom';
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('BookDetails Component', () => {
  it('should display book details when the book is found', () => {
    (useParams as jest.Mock).mockReturnValue({ id: '1' });

    render(
      <BrowserRouter>
        <BookDetails />
      </BrowserRouter>
    );
    expect(screen.getByText('Dune')).toBeInTheDocument();
    expect(screen.getByText('Frank Herbert')).toBeInTheDocument();
    expect(screen.getByText('Set on the desert planet Arrakis, Dune follows Paul Atreides as his family takes control of the planet that produces the valuable spice melange. The story explores power, politics, destiny, and survival in a harsh and complex universe.')).toBeInTheDocument();
    expect(screen.getByText('Available')).toBeInTheDocument();  
  });

  it('should display an error message if the book is not found', () => {
    (useParams as jest.Mock).mockReturnValue({ id: '999' });

    render(
      <BrowserRouter>
        <BookDetails />
      </BrowserRouter>
    );
    expect(screen.getByRole('alert')).toHaveTextContent('Book not found');
  });

  it('should have a back link to the book list', () => {
    (useParams as jest.Mock).mockReturnValue({ id: '1' });

    render(
      <BrowserRouter>
        <BookDetails />
      </BrowserRouter>
    );
    expect(screen.getByText('← Back to book list')).toBeInTheDocument();
  });
});
