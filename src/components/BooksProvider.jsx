import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

class BooksProvider extends React.Component {
  state = {
    searchTerm: '',
    idx: 0,
    books: [],
    selectedBook: [],
  };

  componentDidMount() {
    if (this.state.books.length === 0) {
      console.log('Mounted');
      this.getBooks();
    }
  }

  getBooks = async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm ||
          'Harry'}&startIndex=${this.state.idx}&maxResults=10`,
      );
      const books = await res.json();
      const filteredBooks = books.items.filter(
        book => book.volumeInfo.industryIdentifiers[0] && book.volumeInfo.imageLinks,
      );
      this.setState({ ...this.state, books: filteredBooks });
      console.log(this.state.books);
    } catch (e) {
      throw Error;
    }
  };

  handleSearchTermChange = (event) => {
    event.preventDefault();
    this.setState({ ...this.state, searchTerm: event.target.value });
    this.getBooks();
  };

  handleBookClick = (book) => {
    console.log(book);
    this.setState({ ...this.state, selectedBook: book }, () => {});
  };

  render() {
    return this.props.render({
      searchTerm: this.state.searchTerm,
      books: this.state.books,
      handleSearchTermChange: this.handleSearchTermChange,
      selectedBook: this.state.selectedBook,
      handleBookClick: this.handleBookClick,
    });
  }
}

BooksProvider.propTypes = {
  render: PropTypes.func.isRequired,
};

export default withRouter(BooksProvider);
