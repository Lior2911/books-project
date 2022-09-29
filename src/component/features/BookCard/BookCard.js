import React    from "react";
import template from "./BookCard.jsx";

class BookCard extends React.Component {
  render() {
    return template.call(this);
  }
}

export default BookCard;
