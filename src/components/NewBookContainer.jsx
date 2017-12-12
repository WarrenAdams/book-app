import React from 'react';
import BooksProvider from './BooksProvider';
import Search from './Search';
import BookCard from './BookCard';

const NewBookContainer = () => (
  <BooksProvider
    render={({
 searchTerm, books, handleSearchTermChange, handleBookClick,
}) => (
  <div>
    <h1>Books</h1>

    <Search handleSearchTermChange={handleSearchTermChange} searchTerm={searchTerm} />
    <div>
      {books.map(book => (
        <BookCard key={book.etag} book={book} handleBookClick={handleBookClick} />
          ))}
    </div>
  </div>
    )}
  />
);

export default NewBookContainer;
