import React from 'react';
import PropTypes from 'prop-types';
import BooksProvider from './BooksProvider';

const DetailsPage = props => (
  <BooksProvider
    render={(
      { books, searchTerm }, // filter all books on page
    ) => (
      <div>
        <div>
          <img
            src={console.log(searchTerm) /* selectedBook[0].volumeInfo.imageLinks.thumbnail */} // if statement checking if selectedbook is empty
            alt="thumbnail"
          />
        </div>
        <div>{/* console.log(props.match.params.id) /* selectedBook[0].volumeInfo.title */}</div>
      </div>
    )}
  />
);

DetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DetailsPage;
