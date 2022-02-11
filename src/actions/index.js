//action creator

export const selectBook = (book) => {
  // return an action
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
};
