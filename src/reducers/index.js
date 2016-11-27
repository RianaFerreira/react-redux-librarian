import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  // value is the output of reducer_books function
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
