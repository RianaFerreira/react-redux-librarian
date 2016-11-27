// reducers are only called when an action occurs
// reducers accept two args the current state and the triggered action
// state arg is not application state, only the state that this reducer is responsible for
// i.e. the book that was clicked on
export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED' :
    return action.payload;
  }
  return state;
}