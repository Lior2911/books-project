import React    from "react";
import template from "./Books.jsx";

class Books extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Books;
