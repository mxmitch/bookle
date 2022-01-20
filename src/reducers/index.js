const booksReducer = () => {
  return [
    {
      title: "War and Peace",
      author: "Tolstoy, Leo",
      publishDate: 1869
    },
    {
      title: "Crime and Punishment",
      author: "Dostoevsky, Fyodor",
      publishDate: 1866
    },
    {
      title: "Doctor Zhivago",
      author: "Pasternak, Boris",
      publishDate: 1957
    },
    {
      title: "The Master and Margarita",
      author: "Bulgakov, Mikhail",
      publishDate: 1967
    }
  ];
};

const selectedBookReducer = (selectedBook = null, action) => {
  if (action.type === "BOOK_SELECTED") {
    return action.payload;
  }
  return selectedBook;
};

export default combineReducers({
  books: booksReducer,
  selectedBook: selectedBookReducer
});
