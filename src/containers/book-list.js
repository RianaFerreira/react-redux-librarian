import React, { Component } from 'react';
import { connect } from 'react-redux';
// wire the ActionCreator to redux
import { selectBook } from '../actions/index';
// function ensures that action produced by ActionCreator flows through all Reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return(
        <li
          key={ book.title }
          onClick={ () => this.props.selectBook(book) }
          className="list-group-item">
          { book.title }
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    );
  }
}

// Takes entire app state as arg and returns props for BookList container
// if app state changes
//  - the container will automatically re-render
//  - the required state will be assigned to the component props
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// The returned value from this function will become props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, 
  // the result (a JS object) should be passed to all the app reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Don't export the BookList class rather export the merged container
// The container links the react BookList component to the required redux state
// Promote BookList component to a container
// - it needs to know about selectBook, the dispatch method 
// - makes the method available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);