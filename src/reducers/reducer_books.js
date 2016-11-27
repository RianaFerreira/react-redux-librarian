// simple function that returns and array of books
// export default keywords make the function available to other files in project by importing it
// wire reducer into app ./index.js
export default function() {
  return [
    { title: 'Javascript: The good Parts', pages: 101 },
    { title: 'The art of travel', pages: 38 },
    { title: 'The Hobbit', pages: 87 },
    { title: 'Eloquent Ruby', pages: 1 }
  ];
}