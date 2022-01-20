//action creator

export const selectBook = () => {
  // return an action
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
};
