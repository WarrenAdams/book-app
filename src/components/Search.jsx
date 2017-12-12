import React from 'react';
import PropTypes from 'prop-types';

const Search = props => (
  <input
    onChange={props.handleSearchTermChange}
    value={props.searchTerm}
    type="text"
    placeholder="Search"
  />
);

Search.propTypes = {
  handleSearchTermChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default Search;
