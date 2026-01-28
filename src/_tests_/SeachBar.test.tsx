import { render,screen,fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import "@testing-library/jest-dom";

describe('SearchBar component', () => {
  it('should render search input with the correct placeholder', () => {
    render(<SearchBar onSearch={() => {}} />);

    const searchInput = screen.getByPlaceholderText('Search books');
    expect(searchInput).toBeInTheDocument();
  });

  it('should call onSearch with correct value when text is typed', () => {
    const onSearchMock = jest.fn();
    render(<SearchBar onSearch={onSearchMock} />);

    const searchInput = screen.getByPlaceholderText('Search books');
    fireEvent.change(searchInput, { target: { value: 'React' } });

    // Check if the mock function was called with the correct argument
    expect(onSearchMock).toHaveBeenCalledWith('react');
  });
});
