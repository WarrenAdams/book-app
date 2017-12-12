import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class BookCard extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <div>
        <Link
          onClick={() =>
            this.props.handleBookClick(
              this.props.book.volumeInfo.industryIdentifiers[0].identifier,
            )}
          to={`/DetailsPage/${this.props.book.volumeInfo.industryIdentifiers[0].identifier}`}
        >
          <img
            src={this.props.book.volumeInfo.imageLinks.thumbnail}
            alt={`${this.props.book.volumeInfo.title} thumbnail`}
          />
          <h1>{this.props.book.volumeInfo.title}</h1>
        </Link>
      </div>
    );
  }
}

BookCard.propTypes = {
  handleBookClick: PropTypes.func.isRequired,
  book: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string,
      }),
      title: PropTypes.string,
      industryIdentifiers: PropTypes.array,
    }),
  }).isRequired,
};

export default BookCard;
