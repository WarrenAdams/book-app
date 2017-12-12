import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import BookCard from './BookCard';

const BookContainer = props => (
  <div>
    <h1>Books</h1>

    <Search handleSearchTermChange={props.handleSearchTermChange} searchTerm={props.searchTerm} />
    <div>{props.books.map(book => <BookCard key={book.etag} book={book} />)}</div>
  </div>
);

BookContainer.propTypes = {
  handleSearchTermChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BookContainer;
