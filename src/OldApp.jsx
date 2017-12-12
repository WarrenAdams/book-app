import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailsPage from './components/DetailsPage';
import BookContainer from './components/BookContainer';
import FourOhFour from './components/FourOhFour';
import './App.css';

class App extends Component {
  state = {
    searchTerm: '',
    idx: 0,
    books: [],
  };

  componentDidMount() {
    this.getBooks();
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

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <BookContainer
                  handleSearchTermChange={this.handleSearchTermChange}
                  searchTerm={this.state.searchTerm}
                  books={this.state.books}
                  {...props}
                />
              )}
            />
            <Route
              path="/DetailsPage/:id"
              component={props => <DetailsPage books={this.state.books} {...props} />}
            />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
