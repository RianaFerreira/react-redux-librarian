// Action Creator that is triggered from a component 
// by a user event, ajax response, page load completion
export function selectBook(book) {
  // selectBook is an ActionCreator 
  // it needs to retun an action - an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}