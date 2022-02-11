import React from "react";
import BookList from "./BookList";
import BookDetail from "./BookDetail";

const App = () => {
  return (
    <div className="ui padded grid">
      <div className="ui row">
        <div className="column">
          <h1 className="ui center aligned header">Bookle</h1>
        </div>
      </div>
      <div className="ui row">
        <div className="column">
          <BookList />
          <BookDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
