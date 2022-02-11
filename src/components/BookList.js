import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions";

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <div className="ui fluid card" key={book.title}>
          <div className="content">{book.title}</div>
          <button
            className="ui button"
            onClick={() => this.props.selectBook(book)}
          >
            Select
          </button>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { books: state.books };
};

export default connect(mapStateToProps, { selectBook })(BookList);
